const randomColor = () => {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.getElementById("bg-btn").addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});
