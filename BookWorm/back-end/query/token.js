//import {db, TokenTable} from '../dynamo'
const { db, TokenTable } = require('../dynamo.js');

// Create or Update users
const createOrUpdateToken = async (data = {}) =>{
    const params = {
        TableName: TokenTable,
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
const readAllToken = async()=>{
    const params = {
        TableName: TokenTable
    }

    try{
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }

    } catch(error){
        return { success: false, data: null }
    }
}

// Read Users by ID
const getTokenById = async (value, key = 'TokenId') => {
    const params = {
        TableName: TokenTable,
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
const deleteTokenById = async(value, key = 'TokenId' ) => { 
    const params = {
        TableName: TokenTable,
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
    createOrUpdateToken,
    readAllToken,
    getTokenById,
    deleteTokenById
}