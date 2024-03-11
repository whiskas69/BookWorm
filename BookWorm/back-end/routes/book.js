import express from 'express'
import { 
    createOrUpdateBook,
    readAllBook,
    getBookById,
    deleteBookById } from '../query/book.js'

const router = express.Router()

// READ ALL Users
router.get('/book', async(req, res) => {
    const { success, data } = await readAllBook()

    if(success){
        return res.json({success, data})
    }
    return res.status(500).json({success:false, messsage: "Error"})
})

// Get User by ID
router.get('/book/:id', async(req, res) => {
    const { id } = req.params
    const { success, data } = await getBookById(id)
    console.log(data)
    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Create User
router.post('/createbook', async(req, res) => {
    console.log("post book")
    const { success, data } = await createOrUpdateBook(req.body)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: 'Error'})
})


// Update User by ID
router.put('/book/:id', async(req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdateBook(id)

    if(success){
        return res.json({success, data})
    }

    return res.status(500).json({success: false, message: "Error"})
})


// Delete User by Id
router.delete('/deletebook/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteBookById(id)
    if (success) {
      return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error'})
})
  



export default router