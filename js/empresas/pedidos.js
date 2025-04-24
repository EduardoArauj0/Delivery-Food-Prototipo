const pedidos = [
    {
      cliente: "João Silva",
      itens: ["Pizza Calabresa", "Refrigerante"],
      status: "Pendente"
    },
    {
      cliente: "Ana Souza",
      itens: ["Pizza Portuguesa"],
      status: "Pendente"
    }
  ];
  
  function renderizarPedidos() {
    const aba = document.getElementById("aba-pedidos");
    aba.innerHTML = "<h2>📦 Pedidos Recebidos</h2>";
  
    pedidos.forEach((pedido, index) => {
      const div = document.createElement("div");
      div.className = "pedido-card";
      div.innerHTML = `
        <p><strong>Cliente:</strong> ${pedido.cliente}</p>
        <p><strong>Itens:</strong> ${pedido.itens.join(", ")}</p>
        <p><strong>Status:</strong> <span class="status">${pedido.status}</span></p>
        <button onclick="atualizarStatus(${index})">Avançar Status</button>
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