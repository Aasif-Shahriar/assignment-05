const buttons = document.querySelectorAll(".complete-btn");

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", function () {
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

    const taskTitle = button
      .closest(".bg-primary")
      .querySelector(".title").innerText;
    const date = new Date();
    const taskCompleteTime = date.toLocaleTimeString();

    div.innerText = `You have completed the task "${taskTitle}" at ${taskCompleteTime}`;

    document
      .getElementById("clear-history-btn")
      .addEventListener("click", function () {
        clickedHistoryContainer.innerHTML = "";
      });
  });
}
