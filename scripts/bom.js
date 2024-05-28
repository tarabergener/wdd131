const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")

const li = document.createElement("li");
const deleteButton = document.createElement("button");

li.textContent = input.value;
deleteButton.textContent = "❌";

list.append(li);
li.append(deleteButton);

list = []

function copyInput() {
    const inputElement = document.getElementById("favchap");
    const outputElement = document.getElementById("list");
    outputElement.append(inputElement);
  }

button.addEventListener("click", copyInput);


deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });
