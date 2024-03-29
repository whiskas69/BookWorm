const express = require("express");
const  { createOrUpdatecomment,
    readAllcomment,
    getcommentById,
    deletecommentById } = require('../query/comment.js');

const router = express.Router()

// READ ALL Users
router.get('/comment', async(req, res) => {
    
    const { success, data } = await readAllcomment()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get User by ID
router.get('/book/:id', async(req, res) => {
    console.log("req", req.params)
    const { id } = req.params
    console.log("id", req.params)
    const { success, data } = await getcommentById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Create User
router.post('/createcomment', async(req, res) => {
    
    console.log("post book")
    
    const id = Math.floor(1000 + Math.random() * 9000);
    const { text,bookname, username,  userID } = req.body;
    console.log(req.body)
    console.log("id", id)
    
    req.body.id = id;
        console.log(req.body)
    // Example validation (replace with your actual authentication logic)
    try{
         const { success, data } = await createOrUpdatecomment(req.body)
         console.log("succes comment", success)
         console.log("succes data", data)
         res.json({ message: 'register successful' });
    }
    catch(err){
        console.log("catch comment", err)
         res.status(401).json({ message: 'Invalid credentials' });
    }
    
    //const { success, data } = await createOrUpdateBook(req.body)

    //if(success){
    //    return res.json({success, data})
    //}

    //return res.status(500).json({success: false, message: 'Error'})
})


// Update User by ID
router.put('/book/:id', async(req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdatecomment(id)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete User by Id
router.delete('/deletebook/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deletecommentById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



exports.router = router;