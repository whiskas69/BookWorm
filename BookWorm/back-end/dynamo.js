const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "AWS_SECRET_ACCESS_KEY"

const AWS_SECRET_ACCESS_KEY = "AWS_SECRET_ACCESS_KEY"
const AWS_SESSION_TOKEN=`AWS_SESSION_TOKEN`
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





