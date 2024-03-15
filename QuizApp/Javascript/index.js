let timer1, timer2;
const toast = document.querySelector(".toast");
const progress = document.querySelector(".progress");
const ErrorCheck = localStorage.getItem("ErrorCatched");
const Buttons = document.querySelectorAll("a");
window.addEventListener("load", () => {
  if (ErrorCheck) {
    toast.classList.add("active");
    progress.classList.add("active");
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 6000);
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 7500);
    Buttons.forEach((butt) => {
      butt.addEventListener("click", () => {
        localStorage.removeItem("ErrorCatched");
      });
    });
  }
});
