function mostrarLogin() {
    alert("Aqui será a tela de login.");
  }
  
  function mostrarCadastro() {
    alert("Aqui será a tela de cadastro.");
  }
  
  function abrirRestaurante(nome) {
    alert("Abrindo restaurante: " + nome);
  }
  
  function finalizarPedido() {
    alert("Pedido finalizado! Em breve você poderá escolher o método de pagamento.");
  }
  
  const carrinho = [];
  
  function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
  }
  
  function atualizarCarrinho() {
    const lista = document.getElementById("itens-carrinho");
    lista.innerHTML = "";
    carrinho.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      lista.appendChild(li);
    });
  }
  