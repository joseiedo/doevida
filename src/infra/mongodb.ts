import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URI;

if (!uri) {
  throw new Error("Missing environment variable 'DATABASE_URI' ");
}

const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // Use a global variable so that the value is preserved across module reloads caused by Hot Reload
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // No need to do this in production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
