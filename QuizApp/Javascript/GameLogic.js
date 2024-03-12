const url =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
const GameCont = document.getElementById("container");
const Gameload = document.querySelector(".loader");
/////////////////
const FormattedData = (Data) => {
  console.log(Data);
  Data.forEach((aData) => {
    let question = aData.question;
    let AllAnswers = aData.correct_answer + aData.incorrect_answers;
    console.log(AllAnswers);
  });
};
const start = () => {
  GameCont.style.display = "block";
  console.log(Gameload);
  Gameload.style.display = "none";
};
async function getData() {
  const res = await fetch(url);
  const { results } = await res.json();
  start();
  FormattedData(results);
}
window.addEventListener("load", getData);
