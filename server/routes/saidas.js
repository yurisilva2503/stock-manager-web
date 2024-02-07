import express from "express";
import { getExits, addExits, updateExits, deleteExits } from "../controllers/saida.js";
const router = express.Router();

router.get("/exits", getExits);
router.post("/exits", addExits);
router.put("/exits/update/:id", updateExits);
router.delete("/exits/delete/:id", deleteExits);

export default router;