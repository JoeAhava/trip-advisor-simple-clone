import { login } from "../controllers/auth.mjs";

import { Router } from "express";

const router = Router();

router.post("/login", login);

export default router;
