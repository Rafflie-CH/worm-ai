<!-- ======================================================
🪱 WORM AI - OFFICIAL README
Beginner Friendly • Multi-Model AI • Liquid Glass UI
====================================================== -->

<div align="center">

<h1 style="
background: linear-gradient(90deg,#00eaff,#7f00ff,#00ffcc);
-webkit-background-clip: text;
color: transparent;
animation: rgb 6s linear infinite;
">
🪱 Worm AI
</h1>

<p><b>Multi-Model AI Chat Web</b><br>
Claude • DeepSeek • Grok</p>

<p>
Modern AI chat web with <b>liquid glass UI</b>, <b>RGB neon animation</b>, and <b>multiple AI brains</b>.
</p>

</div>

<style>
@keyframes rgb {
  0%{filter:hue-rotate(0deg)}
  100%{filter:hue-rotate(360deg)}
}
</style>

---

## 🌍 Language / Bahasa

<div align="center">

<button onclick="
document.getElementById('en').style.display='block';
document.getElementById('id').style.display='none';
">
🇺🇸 English
</button>

<button onclick="
document.getElementById('en').style.display='none';
document.getElementById('id').style.display='block';
">
🇮🇩 Indonesia
</button>

</div>

---

<div id="en" style="display:block">

# 🇺🇸 English — FULL BEGINNER GUIDE

---

## ❓ What is Worm AI?

**Worm AI** is a **website-based AI chat application** that allows users to:
- Chat like ChatGPT
- Choose different AI models
- Customize AI behavior
- Start new chats or clear memory
- Enjoy a modern futuristic UI

👉 You **do NOT need coding knowledge** to use or deploy this project.

---

## ✨ Features

### 🧠 AI Features
- Supports **multiple AI models**:
  - Claude (Anthropic)
  - DeepSeek
  - Grok (xAI)
- Switch AI model anytime
- Default AI behavior (system prompt)
- Custom AI behavior (optional)
- AI memory per user (session)
- Clear AI memory
- Start new conversation
- AI replies with **word-by-word typing animation**

---

### 🎨 UI Features
- ChatGPT-like chat layout
- Liquid glass (iOS style)
- Dark mode
- Blue neon + RGB glow
- Animated network background
- Smooth flagship-level animation
- Mobile friendly

---

## 📦 What You Need (Before Start)

You only need:
1. **GitHub account**
2. **Google Colab**
3. **This project ZIP file**
4. **API keys** (free / paid depending on provider)

---

## 🚀 STEP 1 — Upload Project to GitHub (EASIEST WAY)

> No Git knowledge needed

### 1️⃣ Open Google Colab  
👉 https://colab.research.google.com

### 2️⃣ Upload the project ZIP  
Example:

worm-ai.zip

### 3️⃣ Get GitHub Token  
1. Open https://github.com/settings/tokens  
2. Click **Generate new token (classic)**
3. Check:
   - ✅ repo
4. Copy the token

### 4️⃣ Run this code ONCE in Colab

```bash
GITHUB_USERNAME="YOUR_USERNAME"
GITHUB_EMAIL="YOUR_EMAIL"
REPO_NAME="worm-ai"
ZIP_NAME="worm-ai.zip"
GITHUB_TOKEN="PASTE_TOKEN_HERE"

git config --global user.name "$GITHUB_USERNAME"
git config --global user.email "$GITHUB_EMAIL"

mkdir project && cd project
unzip "/content/$ZIP_NAME"
cd worm-ai

git init
git branch -M main
git remote add origin https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git

git add .
git commit -m "Initial Worm AI upload"
git push -u origin main

✅ DONE
Your project is now on GitHub.


---

🔐 STEP 2 — Get AI API Keys (IMPORTANT)

🤖 Claude (Anthropic)

👉 https://console.anthropic.com
Create API key → copy

CLAUDE_KEY=sk-ant-xxxx


---

🧠 DeepSeek

👉 https://platform.deepseek.com
Create API key → copy

DEEPSEEK_KEY=sk-xxxx


---

🛰️ Grok (xAI)

👉 https://console.x.ai
Create API key → copy

GROK_KEY=xai-xxxx


---

⚙️ STEP 3 — Set API Keys

Option A: Local

Create file .env

CLAUDE_KEY=...
DEEPSEEK_KEY=...
GROK_KEY=...


---

Option B: Vercel (Recommended)

1. Go to https://vercel.com


2. Import your GitHub repo


3. Settings → Environment Variables


4. Add:

CLAUDE_KEY

DEEPSEEK_KEY

GROK_KEY



5. Deploy 🚀




---

🧠 Change Default AI Behavior

Open server.js

system: `
You are Worm AI.
You are smart, calm, and helpful.
`

Edit the text to control how AI behaves.


---

🧪 How Sessions Work

Each user has their own AI memory

User can:

Start a new chat

Clear AI memory


Memory is stored per IP



---

📜 License

MIT License — free to learn, use, and modify.


---

</div><!-- ================= INDONESIAN ================= --><div id="id" style="display:none">🇮🇩 Indonesia — PANDUAN PALING LENGKAP


---

❓ Apa itu Worm AI?

Worm AI adalah website chat AI dengan tampilan modern dan bisa memakai banyak AI sekaligus.

👉 Cocok untuk orang awam
👉 Tidak perlu jago coding


---

✨ Fitur Utama

🧠 AI

Multi AI:

Claude

DeepSeek

Grok


Bisa ganti AI kapan saja

System prompt bawaan

System prompt custom

AI ingat percakapan

Bisa hapus memori AI

Bisa mulai chat baru

Jawaban AI diketik per kata



---

🎨 Tampilan

Mirip ChatGPT

Liquid glass (kaca)

Warna gelap futuristik

Border RGB menyala

Background garis bergerak

Animasi halus

Support HP



---

📦 Yang Dibutuhkan

1. Akun GitHub


2. Google Colab


3. File ZIP project


4. API key AI




---

🚀 Cara Upload ke GitHub (PALING MUDAH)

1. Buka https://colab.research.google.com


2. Upload file ZIP


3. Ambil GitHub Token:

https://github.com/settings/tokens



4. Jalankan 1 kode saja


5. Selesai




---

🔐 API Key (WAJIB)

Claude → https://console.anthropic.com

DeepSeek → https://platform.deepseek.com

Grok → https://console.x.ai


Simpan di:

.env

atau Vercel Environment Variables



---

🧠 Ganti Prompt AI Bawaan

Buka server.js

system: `
You are Worm AI.
You are smart, calm, and helpful.
`

Ubah teksnya sesuai keinginan.


---

🚀 Deploy ke Vercel

1. Login Vercel


2. Import repo GitHub


3. Tambahkan ENV:

CLAUDE_KEY

DEEPSEEK_KEY

GROK_KEY



4. Deploy




---

🪱 Penutup

Project ini dibuat supaya:

Orang awam bisa pakai

Mudah diupload

Mudah dideploy

Mudah dikembangkan


Silakan pakai, pelajari, dan kembangkan 🚀

</div><!-- ================= END README ================= -->---