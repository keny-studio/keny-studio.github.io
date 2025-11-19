console.log("Yo");

const title = document.querySelector("#myTitle");
const subtitle = document.querySelector("#mySubtitle");

title.addEventListener("mouseover", () => {
  console.log("Mouse overed");
  subtitle.style.color = "white";
  document.documentElement.style.backgroundColor = "red";
});

title.addEventListener("mouseout", () => {
  subtitle.style.color = "black";
  document.documentElement.style.backgroundColor = "black";
});
