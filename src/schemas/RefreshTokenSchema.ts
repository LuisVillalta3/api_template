import { Schema } from "ajv";

export const RefreshTokenSchema: Schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      errorMessage: "Email must be a string",
    },
    refreshToken: {
      type: "string",
      errorMessage: "Refresh token must be a string",
    },
  },
  required: ["email", "refreshToken"],
  additionalProperties: false,
  errorMessage: {
    required: {
      email: "Email is required",
      refreshToken: "Refresh token is required",
    },
  },
};
