  const carrinho = [];
  
  function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
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
        ${item} 
        <span class="remover" onclick="removerDoCarrinho(${index})">❌</span>
      `;
      lista.appendChild(li);
    });
  }

  function finalizarPedido() {
    window.location.href = "../pages/finalizar.html";
  }  
  
  function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
