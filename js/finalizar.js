const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function carregarItensFinalizacao() {
    const lista = document.getElementById("lista-itens");
    const totalSpan = document.getElementById("valor-total");
    lista.innerHTML = "";
  
    let total = 0;
  
    carrinho.forEach(item => {
      const li = document.createElement("li");
      li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}`;
      lista.appendChild(li);
      total += item.preco;
    });
  
    totalSpan.innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
  
  function confirmarPedido() {
    const pagamento = document.getElementById("forma-pagamento").value;
    const avaliacao = document.getElementById("avaliacao").value;
  
    alert(`Pedido confirmado com pagamento via ${pagamento}.
Avaliação: ${avaliacao || "Sem comentário"}`);

    localStorage.removeItem("carrinho"); 
    window.location.href = "/index.html";
    }
  
  carregarItensFinalizacao();
  