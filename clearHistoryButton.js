let clearHistoryButton = document.getElementById("clear-history-btn");
let activityDiv = document.getElementById("activity-div");
clearHistoryButton.addEventListener("click", () => {
  activityDiv.innerHTML = "";
});
