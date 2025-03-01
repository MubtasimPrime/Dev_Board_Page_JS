let myDate = new Date();

// Day
let dayText = myDate.toLocaleDateString("en-US", {
  weekday: "short",
});

const pText = document.getElementById("day");
pText.textContent = `${dayText} ,`;

// Month Date Year
let monthYearText = myDate.toDateString().slice(4);
const h2Text = document.getElementById("mm-dd-yy");
h2Text.textContent = monthYearText;
