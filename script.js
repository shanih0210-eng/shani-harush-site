const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "היי שני, הגעתי דרך האתר ואשמח שתיצרי איתי קשר.",
      `שם: ${data.get("name")}`,
      `טלפון: ${data.get("phone")}`,
      data.get("message") ? `הודעה: ${data.get("message")}` : ""
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/972508414174?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
