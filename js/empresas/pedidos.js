const pedidos = [
    {
      cliente: "João Silva",
      itens: ["Pizza Calabresa"],
      status: "Pendente"
    },
    {
      cliente: "Ana Souza",
      itens: ["Pizza Portuguesa"],
      status: "Pendente"
    }
  ];
  
function renderizarPedidos() {
    const aba = document.getElementById("lista-pedidos");
    aba.innerHTML = "";
  
    pedidos.forEach((pedido, index) => {
      const div = document.createElement("div");
      div.className = "pedido-card";
  
      let statusClass = "pendente";
  
      if (pedido.status === "Em preparo") {
        statusClass = "preparo";
      } else if (pedido.status === "Finalizado") {
        statusClass = "finalizado";
      }
  
      div.innerHTML = `
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Itens:</strong> ${pedido.itens.join(", ")}</p>
        <p><strong>Status:</strong> <span class="status ${statusClass}">${pedido.status}</span></p>
        ${pedido.status !== "Finalizado" ? `<button onclick="atualizarStatus(${index})">Avançar Status</button>` : ""}
      `;
      aba.appendChild(div);
    });
  }
  
function atualizarStatus(index) {
    const statusAtual = pedidos[index].status;
    const proximoStatus =
      statusAtual === "Pendente"
        ? "Em preparo"
        : statusAtual === "Em preparo"
        ? "Finalizado"
        : "Finalizado";
  
    pedidos[index].status = proximoStatus;
    renderizarPedidos();
  }

renderizarPedidos();