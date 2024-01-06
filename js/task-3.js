const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInputOutput);

function onInputOutput(evt) {
  const name = evt.currentTarget.value.trim();
  if (name !== "") {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
}
