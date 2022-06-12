import mongoose from "mongoose";

export const mongoDb = async () => {
  const db = process.env.MONGO_DB;
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const user = process.env.MONGO_USER;
  const pass = process.env.MONGO_PASS;

  const client = await mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/?authMechanism=DEFAULT&authSource=${db}`);

  return client;
};
