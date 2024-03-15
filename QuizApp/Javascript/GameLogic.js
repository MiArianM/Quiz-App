import FormattedData from "../Javascript/Assistant.js";
const DifficultyLevel = localStorage.getItem("Difficulty") || "medium";
const url = `https://opentdb.com/api.php?amount=10&difficulty=${DifficultyLevel}&type=multiple`;
const GameCont = document.getElementById("container");
const Gameload = document.querySelector(".loader");
const QuestionText = document.querySelector("#Question-Text");
const QuestionAnswers = document.querySelectorAll(".Answere-button");
const QuestionNumber = document.getElementById("QNum");
const UserQuestionScore = document.getElementById("QSc");
const nextButton = document.getElementById("nexto-btn");
const FinishButton = document.getElementById("finito-btn");
let TheRealAnswereIndex;
let AcceptedorNo = true;
let userscore = 0;
let questionnumber = 1;
let formatting;
let QuestionIndex = 0;
/////////////////
window.addEventListener("load", getData);
FinishButton.addEventListener("click", () => {
  finishing();
});
QuestionAnswers.forEach((butts, index) => {
  butts.addEventListener("click", (event) => {
    CheckUserAnswer(event, index);
  });
});
const start = () => {
  ShowQuestion();
  GameCont.style.display = "block";
  Gameload.style.display = "none";
};
async function getData() {
  try {
    const res = await fetch(url);
    const { results } = await res.json();
    formatting = FormattedData(results);
    nextButton.addEventListener("click", nexthandeling);
    start();
  } catch (error) {
    localStorage.setItem("ErrorCatched", error);
    window.location.assign("../htmls/index.html");
  }
}
function ShowQuestion() {
  let { Question, answers, CorrectAnswerIndex } = formatting[QuestionIndex];
  TheRealAnswereIndex = CorrectAnswerIndex;
  QuestionText.innerHTML = Question;
  QuestionAnswers.forEach((butts, index) => {
    butts.innerHTML = answers[index];
  });
}
function nexthandeling() {
  if (questionnumber < 10) {
    AcceptedorNo = true;
    questionnumber++;
    QuestionNumber.innerText = questionnumber;
    QuestionIndex++;
    QuestionAnswers.forEach((butts) => {
      butts.className = "Answere-button";
    });
    ShowQuestion();
  } else {
    alert("Finito");
    finishing();
  }
}
function Rewarding() {
  userscore = userscore + 10;
  UserQuestionScore.innerText = userscore;
}
const CheckUserAnswer = (EventHappened, Buttsindex) => {
  if (!AcceptedorNo) {
    return;
  }
  AcceptedorNo = false;
  if (Buttsindex === TheRealAnswereIndex) {
    EventHappened.target.classList.add("rightansw");
    Rewarding();
  } else {
    EventHappened.target.classList.add("wrongansw");
    QuestionAnswers[TheRealAnswereIndex].classList.add("rightansw");
  }
};
const finishing = () => {
  if (userscore) {
    localStorage.setItem("UserScore", JSON.stringify(userscore));
  }
  window.location.assign("../htmls/Ended.html");
};
