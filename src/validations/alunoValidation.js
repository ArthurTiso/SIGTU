import { z } from "zod";

// Função de validação local do CPF (Caminho A)
function validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto >= 10) resto = 0;

  return resto === parseInt(cpf.charAt(10));
}

export const alunoSchema = z.object({
  nomeAluno: z.string().min(3),
  rg: z.string().min(5),
  cpf: z.string().refine(validateCPF, { message: "CPF inválido" }),
  dataNascimento: z.string(),
  nomeMae: z.string().min(3),
  nomePai: z.string().min(3),

  endereco: z.object({
    rua: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string().length(2),
    cep: z.string().min(8),
  }),

  situacaoFamiliar: z.object({
    compFamiliar: z.string(),
    tipoRes: z.string(),
  }),

  dadosAcademicos: z.object({
    universidade: z.string(),
    curso: z.string(),
    semestreAtual: z.number(),
    tempoTotalCurso: z.number(),
    anoConclusao: z.number(),
    frequenciaSemanal: z.number(),
    periodo: z.string(),
    horarioDetalhado: z.string(),
  }),

  informacoesBolsa: z.object({
    possuiBolsa: z.boolean(),
    tipo: z.string().optional().nullable(),
    porcentagem: z.number().optional().nullable(),
  }),

  contato: z.object({
    email: z.string().email(),
    telRes: z.string().optional().nullable(),
    telEstud: z.string().optional().nullable(),
  }),
});
