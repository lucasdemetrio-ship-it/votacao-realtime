const socket = io();

function votar(opcao) {
  socket.emit("voto.registrado", opcao);
}

function iniciar() {
  socket.emit("admin.iniciar");
}

function encerrar() {
  socket.emit("admin.encerrar");
}

socket.on("votacao.aberta", () => {
  const status = document.getElementById("status");
  if (status) status.innerText = "Votação aberta!";
});

socket.on("resultado.atualizado", (votos) => {
  const div = document.getElementById("resultados");
  div.innerHTML = `
    A: ${votos.A} votos<br>
    B: ${votos.B} votos<br>
    C: ${votos.C} votos
  `;
});

socket.on("votacao.encerrada", (votos) => {
  const div = document.getElementById("resultados");
  div.innerHTML = `
    <h3>Votação Encerrada</h3>
    A: ${votos.A} votos<br>
    B: ${votos.B} votos<br>
    C: ${votos.C} votos
  `;
});
