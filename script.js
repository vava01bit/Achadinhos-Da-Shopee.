document.addEventListener("DOMContentLoaded", function () {
    fetch("produtos.json")
        .then(response => response.json())
        .then(produtos => {
            const listaDeProdutos = document.getElementById("product-list");

            produtos.forEach(produto => {
                const item = document.createElement("div");
                item.classList.add("product");
                item.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.name}">
                    <h3>${produto.name}</h3>
                    <p>${produto.preço}</p>
                    <a href="${produto.link}" target="_blank">
                        <button>Comprar na Shopee</button>
                    </a>
                `;
                listaDeProdutos.appendChild(item);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
});

/* 🔍 Função de busca */
function filtrarProdutos() {
    const termo = document.getElementById("searchBar").value.toLowerCase();
    const produtos = document.querySelectorAll(".product");

    produtos.forEach(produto => {
        const nome = produto.querySelector("h3").textContent.toLowerCase();
        if (nome.includes(termo)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}
