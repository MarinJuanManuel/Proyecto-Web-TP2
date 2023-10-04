const destacado = JSON.parse(localStorage.getItem("producto"));
const mostrarProducto = document.querySelector("#detalle-producto");

destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
            <h3 class="name">${product.nombre}</h3> 
        </div>
        <div class="imagen-descripcion">
            <img class="imagen" src="${product.imagen}">
            <p class="description">${product.descripcion}</p>
        </div>
        <div>
            <p class="price-product">$ ${product.precio}</p>
        </div>
        <div>
            ${product.rating}
        </div>
    `;
    mostrarProducto.append(content);
});