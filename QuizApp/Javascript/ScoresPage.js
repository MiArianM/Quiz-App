const AllScores = JSON.parse(localStorage.getItem("AllScores")) || [];
const List = document.querySelector("ol");
const content = AllScores.map((score, index) => {
  return `
        <li>
            <div>
                <span>${index + 1}</span>
                <p>${score.name}</p>
            </div>
            <span>${score.Userscore}</span>
        </li>
    
    `;
});
List.innerHTML = content.join("");
