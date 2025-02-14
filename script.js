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
function filtrarProdutos() {
    const termoBusca = document.getElementById("searchBar").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector("h3").innerText.toLowerCase();
        if (nomeProduto.includes(termoBusca)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}
