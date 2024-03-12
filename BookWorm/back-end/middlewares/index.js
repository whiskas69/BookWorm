const { db, UserTable } = require(".../dynamo");

async function logger(req, res, next) {
    const timestamp = new Date().toISOString().substring(0, 19)
    // ดูว่าเข้า Path ไหน เวลาไหน
    console.log(`${timestamp} | ${req.method}: ${req.originalUrl}`)
    next()
}

//checkว่าเรา login รึยัง
async function isLogIn(req, res, next) {
    // get data in headers
    // สิทธิ์ในการเข้าถึง authorization
    let authorization = req.headers.authorization

    // ถ้าไม่ได้แนบ authorization ขึ่นว่าไม่ได้ login
    if (!authorization) {
        console.log('!authorization')
        return res.status(401).send('You are not logged in')
    }

    let [part1, part2] = authorization.split(' ') //มาแบบ bareir 
    if (part1 !== 'Bearer' || !part2) { //จะส่งมาเป็น header: {"authorization": "Bearer $token"}
        console.log("part1", part1,"part2", part2)
        return res.status(401).send('You are not logged in')
    }

    // Check token
    const [tokens] = await db.query('select * from token where token = ?', [part2])
    const token = tokens[0]

    console.log("token", token)
    
    if (!token) {
        console.log('!token')
        return res.status(401).send('You are not logged in')
    }

    // Set user
    const [users] = await db.query(
        'select user_id, username, role from login where user_id = ?', [token.user_id]
    )

    console.log('"index.js middleware" token user', users)
    // ข้อมูลของ user ที่ login เข้ามา
    req.user = users[0]

    console.log('"index.js middleware" token user', req.user)


    next()
}

module.exports = {
    logger,
    isLogIn
}