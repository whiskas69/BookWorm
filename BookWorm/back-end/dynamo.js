const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZLKS6BSUW"
const AWS_SECRET_ACCESS_KEY = "WmjYHIQBjif7yz/uNYBL1bTXIQ3E0v4DYmPWoqwM"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEEsaDFAI/soxuHdgSvmJ2SLFAWQAg1Iojp1vIr1RqMCCmWa3WtV6WR8QEtyDGooRoeiSAI8DmfYxmDJo6HOqRyLenBjWg2qsHYa5d0Sd/+fPm5RROhPgfA+dHNrpSzE59sKmUm1pKe3fF+/V8vvvc5vipzdmkvphGxRqyDg1x6k9SelYkfIlZUFQFfAUjamERcg3c7oZ5ViSTxIZQ6bGyyTYO6RRdgIHh/ku6P8ooEKS8sgnUrWcFAuQKF+M9LyiPYJ9FCES9x9/pls7o1oE6qYp5IHB8qJYKPPFwK8GMi1vH4c+e3k2fCHYTcVlam1OJ2HFtnhpZI7JuLs6o6tXzMk3ISp4cGDDnFENtwg=`

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

module.exports = {
    db,
    UserTable,
    BookTable,
}





