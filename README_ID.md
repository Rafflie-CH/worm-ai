# 🪱 Worm AI

🌐 **Bahasa**
- 🇮🇩 Bahasa Indonesia (halaman ini)
- 🇺🇸 [English](README.md)

> Website Chat AI Multi-Model  
> Claude • DeepSeek • Grok  
> Tampilan Liquid Glass • Mudah Dipakai

---

## ✨ Apa itu Worm AI?

**Worm AI** adalah **website chat AI modern** seperti ChatGPT,  
namun bisa **mengganti AI model** secara bebas.

Project ini dibuat supaya:
- ✅ Orang awam bisa langsung pakai
- ✅ Mudah upload (ZIP → GitHub)
- ✅ Mudah deploy ke Vercel
- ✅ Mudah dikembangkan

**Tidak perlu jago coding.**

---

## 🧠 Fitur AI

- 🔁 Multi AI:
  - Claude
  - DeepSeek
  - Grok
- Bisa ganti AI kapan saja
- System prompt bawaan (Worm AI)
- System prompt custom (user isi sendiri)
- Session per user (berdasarkan IP)
- Bisa mulai chat baru
- Bisa hapus memori AI
- Jawaban AI diketik **per kata**

---

## 🎨 Tampilan (UI / UX)

- UI chat ala ChatGPT
- Liquid glass (kaca ala iOS)
- Dark mode
- Warna biru neon dominan
- Border RGB menyala
- Background animasi garis network
- Drag & drop image UI (frontend)
- Animasi halus (flagship feel)
- Support HP

---

## 📁 Struktur Project

worm-ai/ ├─ public/ │  ├─ index.html │  ├─ style.css │  ├─ app.js │  └─ particles.js ├─ server.js ├─ package.json └─ vercel.json

---

## 📦 Yang Dibutuhkan

1. Akun GitHub
2. Google Colab
3. File ZIP project
4. API key AI

Tidak perlu setup lokal.

---

## 🚀 Cara Upload ke GitHub (PALING MUDAH)

### 1️⃣ Buka Google Colab  
👉 https://colab.research.google.com

### 2️⃣ Upload file ZIP  
Contoh:

worm-ai.zip

### 3️⃣ Buat GitHub Token
1. Buka https://github.com/settings/tokens  
2. Klik **Generate new token (classic)**
3. Centang:
   - ✅ repo
4. Salin token

### 4️⃣ Jalankan 1 Kode Ini di Colab

```bash
%%bash
GITHUB_USERNAME="USERNAME_GITHUB"
GITHUB_EMAIL="EMAIL_GITHUB"
REPO_NAME="worm-ai"
ZIP_NAME="worm-ai.zip"
GITHUB_TOKEN="TOKEN_GITHUB"

git config --global user.name "$GITHUB_USERNAME"
git config --global user.email "$GITHUB_EMAIL"

mkdir -p /content/project
cd /content/project

unzip -o "/content/$ZIP_NAME"

git init
git branch -M main
git remote add origin https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git

git add .
git commit -m "Upload awal Worm AI"
git push -u origin main --force
```

Selesai ✅
Repo GitHub langsung terisi.


---

🔐 API Key Resmi

Claude → https://console.anthropic.com

DeepSeek → https://platform.deepseek.com

Grok → https://console.x.ai


API key disimpan di:

Vercel Environment Variables

atau file .env



---

🧠 Ganti Prompt AI Bawaan

Buka server.js, ubah bagian:

system: `
You are Worm AI.
You are smart, calm, and helpful.
`


---

🪱 Penutup

Worm AI cocok untuk:

Belajar AI

Eksperimen

Project deploy beneran


Silakan pakai dan kembangkan 🚀
