import { User } from "@models";
import jwt, { Secret } from "jsonwebtoken";

type Decoded = {
  email: string;
};

export const generateToken = ({ id, email, code }: User, expiration: string) => jwt.sign(
  { user_id: id, email, code },
  process.env.JWT_SECRET as string,
  {
    expiresIn: expiration,
  },
);

export const verifyRefresh = (email: string, token: string) => {
  try {
    const secret: Secret = process.env.JWT_SECRET as Secret;
    const decoded = jwt.verify(token, secret);
    return (decoded as Decoded).email === email;
  } catch (error) {
    return false;
  }
};
