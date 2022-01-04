import { Router } from "express";
import { createUser } from "../controllers/users.mjs";

const router = Router();

router.post("/", createUser);

export default router;
