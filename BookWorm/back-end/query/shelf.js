const { db, ShelfTable } = require('../dynamo.js');

// Create or Update users
const createOrUpdateshelf = async (data = {}) =>{
    const params = {
        TableName: ShelfTable,
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
const readAllshelf = async()=>{
    const params = {
        TableName: ShelfTable
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}

// Read Users by ID
const getshelfById = async (value, key = 'id') => {
    const params = {
        TableName: ShelfTable,
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
const deleteshelfById = async(value, key = 'BookId' ) => { 
    const params = {
        TableName: ShelfTable,
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
    createOrUpdateshelf,
    readAllshelf,
    getshelfById,
    deleteshelfById
}