// EXAMPLE 1
// document.getElementById("clickthis").addEventListener("click", function () {
//   let paragraph = document.getElementById("Mypara");
//   paragraph.textContent = "the paragraph is changed!!";
// });

// EXAMPLE 2

document.getElementById("clickMe").addEventListener("click", function () {
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add("highlight");
});
