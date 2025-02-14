document.addEventListener("DOMContentLoaded", function () {
    fetch("produtos.json")
        .then(response => response.json())
        .then(produtos => {
            const productList = document.getElementById("product-list");
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
                productList.appendChild(item);
            });
        })
        .catch(error => console.error("Erro ao carregar produtos:", error));
});

function filtrarProdutos() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let produtos = document.querySelectorAll(".product");

    produtos.forEach(produto => {
        let nome = produto.querySelector("h3").innerText.toLowerCase();
        produto.style.display = nome.includes(input) ? "block" : "none";
    });
}

