const button = document.querySelectorAll(".button");
let result_score = 0;

submit.addEventListener("click", onSubmit);

button.forEach((btn) => {
  btn.addEventListener("click", btnClick);
});

function onSubmit() {
  if (result_score == 0) {
    alert("Please choose a rate score");
  } else {
    submitcard.classList.add("hide");
    result.textContent = result_score;
    thankcard.classList.remove("hide");
  }
}

function btnClick(event) {
  button.forEach((btn) => {
    btn.classList.remove("btnclicked");
  });

  if (event.target.classList.contains("button")) {
    event.target.classList.add("btnclicked");
  } else {
    event.target.parentElement.classList.add("btnclicked");
  }

  result_score = event.target.textContent;
}

thankcard.addEventListener("click", () => {
  thankcard.classList.add("hide");
  submitcard.classList.remove("hide");
});
