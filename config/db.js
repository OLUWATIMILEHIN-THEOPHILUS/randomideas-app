const mongoose = require('mongoose')


const connectDB = async () =>  {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connection to: ${conn.connection.host} was successful`);
}


mongoose.set('strictQuery', true);

module.exports = connectDB;