import { Request, Response } from "express";
import { User } from "@models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { HTTP_BAD_REQUEST, HTTP_OK } from "@/utils/HttpCode";

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

    const token = jwt.sign(
      { user_id: user.id, email, code: user.code },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: "2h",
      },
    );

    return res.status(HTTP_OK).json({ user, token });
  }
}
