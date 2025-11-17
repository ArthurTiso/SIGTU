import express from "express";
import cors from "cors";
import router from "./router/index.js";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api", router);

// Rota simples para testar o servidor
app.get("/", (req, res) => {
  res.send("Servidor SIGTU está rodando 🔥");
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("📌 Conectado ao banco de dados!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Erro ao iniciar servidor:", error);
    process.exit(1);
  }
}

startServer();
