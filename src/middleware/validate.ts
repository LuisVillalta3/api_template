import { NextFunction, Request, Response } from "express";
import Ajv, { Schema } from "ajv";
import ajvErrors from "ajv-errors";
import { HTTP_BAD_REQUEST } from "@/utils/HttpCode";

const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const ajv = new Ajv({ useDefaults: true, allErrors: true, $data: true });
  ajvErrors(ajv);
  const validSchema = ajv.compile(schema);

  const valid = validSchema(req.body);

  if (!valid) {
    return res.status(HTTP_BAD_REQUEST).json({
      message: "Invalid request",
      errors: validSchema.errors,
    });
  }

  return next();
};

export { validate };
