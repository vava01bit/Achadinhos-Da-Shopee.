document.addEventListener("DOMContentLoaded", function () {
    fetch("produtos.json")
        .then(response => response.json())
        .then(produtos => {
            const productList = document.getElementById("product-list");
            produtos.forEach(produto => {
                const item = document.createElement("div");
                item.classList.add("product");
                item.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>${produto.preco}</p>
                    <a href="${produto.link}" target="_blank">
                        <button>Comprar na Shopee</button>
                    </a>
                `;
                productList.appendChild(item);
            });
        });
});
