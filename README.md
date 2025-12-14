# 🪱 Worm AI

🌐 **Language**
- 🇺🇸 English (this page)
- 🇮🇩 [Bahasa Indonesia](README_ID.md)

> **Multi-Model AI Chat Web**  
> Claude • DeepSeek • Grok  
> Liquid Glass UI • Neon Blue • Beginner Friendly

---

## ✨ What is Worm AI?

**Worm AI** is a modern **AI chat website** similar to ChatGPT,  
but with the ability to **switch between multiple AI models**.

This project is designed to be:
- ✅ Beginner friendly
- ✅ Easy to upload (ZIP → GitHub)
- ✅ Easy to deploy (Vercel)
- ✅ Easy to customize

You **do NOT need coding knowledge** to use or deploy this project.

---

## 🧠 AI Features

- 🔁 **Multi-model AI**
  - Claude (Anthropic)
  - DeepSeek
  - Grok (xAI)
- 🔄 Switch AI model anytime
- 🧩 **System Prompt Training**
  - Default system prompt (Worm AI)
  - Custom system prompt (user-defined)
- 💾 Session per user (IP-based)
- 🆕 Start new chat
- 🗑️ Clear AI memory
- ⌨️ AI replies with **word-by-word typing effect**

---

## 🎨 UI / UX Features

- ChatGPT-style chat interface
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

## 📦 What You Need

You only need:
1. A **GitHub account**
2. **Google Colab**
3. This project **ZIP file**
4. AI **API keys**

No local coding setup required.

---

## 🚀 STEP 1 — Upload ZIP to GitHub (No Coding)

### 1️⃣ Open Google Colab  
👉 https://colab.research.google.com

### 2️⃣ Upload the ZIP file  
Example:

worm-ai.zip

### 3️⃣ Create GitHub Token
1. Go to https://github.com/settings/tokens  
2. Click **Generate new token (classic)**
3. Check:
   - ✅ repo
4. Copy the token

### 4️⃣ Run this code ONCE in Colab

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

```

✅ Done. Your project is now on GitHub.
---

🔐 STEP 2 — Get AI API Keys (Official)

🤖 Claude (Anthropic)

👉 https://console.anthropic.com

CLAUDE_KEY=sk-ant-xxxx

🧠 DeepSeek

👉 https://platform.deepseek.com

DEEPSEEK_KEY=sk-xxxx

🛰️ Grok (xAI)

👉 https://console.x.ai

GROK_KEY=xai-xxxx

⚠️ Never expose API keys in frontend code.


---

⚙️ STEP 3 — Deploy to Vercel

1. Open https://vercel.com


2. Import your GitHub repository


3. Go to Settings → Environment Variables


4. Add:

CLAUDE_KEY

DEEPSEEK_KEY

GROK_KEY



5. Click Deploy




---

🧠 Change Default AI Behavior (System Prompt)

Open server.js and edit:

system: `
You are Worm AI.
You are smart, calm, and helpful.
`

This controls how the AI behaves by default.


---

📜 License

MIT License
Free to learn, use, and modify.


---

🪱 Final Note

Worm AI is built as a:

Learning playground

Multi-model AI demo

Real deployable project


Feel free to explore and extend it 🚀
