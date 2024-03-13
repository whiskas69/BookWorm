const express = require("express");
const  { createOrUpdateshelf,
    readAllshelf,
    getshelfById,
    deleteshelfById } = require('../query/shelf.js');

const router = express.Router()

// READ ALL Users
router.get('/shelf', async(req, res) => {
    
    const { success, data } = await readAllshelf()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get User by ID
router.get('/shelf/:id', async(req, res) => {
    console.log("req", req.params)
    const { id } = req.params
    console.log("id", req.params)
    const { success, data } = await getshelfById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Create User
router.post('/createshelf', async(req, res) => {
    
    console.log("post book")
    
    const id = req.body.id.toString() 
    ;
    const { bookname, writer, text, img, userId } = req.body;
    console.log("shelf", req.body)
    console.log("id", id)
    
    req.body.id = id;
    console.log(req.body)
    // Example validation (replace with your actual authentication logic)
    try{
        console.log("back shelf")
         const { success, data } = await createOrUpdateshelf(req.body)
         
         res.json({ message: 'register successful' });
    }
    catch(err){
         res.status(401).json({ message: 'Invalid credentials' });
    }
    
})


// Update User by ID
router.put('/shelf/:id', async(req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdateshelf(id)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete User by Id
router.delete('/deleteshelf/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteshelfById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



exports.router = router;