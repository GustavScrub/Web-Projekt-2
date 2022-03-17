// selectar inputen med classen inputBOI
let checkBox5 = document.querySelector(".checkBox5");
let checkBox4 = document.querySelector(".checkBox4");
let checkBox3 = document.querySelector(".checkBox3");
let checkBox2 = document.querySelector(".checkBox2");
let checkBox1 = document.querySelector(".checkBox1");
// selectar h1 text med classen number
let rank5 = document.querySelector(".rank5");
let rank4 = document.querySelector(".rank4");
let rank3 = document.querySelector(".rank3");
let rank2 = document.querySelector(".rank2");
let rank1 = document.querySelector(".rank1");
// gör en eventlistener som lyssnar för en change med en funktion
checkBox5.addEventListener("change", () => {
  if (
    // om det va true och hör en change blir de false och lägger till klassen hidden
    checkBox5.getAttribute("data-active") === "true"
  ) {
    // gör det till false
    checkBox5.setAttribute("data-active", "false");
    // ger den klassen hidden
    rank5.classList.add("hidden");
  } else {
    // gör det till true
    checkBox5.setAttribute("data-active", "true");
    // tar bort classen hidden
    rank5.classList.remove("hidden");
  }
});

checkBox4.addEventListener("change", () => {
  if (checkBox4.getAttribute("data-active") === "true") {
    checkBox4.setAttribute("data-active", "false");
    rank4.classList.add("hidden");
  } else {
    checkBox4.setAttribute("data-active", "true");
    rank4.classList.remove("hidden");
  }
});

checkBox3.addEventListener("change", () => {
  if (checkBox3.getAttribute("data-active") === "true") {
    checkBox3.setAttribute("data-active", "false");
    rank3.classList.add("hidden");
  } else {
    checkBox3.setAttribute("data-active", "true");
    rank3.classList.remove("hidden");
  }
});

checkBox2.addEventListener("change", () => {
  if (checkBox2.getAttribute("data-active") === "true") {
    checkBox2.setAttribute("data-active", "false");
    rank2.classList.add("hidden");
  } else {
    checkBox2.setAttribute("data-active", "true");
    rank2.classList.remove("hidden");
  }
});

checkBox1.addEventListener("change", () => {
  if (checkBox1.getAttribute("data-active") === "true") {
    checkBox1.setAttribute("data-active", "false");
    rank1.classList.add("hidden");
  } else {
    checkBox1.setAttribute("data-active", "true");
    rank1.classList.remove("hidden");
  }
});
