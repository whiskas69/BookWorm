// import {db, Table} from './db.config.js'
const { db, UserTable } = require('../dynamo.js');

// Create or Update users
const createOrUpdate = async (data = {}) =>{
    const params = {
        TableName: UserTable,
        Item: data
    }

    console.log(params.Item)

    try{
        console.log("folk")
        await db.put(params).promise()
        return { success: true }
        
    } catch(error){
        console.log(error)
        return { success: false}
    }
}

// Read all users
const readAllUsers = async()=>{

    const params = {
        TableName: UserTable
    }
    
    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }


    } catch(error){
        console.log(error)
        return { success: false, data: null }
    }

}

// Read Users by ID
const getUserById = async (value, key = 'id') => {
    const params = {
        TableName: UserTable,
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
const deleteUserById = async(value, key = 'id' ) => { 
    const params = {
        TableName: UserTable,
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
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}