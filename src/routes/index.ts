import app from "../app";
import { authRouter } from "./auth.routes";

app.use("/api/v1/auth", authRouter);
