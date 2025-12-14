const chat = document.getElementById("chat");
const input = document.getElementById("input");
const send = document.getElementById("send");
const model = document.getElementById("model");
const systemMode = document.getElementById("systemMode");
const systemPrompt = document.getElementById("systemPrompt");
const newChat = document.getElementById("newChat");
const clearChat = document.getElementById("clearChat");

systemMode.onchange = () => {
  systemPrompt.disabled = systemMode.value === "default";
};

function bubble(text, cls) {
  const b = document.createElement("div");
  b.className = "bubble " + cls;
  chat.appendChild(b);

  let words = text.split(" ");
  let i = 0;
  const t = setInterval(() => {
    b.textContent += (i ? " " : "") + words[i++];
    chat.scrollTop = chat.scrollHeight;
    if (i >= words.length) clearInterval(t);
  }, 45);
}

send.onclick = async () => {
  if (!input.value) return;
  bubble(input.value,"user");

  const r = await fetch("/chat",{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({
      prompt: input.value,
      model: model.value,
      system: systemMode.value==="custom" ? systemPrompt.value : null
    })
  });

  const j = await r.json();
  bubble(j.reply,"ai");
  input.value="";
};

newChat.onclick = () => {
  chat.innerHTML = `<div class="bubble ai">Chat baru dimulai ✨</div>`;
};

clearChat.onclick = async () => {
  await fetch("/session/clear",{ method:"POST" });
  chat.innerHTML = `<div class="bubble ai">Sesi AI dihapus 🗑️</div>`;
};

// ================================
// API KEY HANDLER (USER SIDE)
// ================================
const apiKeyInput = document.getElementById("apiKeyInput");
const apiModel = document.getElementById("apiModel");
const saveKeyBtn = document.getElementById("saveKey");

// load api key saat ganti model
apiModel.addEventListener("change", () => {
  apiKeyInput.value =
    localStorage.getItem("key_" + apiModel.value) || "";
});

// simpan api key
saveKeyBtn.addEventListener("click", () => {
  const key = apiKeyInput.value.trim();
  if (!key) {
    alert("API key masih kosong.");
    return;
  }
  localStorage.setItem("key_" + apiModel.value, key);
  alert("API key disimpan di browser lu.");
});

// load pertama kali
apiModel.dispatchEvent(new Event("change"));

function getUserApiKey(model) {
  return localStorage.getItem("key_" + model);
}
