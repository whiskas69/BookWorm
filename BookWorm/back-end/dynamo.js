const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZB6E65EV7"
const AWS_SECRET_ACCESS_KEY = "QjitglF1ycjAp/dBRU2je9FZ0bEnlQa4Mdbn7jh1"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEFwaDFD5TcU9zRHxpIbdHiLFARgWX1t2q6qCDVeAy3exQTwEh2fKm6wgy58Nwj9AuJSONhRG+PCsu7RNsr3qTqu+ULfl46vu/goXvEESCw42d2CAxbi6W9TuKU2P4jx/4tYnsNH37NhoAlS7i0WGdfj28DAty4lp+wtYAjLwT5wRhx3oCXGWkB3tkOnva+3ctPWXc7PtpGRlgGO2j8mKR/sBGWAUfppfmAudgFyIYdUh1VQm+MFd+fCQZDxF009Eye2IfWM2B/fLMk787eLwZqp1T3IuyRPBKMGaxK8GMi2RRGX/hgkq+uuuiuSs84fCDrgUxm702dMRb3kH1OMkH4YT5Lld9QtSAkcylio=`

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
const BookTable = 'books'
const CommentTable = 'comment'
const ShelfTable = 'shelf'

module.exports = {
    db,
    UserTable,
    BookTable,
    CommentTable,
    ShelfTable
}





