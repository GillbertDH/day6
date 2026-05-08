const goalInput = document.querySelector("#goalInput");
const addGoalBtn = document.querySelector("#addGoalBtn");
const goalList = document.querySelector(".goals"); 
const errorMessage = document.querySelector("#errorMessage");
const goalCount = document.querySelector(".goals-section p"); 

function addGoal() {
    const goalText = goalInput.value.trim();
    
    if (goalText === "") {
        errorMessage.textContent = "목표를 입력해주세요.";
        return;
    }
    errorMessage.textContent = "";

    const currentItemsCount = goalList.querySelectorAll("li").length;
    const nextNumber = currentItemsCount + 1;
    
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = `${nextNumber}. ${goalText}`;
    span.classList.add("goal-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    span.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        
    });
    
    goalList.appendChild(li);
    goalInput.value = "";
    
}

addGoalBtn.addEventListener("click", addGoal);

goalInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addGoal();
    }
});