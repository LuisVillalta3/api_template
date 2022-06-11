import jwt from "jsonwebtoken";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { HTTP_FORBIDDEN, HTTP_UNAUTHORIZED } from "@/utils/HttpCode";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(HTTP_FORBIDDEN).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string);
    req.user = decoded;
  } catch (err) {
    return res.status(HTTP_UNAUTHORIZED).send("Invalid Token");
  }

  return next();
};

export default verifyToken;
