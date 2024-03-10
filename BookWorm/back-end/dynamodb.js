//const dotenv = require('dotenv');
import dotenv from 'dotenv';
dotenv.config();

import AWS from 'aws-sdk';

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZK2W5YQGX"

const AWS_SECRET_ACCESS_KEY = "m4or6ByvYjTnDqgVe9pBYVARRmsRSh4FwHLA8H1g"

const AWS_SESSION_TOKEN = `FwoGZXIvYXdzEB8aDCAsxrlGfzl/H7BTRCLFAZcGXmY7DvrMebOyAdv6AfTKwGBpOj6YAwijBPNoCZtsmEs5Hd5MmTTxY0eXdv0OBIr/v68/RcoCuRmQMm3rtcXJ4O/xPDqjVsFGJ5FpQTVIWa8sJiJFNdQ3tTZHEmJzszICA0WM60PgZFYtk2iENtJ5nj31q3UbOlLOESlAsEbra1ouExRvPfvhNrH5VG1SRwW7ZNcYKeKfuB5xM/basofuDo0nxcIl1ixM+3ylLksnCGAqql3bJGs7duMWbVh/RPkssBvZKPbltq8GMi3SCUeHWowK6V+CMxSVx7yRubi8IlEhDEgWTX+W0VqFTCRcy8PzSn0fDunU7B0=`

const accessKeyId  = AWS_ACCESS_KEY_ID
const secretAccessKey = AWS_SECRET_ACCESS_KEY
const sessionToken =  AWS_SESSION_TOKEN

const credentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken:sessionToken,
  });
  
AWS.config.update({
    region: "us-east-1",
    credentials: credentials
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}
