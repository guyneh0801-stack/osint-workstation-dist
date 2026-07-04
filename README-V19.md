# OSINT Intelligence Workstation - V19

## Download Link

**Full Build (ZIP):** https://litter.catbox.moe/5xdaga.zip

## Contents

This is the merged V19 build of the OSINT Intelligence Workstation, combining:
- The cleaned build (no mock data) from the current session
- Additional pages from V18 (Reports, Investigations)
- Expanded Tools page with 18+ OSINT tools

### What's Included (9 Pages)
1. **Dashboard** - Clean dashboard with empty states
2. **Screening** - Ollama health check with CORS detection
3. **Tools** - 18+ OSINT tools in 12 categories
4. **Vault** - Secret storage with AES-256 encryption
5. **AI Assistant** - Direct Ollama integration
6. **Metrics** - 7 computational metrics calculator
7. **Admin Stats** - Admin statistics
8. **Reports** - Investigation reports (NEW from V18)
9. **Investigations** - Case management (NEW from V18)

### Already Uploaded to This Repo
- `index.html` - Entry point (updated for 9 pages)
- `assets/index-BuLf2qKw.css` - Styles (81KB)

### In the ZIP Only
- `assets/index-CIlQ-mR9.js` - JavaScript bundle (354KB) - **too large for GitHub upload**

## Setup Instructions

1. Download the ZIP from the link above
2. Extract to a folder
3. Serve locally using any static file server:
   ```bash
   # Option 1: Python
   cd dist && python -m http.server 8080
   
   # Option 2: Node.js
   npx serve .
   
   # Option 3: PHP
   php -S localhost:8080
   ```
4. Open http://localhost:8080 in your browser

## Ollama Connection

For Ollama to work, you must access the site via **HTTP** (not HTTPS) due to browser Mixed Content Policy. The easiest way is to serve locally as shown above.

Start Ollama with CORS enabled:
```bash
OLLAMA_ORIGINS="*" ollama serve
```

## Tech Stack
- React 19 + TypeScript
- Vite 7.2.4
- Tailwind CSS 3.4.19
- HashRouter (for static hosting compatibility)

---
*Built: 2026-07-05*
