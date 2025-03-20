// import models from '../models/index.js';
// import db from '../config/connection.js';

// export default async (modelName: "Question", collectionName: string) => {

//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
import connection from '../config/connection.js';

export default async (_modelName: string, collectionName: string) => {
  try {
    // Check if the collection exists using the connection directly
    const db = connection.db;
    
    if (!db) {
      throw new Error('Database connection not established');
    }
    
    const modelExists = await db
      .listCollections({ name: collectionName })
      .toArray();

    if (modelExists.length) {
      await connection.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}