  const carrinho = [];
  
  function adicionarAoCarrinho(produto) {
    const item = obterInfoProduto(produto);
    carrinho.push(item);
    atualizarCarrinho();
  
    const aside = document.getElementById("carrinho");
    aside.classList.add("visivel");
  }  

  function alternarCarrinho() {
    const aside = document.getElementById("carrinho");
    aside.classList.toggle("visivel");
  }  

  function atualizarCarrinho() {
    const lista = document.getElementById("itens-carrinho");
    lista.innerHTML = "";
  
    carrinho.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}
        <span class="remover" onclick="removerDoCarrinho(${index})">❌</span>
      `;
      lista.appendChild(li);
    });
  }

  function obterInfoProduto(nome) {
    const nomeLower = nome.toLowerCase();
    let preco = 30;
  
    if (nomeLower.includes("calabresa")) preco = 35;
    else if (nomeLower.includes("portuguesa")) preco = 38;
    else if (nomeLower.includes("quatro")) preco = 40;
    else if (nomeLower.includes("cheeseburger")) preco = 25;
    else if (nomeLower.includes("combo")) preco = 35;
    else if (nomeLower.includes("sushi")) preco = 45;
    else if (nomeLower.includes("temaki")) preco = 22;
  
    return { nome, preco };
  }

  function finalizarPedido() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.location.href = "../pages/finalizar.html";
  }
    
  function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
