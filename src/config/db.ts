import { Sequelize } from "sequelize";
import "dotenv/config";

const {
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
} = process.env;

if (typeof DATABASE_PORT === "undefined" || typeof DATABASE_NAME === "undefined" || typeof DATABASE_USER === "undefined" || typeof DATABASE_PASSWORD === "undefined" || typeof DATABASE_HOST === "undefined") {
  throw new Error("Database configuration is missing");
}

export const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  dialect: "postgres",
});
