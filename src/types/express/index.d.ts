/* eslint-disable no-unused-vars */
import express from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: string | jwt.JwtPayload,
    }
  }
}
