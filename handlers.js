import { isValidColor, isDark } from "./colors";

//
const prompt = document.querySelector(".prompt");

function logWords(results) {
  console.log(results[results.length - 1][0].transcript); //access the deeply nested property on the results object
}

export function handleResults({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  //see if the word is a valid color
  //lowercase everything
  let color = words.toLowerCase();
  //strip any spaces out
  color = color.replace(/\s/g, "");
  //if valid color
  if (!isValidColor(color)) return;
  //show UI
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add("got");
  document.body.style.backgroundColor = color;
  if (isDark) {
    prompt.classList.add("lightPrompt");
  } else {
    prompt.classList.remove("lightPrompt");
  }
}
