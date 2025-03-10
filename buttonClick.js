let btn = document.querySelectorAll(".completed-btn");
btn.forEach((event) => {
  event.addEventListener("click", (e) => {
    alert("Board updated successfully");
    e.target.disabled = true;
    e.target.style.cursor = "not-allowed";
    e.target.style.opacity = "0.3";

    // h2 capturing
    let buttonId = e.target.id;
    let buttonNumber = buttonId.replace("completed-btn-", "");
    let h2Text = document.getElementById(`text-${buttonNumber}`);

    if (h2Text) {
      // console.log(h2Text.innerText);
      let activityDiv = document.getElementById("activity-div");
      let createPTag = document.createElement("p");
      createPTag.classList.add("bg-blue", "m-5", "rounded-lg", "p-2");

      // Present Time
      let currentDate = new Date();
      let presentTime = currentDate.toLocaleTimeString();
      // console.log(presentTime);

      createPTag.innerText = `You have completed the task ${h2Text.innerText} at ${presentTime}`;
      activityDiv.append(createPTag);
    }

    // Increment
    let task = document.getElementById("task-assign");
    let convertedTaskValue = parseInt(task.innerText);

    if (convertedTaskValue) {
      if (convertedTaskValue === 1) {
        alert("Congrats!!! You have completed all the current task");
      }
      convertedTaskValue--;
      task.innerText = convertedTaskValue;
    }

    // Decrement
    let task2 = document.getElementById("check-box");
    let convertedTaskValue2 = parseInt(task2.innerText);
    if (convertedTaskValue2) {
      convertedTaskValue2++;
      task2.innerText = convertedTaskValue2;
    }
  });
});
