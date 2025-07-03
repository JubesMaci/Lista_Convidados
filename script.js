const registerButton = document.querySelector("#btn-tg");
const registerForm = document.querySelector(".formContainer");
const form = document.querySelector("#form");
const overlay = document.querySelector(".overlay");
const confirmed = document.querySelector(".confirmed > ul");
const registrations = [];

registerButton.addEventListener("click", () => {
  registerForm.classList.remove("hide");
  overlay.classList.remove("hide");

  overlay.addEventListener("click", () => {
    registerForm.classList.add("hide");
    overlay.classList.add("hide");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const dddInput = document.querySelector("#ddd").value;
  const numberInput = document.querySelector("#number").value;

  registrations.push({
    name: nameInput,
    ddd: dddInput,
    number: numberInput,
  });
  alert("Cadastro enviado com sucesso!");
  registerForm.classList.add("hide");
  overlay.classList.add("hide");
  form.reset();
  showConfirmed();
});

function showConfirmed() {
  if (registrations.length === 0 || !confirmed) return;

  confirmed.innerHTML = "";

  registrations.forEach((r) => {
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    const phoneSpan = document.createElement("span");

    nameSpan.innerHTML = r.name;
    phoneSpan.innerHTML = `${r.ddd} ${r.number}`;

    li.appendChild(nameSpan);
    li.appendChild(phoneSpan);
    confirmed.appendChild(li);
  });
}
