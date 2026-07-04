# OSINT Intelligence Workstation - V19 Merged

> **Latest build with all fixes + V18 features merged**
> 
> Download: [OSINT_Workstation_V19.zip](https://litter.catbox.moe/5xdaga.zip) (valid 72h)
> 
> Live preview: https://acuashoz7zieq.kimi.page

---

## What Changed in V19

### Merged from V18
- **NEW: Reports page** - Generate and manage intelligence reports (empty state, no mock data)
- **NEW: Investigations page** - Track and manage investigations (empty state, no mock data)
- **Expanded Tools page** - 30+ OSINT tools in 12 categories (Domain, Network, Social Media, Geolocation, Crypto, Archives, Dark Web, AI/ML, Metadata, Communication, Search, Public Records)

### Fixed from Previous Versions
- **ALL mock data removed** - No fake stats, users, activity feeds, or hardcoded data
- **setTimeout shadowing bug fixed** - `const [timeout, setTimeout]` was shadowing the global `setTimeout` function
- **Double router fixed** - Removed duplicate BrowserRouter from main.tsx
- **useEffect vs useState fixed** - Health check now runs in proper useEffect instead of useState
- **19 OSINT metrics** - AI, EI, QRR, AER, TVC, PSI, BD, and more

### Pages (9 total)
| Page | Route | Status |
|------|-------|--------|
| Dashboard | `/` | Clean - empty states only |
| Screening | `/screening` | Ollama health check with CORS detection |
| Investigations | `/investigations` | NEW from V18 |
| Reports | `/reports` | NEW from V18 |
| Tools | `/tools` | 30+ tools in 12 categories |
| Vault | `/vault` | AES-256-GCM encryption |
| AI Assistant | `/ai` | Direct Ollama integration |
| Metrics | `/metrics` | 19 computational metrics |
| Admin | `/admin` | Clean - empty states only |

---

## Quick Start (Local)

### Option 1: Download ZIP
1. Download [OSINT_Workstation_V19.zip](https://litter.catbox.moe/5xdaga.zip)
2. Extract the ZIP
3. Open CMD in the extracted folder
4. Run: `npx serve`
5. Open http://localhost:3000

### Option 2: Use the Deployed Site
Open https://acuashoz7zieq.kimi.page

---

## For Ollama to Work

The site must be served over **HTTP** (not HTTPS) to connect to localhost:11434.

```bash
# Windows CMD (not PowerShell!)
set OLLAMA_ORIGINS=* && ollama serve

# In another CMD window, in the dist folder:
npx serve
```

Then open http://localhost:3000

---

## Files in This Repo

| File | Description |
|------|-------------|
| `index.html` | Entry point (loads CSS + JS) |
| `assets/index-BuLf2qKw.css` | Styles (81KB) |
| `assets/js_part1.js` - `js_part4.js` | JS bundle split into 4 parts |
| `Kimi_Agent_מערכת OSINT V18.zip` | Previous V18 build |

---

*Built with React + TypeScript + Tailwind CSS + Vite*
