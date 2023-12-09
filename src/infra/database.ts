import clientPromise from "./mongodb";

export async function getDBClient() {
  try {
    const client = await clientPromise;
    const db = client.db("BloodCenters");
    return db;
  } catch (e) {
    console.error(e);
  }
}
