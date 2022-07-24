//variables
const buttons = document.querySelectorAll(".button");
let number = 0;

// for each button => add grey color when clicked, number will be the text of button, remove grey color if click in other button
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("btnclicked");
    });
    if (e.target.classList.contains("button")) {
      e.target.classList.add("btnclicked");
    } else {
      e.target.parentElement.classList.add("btnclicked");
    }

    number = e.target.textContent;

    //console.log(number);
  });
});

// Submit fonction
submit.addEventListener("click", () => {
  if (number === 0) {
    alert("Please choose a rate score");
  } else {
    submitcard.classList.add("hide");
    result.textContent = number;
    thankcard.classList.remove("hide");
  }
});

// when we click on thanks card we back to submit card
thankcard.addEventListener("click", () => {
  thankcard.classList.add("hide");
  submitcard.classList.remove("hide");
});
