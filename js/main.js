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

products.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <button class="btn btn--primary add-to-cart" aria-label="Agregar ${product.name} al carrito">Agregar al Carrito</button>
    `;
    card.style.animationDelay = `${index * 0.3}s`;
    container.appendChild(card);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card);

});

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "✓ Agregado";
        button.disabled = true;

        setTimeout(() => {
            button.textContent = "Agregar al Carrito";
            button.disabled = false;
        }, 1500);

        button.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
        ], {
            duration: 300,
            easing: 'ease-out'
        });
    });
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

  const emailregex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  if (emailregex.test(value)) {
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailError.textContent = "";
  } else {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailError.textContent = "Correo inválido";
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
  togglePassword.setAttribute("aria-pressed", String(isHidden));
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
    const firstErrorInput = document.querySelector(".error");
    if (firstErrorInput) {
        firstErrorInput.focus();
        return;
  }


  successMessage.textContent = "Registro exitoso";
  successMessage.style.opacity = "1";
  form.reset();

  setTimeout(() => {
    successMessage.style.opacity = "0";
  }, 3000);
  }

});

function showError(input, message) {
    const formGroup = input.closest(".form-group");
    if (!formGroup) return;

    const errorSpan = formGroup.querySelector(".error-message");
    if (!errorSpan) return;

    errorSpan.textContent = message;
    input.classList.add("error");
    input.classList.remove("correct");
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