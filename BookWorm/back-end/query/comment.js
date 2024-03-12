const { db, CommentTable } = require('../dynamo.js');
// Create or Update users
const createOrUpdateComment = async (data = {}) =>{
    const params = {
        TableName: CommentTable,
        Item: data
    }
    try{
        console.log("try")
        await db.put(params).promise()
        return { success: true }
        console.log("try")
    } catch(error){
        console.log("catch")
        return { success: false}
    }
}

// Read all users
const readAllComment = async()=>{
    const params = {
        TableName: CommentTable
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}

// Read Users by ID
const getCommentById = async (value, key = 'CommentId') => {
    const params = {
        TableName: CommentTable,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } =  await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return {  success: false, data: null}        
    }
}

// Delete User by ID
const deleteCommentById = async(value, key = 'CommentId' ) => { 
    const params = {
        TableName: CommentTable,
        Key: {
            [key]: parseInt(value)
        }
    }
        
    try {
        await db.delete(params).promise()
        return {  success: true }

    } catch (error) {
        return{ success: false }
    }
}


module.exports = {
    createOrUpdateComment,
    readAllComment,
    getCommentById,
    deleteCommentById
}