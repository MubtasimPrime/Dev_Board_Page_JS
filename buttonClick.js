let btn = document.querySelectorAll(".completed-btn");
btn.forEach((event) => {
  event.addEventListener("click", (e) => {
    alert("Board updated successfully");
    e.target.disabled = true;
    e.target.style.cursor = "not-allowed";
    e.target.style.opacity = "0.3";
  });
});
