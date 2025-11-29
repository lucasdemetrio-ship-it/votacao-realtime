# 🎯 Sistema de Votação em Tempo Real

Aplicação web orientada a eventos que permite abrir uma votação, registrar votos e transmitir atualizações em tempo real para todos os usuários conectados.  
Desenvolvido em **Node.js + Socket.IO**, seguindo os requisitos do trabalho.

---

## 📸 Demonstração da Interface

### 👤 Participante (`index.html`)
- Exibe status da votação  
- Botões para votar em A, B ou C  
- Resultados atualizados automaticamente  

### 🛠️ Administrador (`admin.html`)
- Botão **Iniciar Votação**
- Botão **Encerrar Votação**
- Status ao vivo
- Painel de resultados

---

# 🚀 Funcionalidades

✔ Comunicação em tempo real com Socket.IO  
✔ Atualização automática sem recarregar a página  
✔ Controle administrativo da votação  
✔ Eventos bidirecionais (cliente ↔ servidor)  
✔ Fluxo completo orientado a eventos  
✔ Interface simples, rápida e responsiva  

---

# 🧩 Arquitetura de Eventos (Event-Driven)

### 👉 Eventos do Administrador
- `admin.iniciar`
- `admin.encerrar`

### 👉 Eventos do Participante
- `voto.registrado`

### 👉 Eventos do Servidor
- `votacao.aberta`
- `resultado.atualizado`
- `votacao.encerrada`

---

# 🔄 Fluxo Completo da Votação

1. **Administrador inicia a votação**  
   - envia `admin.iniciar`  
   - servidor dispara `votacao.aberta`  

2. **Participantes enviam votos**  
   - cliente envia `voto.registrado`  
   - servidor atualiza os votos  
   - servidor envia `resultado.atualizado`  

3. **Administrador encerra a votação**  
   - envia `admin.encerrar`  
   - servidor dispara `votacao.encerrada` com resultado final  

---

# 🛠️ Tecnologias Usadas

| Tecnologia | Função |
|-----------|--------|
| **Node.js** | Backend |
| **Express** | Servir páginas |
| **Socket.IO** | Comunicação em tempo real |
| **HTML, CSS e JS** | Interface |

---

# 📂 Estrutura de Pastas

