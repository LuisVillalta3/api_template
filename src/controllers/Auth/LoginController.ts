import { Request, Response } from "express";
import { User } from "@models";
import bcrypt from "bcryptjs";
import { HTTP_BAD_REQUEST, HTTP_OK } from "@/utils/HttpCode";
import { generateToken, verifyRefresh } from "@/utils/verifyToken";

type LoginBody = {
  email: string;
  password: string;
}

export class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password }: LoginBody = req.body;

    const user = await User.findOne<User>({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(HTTP_BAD_REQUEST).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user, process.env.TOKEN_EXPIRES_IN as string);

    const refreshToken = generateToken(user, process.env.REFRESH_TOKEN_EXPIRES_IN as string);

    return res.status(HTTP_OK).json({ user, token, refreshToken });
  }

  static async refreshToken(req: Request, res: Response) {
    const { email, refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(HTTP_BAD_REQUEST).json({ error: "Invalid credentials" });
    }

    const isValid = verifyRefresh(email, refreshToken);

    if (!isValid) {
      return res.status(HTTP_BAD_REQUEST).json({ success: false, error: "Invalid token,try login again" });
    }

    const user = await User.findOne<User>({ where: { email } });

    if (!user) {
      return res.status(HTTP_BAD_REQUEST).json({ error: "Invalid credentials" });
    }

    const token = generateToken(user, process.env.TOKEN_EXPIRES_IN as string);

    const newRefreshToken = generateToken(user, process.env.REFRESH_TOKEN_EXPIRES_IN as string);

    return res.status(200).json({ user, token, refreshToken: newRefreshToken });
  }
}
