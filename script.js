// AquaFind WhatsApp enquiry settings
// Update this number if the business WhatsApp number changes.
const WHATSAPP_NUMBER = "918005677079";
const DEFAULT_MESSAGE = "Hello AquaFind, I would like to enquire about waterproofing services.";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || DEFAULT_MESSAGE)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Every enquiry/CTA button and WhatsApp link opens WhatsApp.
document.querySelectorAll(".wa-link").forEach(link => {
  const service = link.dataset.service;
  const message = service
    ? `Hello AquaFind, I need information about ${service}. Please contact me.`
    : DEFAULT_MESSAGE;
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// Contact form prepares a complete WhatsApp message instead of sending to a server.
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      "Hello AquaFind, I would like to request a waterproofing enquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Service: ${data.get("service")}`,
      `Project details: ${data.get("message") || "Not provided"}`,
      "",
      "Please get in touch with me."
    ].join("\n");
    const status = form.querySelector(".form-message");
    status.textContent = "Opening WhatsApp with your enquiry. Please press Send in WhatsApp to submit it.";
    openWhatsApp(message);
  });
}

// Mobile navigation
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}
document.getElementById("year").textContent = new Date().getFullYear();
