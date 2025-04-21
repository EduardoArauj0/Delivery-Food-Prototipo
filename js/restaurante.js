const restaurantes = {
    "Pizza da Mama": [
      {
        nome: "Pizza Calabresa",
        descricao: "Molho de tomate, mussarela, calabresa e cebola",
        preco: "R$ 35,00",
        imagem: "../image/Pizza da Mama/Pizza Calabresa.webp"
      },
      {
        nome: "Pizza Portuguesa",
        descricao: "Presunto, ovo, cebola, pimentão e azeitona",
        preco: "R$ 38,00",
        imagem: "../image/Pizza da Mama/Pizza Portuguesa.png"
      },
      {
        nome: "Pizza 4 Queijos",
        descricao: "Parmesão, gorgonzola, mussarela e catupiry",
        preco: "R$ 40,00",
        imagem: "../image/Pizza da Mama/Pizza 4 Queijos.png"
      }
    ],
    "Burger Express": [
      {
        nome: "Cheeseburger",
        descricao: "Hambúrguer, queijo, alface, tomate e molho especial",
        preco: "R$ 25,00",
        imagem: "../image/Burger Express/Cheeseburger.jpg"
      },
      {
        nome: "Combo Burguer",
        descricao: "Cheeseburger + Batata + Refrigerante",
        preco: "R$ 35,00",
        imagem: "../image/Burger Express/Combo Burguer.jpeg"
      }
    ],
    "Sushi House": [
      {
        nome: "Combo Sushi 20 peças",
        descricao: "Sushis variados com molho tare",
        preco: "R$ 45,00",
        imagem: "../image/Sushi House/Combo Sushi 20 peças.png"
      },
      {
        nome: "Temaki de Salmão",
        descricao: "Cone com arroz, salmão e cebolinha",
        preco: "R$ 22,00",
        imagem: "../image/Sushi House/Temaki de Salmão.jpg"
      }
    ]
  };
  
  const params = new URLSearchParams(window.location.search);
  const nomeRestaurante = decodeURIComponent(params.get("nome"));
  const titulo = document.getElementById("titulo-restaurante");
  const lista = document.getElementById("lista-produtos");
  
  if (restaurantes[nomeRestaurante]) {
    titulo.innerText = `Cardápio - ${nomeRestaurante}`;
    restaurantes[nomeRestaurante].forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("produto-card");
  
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" />
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span>${produto.preco}</span>
        <button onclick="adicionarAoCarrinho('${produto.nome}')">Adicionar</button>
      `;
  
      lista.appendChild(card);
    });
  } else {
    titulo.innerText = "Restaurante não encontrado";
  }
  