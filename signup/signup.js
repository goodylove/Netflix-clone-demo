let inputText = document.querySelector(".get-email");
const password = document.querySelector("#password");
const signBtn = document.querySelector("#sign-button");
const error = document.querySelector(".error");
let isDisabled = false;
let getItemFromLocalStorage = JSON.parse(localStorage.getItem("email"));
inputText.innerHTML = getItemFromLocalStorage;

function signup() {
  signBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (password.value) {
      error.style.display = "none";
      location.href = "step2.html";
    } else {
      if (password.value === "") {
        error.style.display = "block";
        location.href = "#";
      }
      password.value = " ";
    }
  });
}
signup();
