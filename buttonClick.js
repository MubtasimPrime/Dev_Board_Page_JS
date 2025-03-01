let btn = document.querySelectorAll(".completed-btn");
btn.forEach((event) => {
  event.addEventListener("click", (e) => {
    alert("Board updated successfully");
    e.target.disabled = true;
    e.target.style.cursor = "not-allowed";
    e.target.style.opacity = "0.3";

    // Increment
    let task = document.getElementById("task-assign");
    let convertedTaskValue = parseInt(task.innerText);

    if (convertedTaskValue > 0) {
      if (convertedTaskValue === 1) {
        alert("Congrats!!! You have completed all the current task");
      }
      convertedTaskValue--;
      task.innerText = convertedTaskValue;
    }

    // Decrement
  });
});
