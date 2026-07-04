# OSINT Intelligence Workstation - Local Setup

## Quick Start (3 steps)

### Step 1: Install Node.js
Download from https://nodejs.org/ (LTS version)

### Step 2: Download this repo
Click the green "Code" button → "Download ZIP"
Extract the ZIP to a folder.

### Step 3: Serve locally
Open PowerShell in the extracted folder and run:
```powershell
npx serve
```
Open the URL shown (usually http://localhost:3000)

**Ollama will now work** because the site runs on HTTP locally!

---

## Make sure Ollama is running

In a separate PowerShell window:
```powershell
$env:OLLAMA_ORIGINS="*"
ollama serve
```

Then refresh the OSINT site → go to Screening → Ollama should show "Connected"

---

## Troubleshooting

### "npx serve" not found?
```powershell
npm install -g serve
serve
```

### Still seeing "Ollama Offline"?
1. Make sure Ollama is running: `ollama list` in another terminal
2. Check if you can access: http://localhost:11434/api/tags
3. If that works but the site still shows Offline, open DevTools (F12) → Console and send the error message
