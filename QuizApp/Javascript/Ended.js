const usscored = document.getElementById("userscore");
const username = document.getElementById("UsernamePlace");
const saveuser = document.getElementById("saving");
const Playo = document.getElementById("Playing");
const Firsto = document.getElementById("FirstPage");
let Userscore = JSON.parse(localStorage.getItem("UserScore"));
let Scores = JSON.parse(localStorage.getItem("AllScores")) || [];
usscored.innerText = Userscore;
const saveTheUser = () => {
  let UserName = username.value;
  if (!UserName || !usscored) {
    alert("Please Enter a Valid Username");
  } else {
    const FinalsScores = { name: UserName, Userscore };
    Scores.push(FinalsScores);
    Scores.sort((a, b) => b.Userscore - a.Userscore);
    Scores.slice(10);
    localStorage.setItem("AllScores", JSON.stringify(Scores));
    localStorage.removeItem("UserScore");
    username.value = "";
    window.location.assign("../htmls/index.html");
  }
};
saveuser.addEventListener("click", saveTheUser);
Playo.addEventListener("click", () => {
  localStorage.removeItem("UserScore");
  window.location.assign("../htmls/GameTime.html");
});
Firsto.addEventListener("click", () => {
  localStorage.removeItem("UserScore");
  window.location.assign("../htmls/index.html");
});
