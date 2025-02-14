document.addEventListener("DOMContentLoaded", function () {
    fetch("produtos.json")
        .then(response => response.json())
        .then(produtos => {
            const productList = document.getElementById("product-list");

            produtos.forEach(produto => {
                const item = document.createElement("div");
                item.classList.add("produto");
                item.setAttribute("data-nome", produto.name.toLowerCase()); // Salva o nome para a busca

                item.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.name}">
                    <h3>${produto.name}</h3>
                    <p>${produto.preço}</p>
                    <a href="${produto.link}" target="_blank">
                        <button>Comprar na Shopee</button>
                    </a>
                `;

                productList.appendChild(item);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
});

// 🔍 Função de busca
function filtrarProdutos() {
    let termoBusca = document.getElementById("searchBar").value.toLowerCase();
    let produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        let nomeProduto = produto.getAttribute("data-nome");
        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = "block"; // Mostra os produtos que combinam
        } else {
            produto.style.display = "none"; // Esconde os produtos que não combinam
        }
    });
}

