import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const alunoService = {
  async criarAluno(data) {
    const {
      nomeAluno,
      rg,
      cpf,
      dataNascimento,
      nomeMae,
      nomePai,
      endereco,
      situacaoFamiliar,
      dadosAcademicos,
      informacoesBolsa,
      contato,
    } = data;

    return await prisma.aluno.create({
      data: {
        nomeAluno,
        rg,
        cpf,
        dataNascimento: new Date(dataNascimento),
        nomeMae,
        nomePai,

        endereco: {
          create: endereco,
        },
        situacaoFamiliar: {
          create: situacaoFamiliar,
        },
        dadosAcademicos: {
          create: dadosAcademicos,
        },
        informacoesBolsa: {
          create: informacoesBolsa,
        },
        contato: {
          create: contato,
        },
      },
      include: {
        endereco: true,
        situacaoFamiliar: true,
        dadosAcademicos: true,
        informacoesBolsa: true,
        contato: true,
      },
    });
  },

  async listarAlunos() {
    return await prisma.aluno.findMany({
      include: {
        endereco: true,
        situacaoFamiliar: true,
        dadosAcademicos: true,
        informacoesBolsa: true,
        contato: true,
      },
    });
  },

  async buscarPorId(idAluno) {
    return await prisma.aluno.findUnique({
      where: { idAluno: Number(idAluno) },
      include: {
        endereco: true,
        situacaoFamiliar: true,
        dadosAcademicos: true,
        informacoesBolsa: true,
        contato: true,
      },
    });
  },

  async deletarAluno(idAluno) {
    return await prisma.aluno.delete({
      where: { idAluno: Number(idAluno) },
    });
  },
};
