require("dotenv").config();

const {
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
} = process.env;

module.exports = {
  database: DATABASE_NAME,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  dialect: "postgres",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
};
