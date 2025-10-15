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

const form = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");
  document.querySelectorAll("input").forEach(input => input.classList.remove("error"));
  successMessage.textContent = "";

  let isValid = true;

  if (name.value.trim() === "") {
    showError(name, "El nombre es obligatorio");
    isValid = false;
  }

  if (!email.value.includes("@")) {
    showError(email, "Correo inválido");
    isValid = false;
  }

  if (password.value.length < 8) {
    showError(password, "La contraseña debe tener al menos 8 caracteres");
    isValid = false;
  }

  if (isValid) {
        successMessage.textContent = "Registro exitoso ✅";
        successMessage.style.opacity = "1";
        form.reset();

        setTimeout(() => {
            successMessage.style.opacity = "0";
        }, 3000);
    }

});

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    if (errorSpan) {
        errorSpan.textContent = message;
        input.classList.add("error");
    }
};