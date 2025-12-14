# 🪱 Worm AI

> **Multi-Model AI Chat Web**  
> Claude • DeepSeek • Grok  
> Liquid Glass UI • Neon Blue • Beginner Friendly

---

## 🌐 Language
- 🇺🇸 **English (this page)**
- 🇮🇩 [Bahasa Indonesia](#bahasa-indonesia)

---

## ✨ What is Worm AI?

**Worm AI** is a modern **AI chat website** similar to ChatGPT, but with the ability to **switch between multiple AI models**.

It is designed to be:
- ✅ Easy for beginners
- ✅ Easy to upload (ZIP → GitHub)
- ✅ Easy to deploy (Vercel)
- ✅ Easy to customize

You **do NOT need to understand coding** to use or deploy this project.

---

## 🧠 AI Features

- 🔁 Multi-model AI support:
  - **Claude** (Anthropic)
  - **DeepSeek**
  - **Grok** (xAI)
- 🔄 Switch AI model anytime
- 🧩 **System Prompt Training**
  - Default system prompt (Worm AI)
  - Custom system prompt (user input)
- 💾 Session per user (IP-based)
- 🆕 New chat
- 🗑️ Clear AI memory
- ⌨️ AI replies with **word-by-word typing effect**

---

## 🎨 UI / UX Features

- ChatGPT-style interface
- Semi **liquid glass** (iOS-like)
- Dark mode
- Blue-dominant neon theme
- RGB glow borders
- Animated **network / constellation background**
- Drag & drop image UI (frontend ready)
- Smooth flagship-style animations
- Mobile-friendly

---

## 📁 Project Structure

worm-ai/ ├─ public/ │  ├─ index.html      # Main UI │  ├─ style.css       # Liquid glass & neon styles │  ├─ app.js          # Frontend logic │  └─ particles.js    # Animated background ├─ server.js          # Backend & AI router ├─ package.json └─ vercel.json

---

## 📦 What You Need (Before Start)

You only need:
1. A **GitHub account**
2. **Google Colab**
3. This project **ZIP file**
4. AI **API keys**

No local setup required.

---

## 🚀 STEP 1 — Upload ZIP to GitHub (NO CODING)

### 🔹 1. Open Google Colab
👉 https://colab.research.google.com

### 🔹 2. Upload the ZIP file
Upload:

worm-ai.zip

### 🔹 3. Create GitHub Token
1. Open: https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Check:
   - ✅ repo
4. Copy the token

### 🔹 4. Run this code ONCE in Colab

```bash
%%bash
GITHUB_USERNAME="YOUR_USERNAME"
GITHUB_EMAIL="YOUR_EMAIL"
REPO_NAME="worm-ai"
ZIP_NAME="worm-ai.zip"
GITHUB_TOKEN="YOUR_GITHUB_TOKEN"

git config --global user.name "$GITHUB_USERNAME"
git config --global user.email "$GITHUB_EMAIL"

mkdir -p /content/project
cd /content/project

unzip -o "/content/$ZIP_NAME"

git init
git branch -M main
git remote add origin https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git

git add .
git commit -m "Initial Worm AI upload"
git push -u origin main --force

✅ Done.
Your ZIP is now uploaded to GitHub.


---

🔐 STEP 2 — Get AI API Keys (OFFICIAL)

🤖 Claude (Anthropic)

👉 https://console.anthropic.com
Create API Key → copy

CLAUDE_KEY=sk-ant-xxxx


---

🧠 DeepSeek

👉 https://platform.deepseek.com
Create API Key → copy

DEEPSEEK_KEY=sk-xxxx


---

🛰️ Grok (xAI)

👉 https://console.x.ai
Create API Key → copy

GROK_KEY=xai-xxxx

⚠️ Never put API keys in frontend code.


---

⚙️ STEP 3 — Set API Keys in Vercel

1. Open https://vercel.com


2. Import your GitHub repo


3. Go to Settings → Environment Variables


4. Add:

CLAUDE_KEY

DEEPSEEK_KEY

GROK_KEY



5. Deploy 🚀




---

🧠 Change Default AI Behavior (System Prompt)

Open server.js and edit:

system: `
You are Worm AI.
You are smart, calm, and helpful.
`

This controls how the AI behaves by default.


---

🧪 How Sessions Work

Each user has their own AI session

Session is based on IP

User can:

Start a new chat

Clear AI memory




---

📜 License

MIT License
Free to learn, modify, and use.


---

🇮🇩 Bahasa Indonesia

❓ Apa itu Worm AI?

Worm AI adalah website chat AI modern yang bisa memakai banyak AI sekaligus (Claude, DeepSeek, Grok) dengan tampilan futuristik dan mudah digunakan.

Project ini dibuat supaya:

Orang awam bisa langsung pakai

Tidak ribet upload

Mudah deploy ke Vercel



---

🧠 Fitur Utama

Multi AI (Claude, DeepSeek, Grok)

Bisa ganti AI kapan saja

System prompt bawaan

System prompt custom

Bisa mulai chat baru

Bisa hapus memori AI

Jawaban AI diketik per kata



---

🚀 Cara Upload ke GitHub (PALING MUDAH)

Yang dibutuhkan:

Akun GitHub

Google Colab

File ZIP project


Langkah:

1. Buka Google Colab


2. Upload ZIP


3. Jalankan 1 kode


4. Selesai




---

🔐 API Key

Claude → https://console.anthropic.com

DeepSeek → https://platform.deepseek.com

Grok → https://console.x.ai



---

🪱 Penutup

Worm AI adalah project AI multi-model dengan UI modern yang cocok untuk:

Belajar

Eksperimen

Deploy real


Silakan gunakan dan kembangkan 🚀
