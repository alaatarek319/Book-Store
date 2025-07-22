const btn = document.querySelector(".btn");
const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const Adress = document.querySelector("#adress");
const msg = document.querySelector(".msg");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (Name.value === "" || Email.value === "" || Adress.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    msg.classList.add("successful");
    msg.innerHTML = `Thank you ${Name.value}! Your order ${na} has been placed`;
    setTimeout(() => msg.remove(), 3000);
  }
  Name.value = "";
  Email.value = "";
  Adress.value = "";
});

const params = new URLSearchParams(window.location.search);
const na = params.get("name");
const im = params.get("img");
document.getElementById("book-img").src = im;
document.getElementById("book-name").textContent = na;
