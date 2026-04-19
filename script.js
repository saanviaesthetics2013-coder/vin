const content = document.getElementById("content");

/* navigation */
function loadPage(page) {

  /* HOME */
  if (page === "home") {
    content.innerHTML = `
      <div class="card">
        <h2>🌸 Welcome</h2>
        <p>This is your aesthetic digital world.</p>
      </div>
    `;
  }

  /* APPS */
  if (page === "apps") {
    content.innerHTML = `
      <div class="card">
        <h2>📦 Apps</h2>
        <button onclick="loadPage('game')">🎮 Game</button>
        <button onclick="loadPage('calc')">🧮 Calculator</button>
      </div>
    `;
  }

  /* GAME */
  if (page === "game") {
    content.innerHTML = `
      <div class="card">
        <h2>🎮 Reaction Game</h2>
        <button onclick="startGame()">Start</button>
        <div id="box" style="width:120px;height:120px;background:red;margin-top:20px;"></div>
      </div>
    `;
  }

  /* CALCULATOR */
  if (page === "calc") {
    content.innerHTML = `
      <div class="card">
        <h2>🧮 Calculator</h2>
        <input id="calc">
        <button onclick="calc()">=</button>
        <div id="res"></div>
      </div>
    `;
  }

  /* AI */
  if (page === "ai") {
    content.innerHTML = `
      <div class="card">
        <h2>🤖 AI</h2>
        <input id="aiInput" placeholder="Type something...">
        <button onclick="askAI()">Send</button>
        <div id="aiOut"></div>
      </div>
    `;
  }

  /* EXTRAS */
  if (page === "extras") {
    content.innerHTML = `
      <div class="card">
        <h2>✨ Extras</h2>

        <button onclick="showTime()">⏰ Time</button>
        <div id="time"></div>

        <h3>📝 Notes</h3>
        <textarea id="notes"></textarea>
        <button onclick="saveNotes()">Save</button>

        <h3>🎵 Music</h3>
        <audio controls>
          <source src="https://www.w3schools.com/html/horse.mp3">
        </audio>
      </div>
    `;
  }
}

/* GAME */
function startGame() {
  let box = document.getElementById("box");

  setTimeout(() => {
    box.style.background = "green";
    let start = Date.now();

    box.onclick = () => {
      alert("Reaction: " + (Date.now() - start) + " ms");
    };

  }, Math.random() * 3000);
}

/* CALC */
function calc() {
  let val = document.getElementById("calc").value;
  document.getElementById("res").innerText = eval(val);
}

/* AI */
function askAI() {
  let val = document.getElementById("aiInput").value;
  document.getElementById("aiOut").innerHTML += `<p>> ${val}</p>`;
}

/* TIME */
function showTime() {
  document.getElementById("time").innerText =
    new Date().toLocaleTimeString();
}

/* NOTES */
function saveNotes() {
  localStorage.setItem("notes", document.getElementById("notes").value);
}

/* LOAD SAVED NOTES */
window.onload = () => {
  loadPage("home");

  let saved = localStorage.getItem("notes");
  if (saved) {
    setTimeout(() => {
      let box = document.getElementById("notes");
      if (box) box.value = saved;
    }, 500);
  }
};

/* PARTICLES */
const emojis = ["🌸","✨","💫","🌿"];

for (let i = 0; i < 30; i++) {
  let e = document.createElement("div");
  e.className = "particle";
  e.innerText = emojis[Math.floor(Math.random()*emojis.length)];

  e.style.left = Math.random()*100 + "vw";
  e.style.fontSize = (18 + Math.random()*20) + "px";
  e.style.animationDuration = (6 + Math.random()*6) + "s";

  document.body.appendChild(e);
}
