import FormattedData from "../Javascript/Assistant.js";
const url =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
const GameCont = document.getElementById("container");
const Gameload = document.querySelector(".loader");
const QuestionText = document.querySelector("#Question-Text");
const QuestionAnswers = document.querySelectorAll(".Answere-button");
const QuestionNumber = document.getElementById("QNum");
const UserQuestionScore = document.getElementById("QSc");
let AcceptedorNo = true;
let userscore = 0;
let questionnumber = 1;
let formatting;
let QuestionIndex = 0;
/////////////////
window.addEventListener("load", getData);
const start = () => {
  ShowQuestion();
  GameCont.style.display = "block";
  Gameload.style.display = "none";
};
async function getData() {
  const res = await fetch(url);
  const { results } = await res.json();
  formatting = FormattedData(results);
  console.log(formatting);
  start();
}
function ShowQuestion() {
  const { CorrectAnswer, Question, answers } = formatting[QuestionIndex];
  QuestionText.innerHTML = Question;
  QuestionAnswers.forEach((butts, index) => {
    butts.innerHTML = answers[index];
    const handler = () => CheckUserAnswer(butts, CorrectAnswer);
    butts.addEventListener("click", handler);
  });
}
const CheckUserAnswer = (Button, RightAnswer) => {
  if (!AcceptedorNo) {
    return;
  }
  AcceptedorNo = false;
  if (Button.innerHTML != RightAnswer) {
    Button.style.backgroundColor = "rgb(250, 43, 43)";
    QuestionAnswers.forEach((butt) => {
      if (butt.innerHTML === RightAnswer) {
        console.log(butt);
        butt.style.backgroundColor = "rgb(28, 230, 129)";
      }
    });
  } else {
    Rewarding();
    Button.style.backgroundColor = "rgb(28, 230, 129)";
  }
  nexting();
};
function Rewarding() {
  userscore = userscore + 10;
  UserQuestionScore.innerText = userscore;
}
function nexting() {
  questionnumber++;
  QuestionNumber.innerText = questionnumber;
}
