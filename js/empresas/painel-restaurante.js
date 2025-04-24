function alternarAba(abaId) {
    document.querySelectorAll(".aba").forEach((aba) => aba.classList.remove("ativa"));
    document.getElementById("aba-" + abaId).classList.add("ativa");
  }
  