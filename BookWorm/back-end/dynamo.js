const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZLWR4JUSA"
const AWS_SECRET_ACCESS_KEY = "3Bh3/97Uf0BGreuiMaRmhm1xNXJpu6Et9+sFNewc"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzED0aDJYUsmvhITJaTwxbuCLFATUbnfmqsGNH0xUrwVOH4Girx18ue/NHTDuqRRh0RZ1OLRTfxg/ftF3VgwuNFB8VSejaBAkeiIQJRxzxodDd/8tGZrtqSJkJKQs5ynNqE64HDHkZVZ4Dr5ZYAHZURPhm8BwE8gF5j/ZVCTtI2OHjIBG8VcBdYW1D+P1o4cQOto/3VpYmJDSAar51ATQIYQ3N/b8pKCqdx//ML6Ojg5k3hbu1VlGHelZVeBDmhkFznFLaxJkjCioxd8zxwgHHGaniNaCwrAcLKNvFva8GMi1JAM2atqr69tQQRLzGUzbTXzutF4mnxRGiC6bPlW89xz7NRwMQcpCqCitXpMg=`

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

const UserTable = 'users'



module.exports = {
    db,
    UserTable
}





