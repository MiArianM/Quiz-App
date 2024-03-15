const Buttons = document.querySelectorAll("button");
window.addEventListener("load", () => {
  Buttons.forEach((butts) => {
    const Fhandler = (event) => {
      handler(event);
    };
    butts.addEventListener("click", Fhandler);
  });
});
function handler(event) {
  let Difficulty = event.target.innerText.toLowerCase();
  localStorage.setItem("Difficulty", Difficulty);
  window.location.assign("../htmls/index.html");
}
