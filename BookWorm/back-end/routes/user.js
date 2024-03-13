const express = require("express");
const http = require('http');
const url = require('url');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const  { createOrUpdate, deleteUserById, getUserById, readAllUsers } = require('../query/user.js');

router = express.Router();

router.get("/",  async function(req, res, next){
    const { success, data } = await readAllUsers()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// เช็คได้แล้ว
router.post("/login", async (req, res, next) =>{
    const { username, password } = req.body;
 
     const { success, data } = await readAllUsers()
     
     console.log(data)
     
     const user = data.find(user => user.username === username && user.password === password);
    
    if (user) {
        res.json({ userId: user.id, username:user.username, message: 'Login succes' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// เข้าdbแล้ว แต่ยังไม่วาลิอะไรทั้งนั้น
router.post("/register", async(req, res, next) =>{
    const id = Math.floor(1000 + Math.random() * 9000);
    const { username, email, password, displayname } = req.body;
    console.log(req.body)
    console.log("id", id)
    
    req.body.id = id;

    // Example validation (replace with your actual authentication logic)
    try{
         const { success, data } = await createOrUpdate(req.body)
         res.json({ message: 'register successful' });
    }
    catch(err){
         res.status(401).json({ message: 'Invalid credentials' });
    }
});


exports.router = router;