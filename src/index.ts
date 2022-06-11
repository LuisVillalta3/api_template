/* eslint-disable no-console */
import app from "./app";
import "./models";

async function run() {
  const port = Number(process.env.APP_PORT) || 3000;
  const host = process.env.APP_HOST || "localhost";

  try {
    app.listen(port, host);
    console.log("Server running on port", `${host}:${port}`);
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
}

run();
