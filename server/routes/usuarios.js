import express from "express";
import { getUserByCredentials, createUser } from "../controllers/usuario.js";
const router = express.Router();

router.get("/users/", getUserByCredentials);
router.post("/users/", createUser);


export default router;
