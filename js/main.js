window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})

const products= [
    { name: "Audífonos Pro X", description: "Audio de alta fidelidad con cancelación de ruido.", price: "$120", image: "https://placehold.co/300x200?text=Audifonos"},
    { name: "Teclado Mecánico RGB", description: "Diseño ergonómico con retroiluminación personalizable.", price: "$90", image: "https://placehold.co/300x200?text=Teclado"},
    { name: "Ratón Inalámbrico", description: "Conexión Bluetooth y diseño cómodo.", price: "$40", image: "https://placehold.co/300x200?text=Raton"},
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

const emailInput = document.getElementById("email");
const emailError = emailInput.nextElementSibling;

emailInput.addEventListener("input", () => {
  const value = emailInput.value.trim();

  if (value.includes(" ")) {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailError.textContent = "El correo no debe tener espacios";
    return;
  }

  if (value.includes("@") && value.includes(".")) {
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailError.textContent = "";
  } else {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailError.textContent = "El correo debe incluir '@' y '.'";
  }
});


const passwordInput = document.getElementById("password");
const passwordError = passwordInput.closest(".form-group").querySelector(".error-message");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  const hasUppercase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const isLongEnough = value.length >= 8;

  let errors = [];

  if (!isLongEnough) errors.push("mínimo 8 caracteres");
  if (!hasUppercase) errors.push("una mayúscula");
  if (!hasLetter) errors.push("letras");
  if (!hasNumber) errors.push("un número");
  if (!hasSpecialChar) errors.push("un carácter especial");

  if (errors.length > 0) {
    passwordInput.classList.add("error");
    passwordInput.classList.remove("correct");
    passwordError.textContent = `Debe contener: ${errors.join(", ")}.`;
  } else {
    passwordInput.classList.add("correct");
    passwordInput.classList.remove("error");
    passwordError.textContent = "";
  }
});

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "(ocultar)" : "(ver)";
});


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
        successMessage.textContent = "Registro exitoso";
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

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('show');

    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.classList.contains('show')) return;
    const clickInside = e.target.closest('.nav-links') || e.target.closest('#menuToggle');
    if (!clickInside) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
