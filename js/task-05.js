let input = document.getElementById("name-input");
let output = document.getElementById("name-output");

input.oninput = () => {
  if (input.value === "") {
    output.innerHTML = "Anonymous";
  } else {
    output.innerHTML = input.value;
  }
};
