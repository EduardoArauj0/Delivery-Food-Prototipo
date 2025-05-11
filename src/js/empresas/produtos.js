const produtos = [
    {
      nome: "Pizza Calabresa",
      preco: 35,
      imagem: "../../image/Pizza da Mama/Pizza Calabresa.webp"
    }
  ];
  
  function renderizarProdutos() {
    const lista = document.querySelector(".lista-produtos");
    lista.innerHTML = "";
  
    produtos.forEach((produto, index) => {
      const div = document.createElement("div");
      div.className = "produto-item";
      div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" />
        <div>
          <h3>${produto.nome}</h3>
          <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
        </div>
        <button class="remover" onclick="removerProduto(${index})">❌</button>
      `;
      lista.appendChild(div);
    });
  }
  
  function removerProduto(index) {
    produtos.splice(index, 1);
    renderizarProdutos();
  }
  
  document.getElementById("form-produto").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input");
    const novoProduto = {
      nome: inputs[0].value,
      preco: parseFloat(inputs[1].value),
      imagem: inputs[2].value || "../../image/imagem.jpeg"
    };
    produtos.push(novoProduto);
    this.reset();
    renderizarProdutos();
  });
  
renderizarProdutos();
