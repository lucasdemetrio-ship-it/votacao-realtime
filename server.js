const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Inicialização do servidor
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve os arquivos da pasta /public
app.use(express.static("public"));

// Estado da votação
let votacaoAtiva = false;
let votos = { A: 0, B: 0, C: 0 };

// Evento: sistema.iniciado
function iniciarVotacao() {
  votacaoAtiva = true;
  votos = { A: 0, B: 0, C: 0 };
  io.emit("votacao.aberta");  // <- NOME DO EVENTO CORRETO
  console.log("Votação iniciada!");
}

// Evento: sistema.encerrado
function encerrarVotacao() {
  votacaoAtiva = false;
  io.emit("votacao.encerrada", votos);
  console.log("Votação encerrada!");
}

// Conexão de clientes
io.on("connection", (socket) => {
  console.log("Usuário conectado:", socket.id);

  // Se a votação já estiver acontecendo, envia o estado atual
  if (votacaoAtiva) {
    socket.emit("resultado.atualizado", votos);
  }

  // ADMIN - Iniciar votação
  socket.on("admin.iniciar", () => {
    iniciarVotacao();
  });

  // ADMIN - Encerrar votação
  socket.on("admin.encerrar", () => {
    encerrarVotacao();
  });

  // Participante envia voto
  socket.on("voto.registrado", (opcao) => {
    if (!votacaoAtiva) return;

    votos[opcao]++;

    io.emit("resultado.atualizado", votos);
  });
});

// Iniciar servidor
server.listen(4000, () => {
  console.log("Servidor rodando em http://localhost:4000");
});
