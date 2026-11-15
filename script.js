const phoneNumber = "2349018526817";

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNavigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  siteNavigation.classList.toggle("is-open", !isExpanded);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeNavigation();
});

document.addEventListener("click", (event) => {
  const orderButton = event.target.closest(".order-btn");
  if (!orderButton) return;

  const productName = orderButton.dataset.product;
  const price = Number(orderButton.dataset.price);
  // Mobile menu toggle
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('site-navigation');
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('open');
      });
    }

    // Highlight active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['home', 'shop', 'combos', 'contact'].map(id => document.getElementById(id));
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = section.id;
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  });

  // WhatsApp order button logic (if present)
  document.addEventListener("click", (event) => {
    const orderButton = event.target.closest(".order-btn");
    if (!orderButton) return;

    const productName = orderButton.dataset.product;
    const price = Number(orderButton.dataset.price);
    const message = [
      "Hello Sophia!",
      "",
      "I want to order:",
      productName,
      `Price: ₦${price.toLocaleString()}`,
      "",
      "My name:",
      "My location:",
      "",
      "Thank you!",
    ].join("\n");
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });