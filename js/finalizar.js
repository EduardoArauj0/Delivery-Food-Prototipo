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

  function selecionarPagamento(metodo) {
    document.querySelectorAll(".opcao").forEach((el) => el.classList.remove("selecionada"));
    document.querySelectorAll(".detalhe-pagamento").forEach((el) => el.style.display = "none");
  
    document.querySelector(`.opcao[onclick*="${metodo}"]`).classList.add("selecionada");
    document.getElementById(`detalhes-${metodo}`).style.display = "block";
  }

  function copiarChavePix() {
    const chave = document.getElementById("pix-chave").innerText;
    navigator.clipboard.writeText(chave);
  
    const botao = document.getElementById("copiar-pix");
    botao.innerText = "Copiado!";
    botao.classList.add("copiado");
  
    setTimeout(() => {
      botao.innerText = "Copiar";
      botao.classList.remove("copiado");
    }, 2000);
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
  