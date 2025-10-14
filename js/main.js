window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})

const products= [
    { name: "Audífonos Pro X", description: "Audio de alta fidelidad con cancelación de ruido.", price: "$120", image: "https://via.placeholder.com/300x200?text=Audifonos"},
    { name: "Teclado Mecánico RGB", description: "Diseño ergonómico con retroiluminación personalizable.", price: "$90", image: "https://via.placeholder.com/300x200?text=Teclado"},
    { name: "Ratón Inalámbrico", description: "Conexión Bluetooth y diseño cómodo.", price: "$40", image: "https://via.placeholder.com/300x200?text=Raton"},
];

const container = document.getElementById("products-container");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <button class="add-to-cart">Agregar al Carrito</button>
    `;
    container.appendChild(card);
});