document.getElementById("validation-input").onblur = function () {
  if (this.getAttribute("data-length") == this.value.length) {
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
  console.log(this.value.length);
};
