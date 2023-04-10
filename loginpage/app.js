// VARIABLE DECLEARATION

const form = document.querySelector("#form");
const input = document.getElementById("email");
const password = document.getElementById("password");
const inputHolder = document.querySelector(".input-holder");
const passWordHolder = document.querySelector(".password-holder");
const inputClass = document.querySelector(".input-class");
const passwordClass = document.querySelector(".password-class");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");

// FUNCTIONS
// Login form
const ActivateForm = () => {
  if (input.value === "" && password.value === "") {
    inputHolder.classList.add("show");
    passWordHolder.classList.add("show");
    error1.style.display = "block";
    error2.style.display = "block";
  } else if (input.value === "") {
    console.log("click");
    inputHolder.classList.add("show");
    error1.style.display = "block";
    passWordHolder.classList.remove("show");
    error2.style.display = "none";
  } else if (password.value === "") {
    inputHolder.classList.remove("show");
    error1.style.display = "none";
    passWordHolder.classList.add("show");
    error2.style.display = "block";
  } else {
    setTimeout(() => {
      inputHolder.classList.remove("show");
      error1.style.display = "none";
      passWordHolder.classList.remove("show");
      error2.style.display = "none";
      location.href = "/index.html";
    }, 1000);
  }
};
form.addEventListener("click", ActivateForm);
