//create the btn variable
const btn = document.querySelector(".circle");

//even on click => popup will appear and leave if we click again. Here popup is an Id so don't need to create a variable
btn.addEventListener("click", () => {
  popup.classList.toggle("hide");
});

//an other way will be to do add "Hide" when we click on the button and remove "Hide" when we click again on the button.
