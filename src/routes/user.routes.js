import express from "express";
import { register } from "../modules/users/user.controller";

const router = express.Router();

router.post("/register", register);
// router.post('/login', login);

export default router;
