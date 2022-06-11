/* eslint-disable no-console */
import { db } from "@config/db";
import app from "./app";
import "./models";

async function run() {
  try {
    await db.authenticate();
    app.listen(3000);
    console.log("Server running on port 3000");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

run();
