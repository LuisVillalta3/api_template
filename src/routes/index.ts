import app from "../app";
import { authRouter } from "./auth.routes";

app.use("/auth", authRouter);
