const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIA2UC3FYIYJP5WNG3K"

const AWS_SECRET_ACCESS_KEY = "K7dJB7/cAxeR+ehvm4XyilXpwsILpVEZWgUSppQq"
const AWS_SESSION_TOKEN= `FwoGZXIvYXdzEBgaDOygThmCgMLQiQvzCiLFAS8+S3V3DOJkr1mlqXKROxnmpG+11QdRwbZK6XNYRhclSFf0jEEAK3UHgbGnb8BjLBYMofEeBhu07pFPs+No078px7kHgo43rQ0YX22CQXWhxpRPmJEYwRjYsKI1qGE3VpRSB/kd3WGVSbLQwbLwjsFfGZrb/sqChZHnjp08+VTuAPIw8K7LaIsaE5OtHDNa00pk2eUr3qqzty2ncSlGcUmOXtO7UZJIDuTE38azu1WjTdq2cMf1SzneX3cKed8DHpAIKR4WKICjta8GMi2A5JEvGbsWn0ONfuWVqiFrHNTmjkTa7hZS6rUZ/4Z4DhOi6ofdq1fdHs3mGVc=`
const accessKeyId  = AWS_ACCESS_KEY_ID
const secretAccessKey = AWS_SECRET_ACCESS_KEY
const sessionToken =  AWS_SESSION_TOKEN


const credentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken:sessionToken,
  });

AWS.config.update({
    credentials: credentials,
    region : "us-east-1"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'Users'



module.exports = {
    db,
    Table
}




