import { Router } from "express";
import { LoginController } from "@/controllers/Auth/LoginController";

const router = Router();

router.post("/login", LoginController.login);

export { router as authRouter };
