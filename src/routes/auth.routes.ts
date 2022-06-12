import { Router } from "express";
import { LoginController } from "@/controllers/Auth/LoginController";
import { validate } from "@/middleware/validate";
import { LoginSchema } from "@/schemas/LoginSchema";
import { RefreshTokenSchema } from "@/schemas/RefreshTokenSchema";

const router = Router();

router.post("/login", validate(LoginSchema), LoginController.login);
router.post("/refresh-token", validate(RefreshTokenSchema), LoginController.refreshToken);

export { router as authRouter };
