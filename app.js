// declearation of variables
let slider = document.querySelectorAll(".slider");
let modal = document.querySelectorAll(".modal");
const input = document.querySelector("#inputvalue");
const btn = document.querySelector("#btn");
const input2 = document.querySelector("#input2");
const btn2 = document.querySelector("#email2");

const getEmail = (a, b) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    let i = b.value;

    if (b.value === "") {
      b.style.border = "1px solid red";
    } else if (b.value) {
      localStorage.setItem("email", JSON.stringify(i));
      location.href = "signup/index.html";
    }
  });
};
getEmail(btn, input);
getEmail(btn2, input2);

let position = 0;
let current = 0;
// functionalites
//slider

function showSlider() {
  slider.forEach((p) => {
    p.style.transform = `translateY(-${position}00%)`;
  });
  position++;
  if (position > slider.length - 1) {
    position = 0;
  }

  thumbNail();
}

//interval
setInterval(() => {
  showSlider();
}, 2000);

// thumbnail(small-images)
function thumbNail() {
  modal.forEach((p) => {
    p.style.opacity = "0.6";
  });

  current++;

  if (current > modal.length) {
    current = 1;
  }
  modal[current - 1].style.opacity = " 1";
}

// Function for FQA
function activateFQa() {
  let lists = document.querySelectorAll(".title");
  lists.forEach((list) => {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
      } else {
        const isOpen = document.querySelectorAll(".active");
        isOpen.forEach((open) => {
          open.classList.remove("active");
        });
        e.target.classList.add("active");
      }
    });
  });
}
activateFQa();
