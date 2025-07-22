const btn = document.querySelector(".btn");
const name_text = document.querySelector("#name");
const email_text = document.querySelector("#e-mail");
const password = document.querySelector("#password");
const msg = document.querySelector(".msg");
function goTopage(event) {
  event.preventDefault();
  if (
    name_text.value === "" ||
    email_text.value === "" ||
    password.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    msg.classList.add("successful");
    msg.innerHTML = `Welcome back, [${name_text.value}]!`;
    setTimeout(() => msg.remove(), 3000);
    setTimeout(() => (window.location.href = "Catalog.html"), 3000);
    name_text.value = "";
    email_text.value = "";
    password.value = "";
  }
}
btn.addEventListener("click", goTopage);
