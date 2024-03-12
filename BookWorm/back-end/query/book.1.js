import {db, BookTable} from '../dynamo'

// Create or Update users
const createOrUpdateBook = async (data = {}) =>{
    const params = {
        TableName: BookTable,
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
const readAllBook = async()=>{
    const params = {
        TableName: BookTable
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}

// Read Users by ID
const getBookById = async (value, key = 'BookId') => {
    const params = {
        TableName: BookTable,
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
const deleteBookById = async(value, key = 'BookId' ) => { 
    const params = {
        TableName: BookTable,
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


export {
    createOrUpdateBook,
    readAllBook,
    getBookById,
    deleteBookById
}