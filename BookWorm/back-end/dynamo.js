const dotenv = require('dotenv');
dotenv.config();
const AWS = require('aws-sdk');

const AWS_ACCESS_KEY_ID = "ASIAQ3EGT5ZZN6EROXTA"
const AWS_SECRET_ACCESS_KEY = "kKqngS/XyMo8SIV+0otEzbPUdrui/1vCnS4I+VKl"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEFQaDFO0kDie6JfNGwq5sCLFATarR0P0oytvtzHtE061MgZOGu+/LGMaF5lP5dr4mabPmV9usvvsbJL6BBZlAQfqRzoH5yLQKZ8Ub5OX0oDdjoT24/iJkmWfBwCObfoRmUF3SzAvOf6S4CIYmLn4px5gF3rziyzgfLTFibdLPbYx2VehZVjNhoaoD7pdddWfseLLNMtKndSTu33MYQssJmNz4THgAHQ25q4OVnXDoG2rhnRPTGUTNKJnQbsM2SyVY/6QuLJZoxHVvEyjuQV3ExTtoypgsiC2KN60wq8GMi1Oc16Yiqalr7/CeQpctWvfcRxPXQ72wexeC+vIYB5VM9OAUiqdGanxpOgiFMg=`

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
const CommentTable = "comment"

module.exports = {
    db,
    UserTable,
    BookTable,
    CommentTable
}





