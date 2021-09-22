const form = document.querySelectorAll("form");
const email = document.querySelector(".email");
const btn = document.querySelector("button");
form.forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
    // emailControl();
  });
});
function emailControl() {
  const emailValue = email.value.trim();
  if (!isEmail(emailValue)) {
    form.classList.add("error");
  }
}

function setErrorFor(input, message) {
  const formSub = input.parentElement;
  const small = formSub.querySelectorAll("small");
  small.innerText = message;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
