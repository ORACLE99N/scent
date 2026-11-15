const phoneNumber = "2349018526817";
const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector("#site-navigation");

function closeNavigation() {
  if (!menuToggle || !siteNavigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNavigation.classList.remove("is-open");
}

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    siteNavigation.classList.toggle("is-open", !isExpanded);
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });
}

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