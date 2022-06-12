import { Request, Response } from "express";
import { HttpException } from "@/errors/HttpError";
import { Error } from "@/schemas/mongo/Error";

export const Exec = (callback: Function) => async (req: Request, res: Response) => {
  try {
    await callback();
  } catch (error) {
    const e: HttpException = error as HttpException;

    const err = await new Error({
      http_code: e.statusCode,
      message: e.message,
      exception: error,
    });

    await err.save();

    const returnError = (r: Request, rs: Response) => {
      rs.status(e.statusCode).json({
        message: e.message,
      });
    };

    returnError(req, res);
  }
};
