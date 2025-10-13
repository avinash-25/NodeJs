import mongodb from "mongodb";

async function connectDB() {
    //! define connection
    let client = await mongodb.MongoClient.connect("mongodb://127.0.0.1:27017");
    //? "127.0.0.1" instead of localhost

    //! create database
    let database = client.db("userRegister");

    //! create collection
    let collection = await database.createCollection("users");

    //! return that collection
    return collection;
}

export default connectDB;