const {MongoClient} = require('mongodb')
const client = new MongoClient(process.env.MONGO_URL)
const database = client.db(process.env.MONGO_DB)   

module.exports =  database