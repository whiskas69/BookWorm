const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZLNAR7MAU"
const AWS_SECRET_ACCESS_KEY = "JKMgfayTtQIWPmuLnI91C5khQzn1iBeIfBQagCGE"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEDUaDLB+SwUIKSvxay5N/SLFAeBh3pAaHPpVvYv8dSN6RKG0Vrksh+m0uukSeEM3J26B4kILlmC7qpHOmRWc5XPW70T638fFdXo2Mws5z0+DwcNJUzCT0xTAPJlgZFhoWQ56jbAw+jlmxA+X01W4Vug9KPMBZW4WLshNJmZee9mo8jezFN/hXE/OCkAOAwJkM77N6ytybshvjUQvPQVLpTYdYnMv2/ib+KmiW+pgGjJy8nutxpTVWqAuK8axrhlHKlG1/LYYVmqZhAwDQnQGVRaVEhU9Cqs1KKvVu68GMi318NJIvRQxNM9rzUwKZI/WdorEGp/oUridCHVltI7xa6fJ+sbZ42MxmDx2oMg=`

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

const Table = 'users'



module.exports = {
    db,
    Table
}





