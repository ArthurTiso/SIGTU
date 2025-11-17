import { alunoService } from "../services/alunoService.js";

export const alunoController = {
  async criar(req, res, next) {
    try {
      const aluno = await alunoService.criarAluno(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      next(error);
    }
  },

  async listar(req, res, next) {
    try {
      const alunos = await alunoService.listarAlunos();
      res.json(alunos);
    } catch (error) {
      next(error);
    }
  },

  async buscar(req, res, next) {
    try {
      const aluno = await alunoService.buscarPorId(req.params.id);
      if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
      res.json(aluno);
    } catch (error) {
      next(error);
    }
  },

  async deletar(req, res, next) {
    try {
      await alunoService.deletarAluno(req.params.id);
      res.status(204).send();
      console.log("ID recebido:", req.params.id);
    } catch (error) {
      next(error);
    }
  },
};
