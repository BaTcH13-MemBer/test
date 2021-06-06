let checkbox = document.querySelector("input");
let button = document.querySelector("button");

checkbox.addEventListener("change", () => {
  if (!checkbox.checked) button.style.display = "none";
  else button.style.display = null;
});



//https://www.youtube.com/watch?v=O32ROhsn3mU