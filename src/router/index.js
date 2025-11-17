import express from "express";
import alunoRouter from "./alunoRouter.js";

const router = express.Router();

router.use("/alunos", alunoRouter);

export default router;
