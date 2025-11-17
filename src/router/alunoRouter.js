import express from "express";
import { alunoController } from "../controllers/alunoController.js";
import { alunoSchema } from "../validations/alunoValidation.js";
import { zodValidation } from "../middlewares/zodValidation.js";

const router = express.Router();

router.post("/", zodValidation(alunoSchema), alunoController.criar);
router.get("/", alunoController.listar);
router.get("/:id", alunoController.buscar);
router.delete("/:id", alunoController.deletar);
    

export default router;
