import mongodb from 'mongodb';

async function connectDB() {
  let client;

  try {
    console.log('Attempting to connect to MongoDB...');

    // Connect to MongoDB using IPv4 address
    client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/');
    console.log('Connected successfully to MongoDB server');

    // Access database
    let database = client.db('NodeDB');
    console.log('Accessing database: NodeDB');

    // Access collection (no need to create explicitly)
    let collection = database.collection('nodeCollection');
    console.log('Accessing collection: nodeCollection');

    // Insert a document with await
    let result = await collection.insertOne({
      name: 'abc',
      age: 23,
      createdAt: new Date()
    });

    console.log("Data added successfully!");
    console.log("Inserted document ID:", result.insertedId);

  } catch (error) {
    console.error('MongoDB operation error:', error.message);
    console.log('\n Troubleshooting:');
    console.log('1. Verify MongoDB service is running');
    console.log('2. Check if port 27017 is accessible');
    console.log('3. Ensure mongodb package is installed: npm i mongodb');
  } finally {
    // Always close the connection
    if (client) {
      await client.close();
      console.log('MongoDB connection closed');
    }
  }
}

connectDB();

















// import {
//   MongoClient
// } from 'mongodb';

// async function connectDB() {
//   let client;

//   try {
//     console.log('Attempting to connect to MongoDB...');

//     // Connect to MongoDB with better connection options
//     client = await MongoClient.connect('mongodb://localhost:27017/', {
//       serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
//       connectTimeoutMS: 10000,
//     });

//     console.log('Connected successfully to MongoDB server');

//     // Create/access database
//     let database = client.db('NodeDB');
//     console.log('Accessing database: NodeDB');

//     // Create/access collection
//     let collection = database.collection('nodeCollection');
//     console.log('Accessing collection: nodeCollection');

//     // Insert multiple documents
//     let result = await collection.insertMany([{
//         name: "Avinash",
//         age: 24,
//         createdAt: new Date()
//       },
//       {
//         name: "John",
//         age: 30,
//         createdAt: new Date()
//       }
//     ]);
//     console.log('Insert result:', result.insertedCount, 'documents inserted');

//     // Update documents
//     let updateResult = await collection.updateMany({
//       name: "Avinash"
//     }, {
//       $set: {
//         gender: "m",
//         updatedAt: new Date()
//       }
//     });
//     console.log('Update result:', updateResult.modifiedCount, 'documents modified');

//     // Find documents
//     let documents = await collection.find({}).toArray();
//     console.log('Found documents:', documents);

//     // Find one document
//     let oneDoc = await collection.findOne({
//       name: "Avinash"
//     });
//     console.log('Found one document:', oneDoc);

//   } catch (error) {
//     console.error('MongoDB connection error:', error.message);
//     console.log('\n🔧 Troubleshooting steps:');
//     console.log('1. Make sure MongoDB service is running');
//     console.log('2. On Windows: Run "net start MongoDB" in admin cmd');
//     console.log('3. Or start MongoDB Compass and check connection');
//     console.log('4. Verify MongoDB is installed and configured properly');
//   } finally {
//     // Always close the connection
//     if (client) {
//       await client.close();
//       console.log('MongoDB connection closed');
//     }
//   }
// }

// // Execute the function
// connectDB();