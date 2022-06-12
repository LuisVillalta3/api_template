import { Schema } from "ajv";

export const LoginSchema: Schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      errorMessage: "Email must be a string",
    },
    password: {
      type: "string",
      errorMessage: "Password must be a string",
    },
  },
  required: ["email", "password"],
  additionalProperties: false,
  errorMessage: {
    required: {
      email: "Email is required",
      password: "Password is required",
    },
  },
};
