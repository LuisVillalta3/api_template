import { Router } from "express";
import { LoginController } from "@/controllers/Auth/LoginController";
import { validate } from "@/middleware/validate";
import { LoginSchema } from "@/schemas/LoginSchema";

const router = Router();

router.post("/login", validate(LoginSchema), LoginController.login);

export { router as authRouter };
