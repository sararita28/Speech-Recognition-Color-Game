import { handleResults } from "./handlers";
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector(".colors");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  // Check to see if the browser supports speech recognition
  // If it does not support it
  // Log 'sorry' message
  if (!("SpeechRecognition" in window)) {
    console.log("Sorry, your browser does not support speech recognition");
    return;
  }
  // If it supports it
  // Create a new speech recognition instance
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // set it to continuously listen
  recognition.interimResults = true; // gives us the results as we're speaking (versus waiting till we're done)
  recognition.onresult = handleResults; // listens for a result
  recognition.start();
}
start();

// write a function to map through each color and return its name
function displayColors(colors) {
  return colors
    .map(
      (color) =>
        `<span class="color ${color} ${
          isDark(color) ? "dark" : ""
        }" style="background: ${color}">${color}</span>`
    )
    .join("");
}
colorsEl.innerHTML = displayColors(colorsByLength);
