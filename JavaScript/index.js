const buttons = document.querySelectorAll(".complete-btn");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", function (e) {
    const title = e.target.parentNode.parentNode.querySelector('.title').innerText;
    
    console.log(title)
    alert("Board updated Successfully");

    const taskUpdate = document.getElementById("task-update");
    let convTaskUpdate = Number(taskUpdate.innerText);

    const taskCount = document.getElementById("task-count");
    let convTaskCount = Number(taskCount.innerText);

    if (convTaskCount > 0) {
      convTaskCount--;
      taskCount.innerText = convTaskCount;

      convTaskUpdate++;
      taskUpdate.innerText = convTaskUpdate;

      button.setAttribute("disabled", true);
      button.style.background = "#9BA8F8";

      if (convTaskCount === 0) {
        alert("Congratulations! You've Completed All The Task. ");
      }
    }

    const clickedHistoryContainer = document.getElementById(
      "clicked-history-container"
    );
    const div = document.createElement("div");
    clickedHistoryContainer.appendChild(div);
    div.classList.add("bg-primary", "p-4", "rounded-lg");

    
    const date = new Date();
    const taskCompleteTime = date.toLocaleTimeString();

    div.innerText = `You have completed the task "${title}" at ${taskCompleteTime}`;

    document
      .getElementById("clear-history-btn")
      .addEventListener("click", function () {
        clickedHistoryContainer.innerHTML = "";
      });
  });
}
