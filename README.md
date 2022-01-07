Note to self:
Code that doesn't work/ needs tweaking:
style.css :
.lightPrompt {
color: white;
}

    handler.js

import isDark

const prompt = document.querySelector(".prompt");

if (isDark) {
prompt.classList.add("lightPrompt");
} else {
prompt.classList.remove("lightPrompt");
}

    index.html

class="prompt"
