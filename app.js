let inputs = document.getElementById("todo");
let text = document.querySelector(".text");

window.addEventListener("load", () => {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  for (const item of storedItems) {
    createItem(item);
  }
});

inputs.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    Add();
  }
});

function Add() {
  if (inputs.value === "") {
    alert("No items to add");
  } else {
    createItem(inputs.value);
    inputs.value = "";
    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const items = Array.from(text.querySelectorAll("ul")).map((item) =>
    item.textContent.replace("fa-trash", "").trim()
  );
  localStorage.setItem("items", JSON.stringify(items));
}

function createItem(itemText) {
  let newE = document.createElement("ul");
  newE.innerHTML = `${itemText} <i class="fas fa-trash"></i>`;
  text.appendChild(newE);

  newE.querySelector("i").addEventListener("click", () => {
    newE.remove();
    updateLocalStorage();
  });
}
