# OSINT Intelligence Workstation V18 - FULL BUILD

> **All 9 pages + all advanced features restored!**
>
> Live site: https://acuashoz7zieq.kimi.page

---

## What Was Fixed

The previous build (V19) accidentally lost all V18 features. The current build restores everything:

### 9 Pages (All Working)
| # | Page | Route | Features |
|---|------|-------|----------|
| 1 | Dashboard | `/` | Empty state, clean metrics cards |
| 2 | **Screening** | `/screening` | **Quick Screen**, **Deep Investigation**, **AI Analysis**, **Data Collectors** (8 toggles), **Activity Log**, **Available Models**, Ollama CORS detection |
| 3 | **Investigations** | `/investigations` | **NEW** - Investigation table, search, priority badges, empty state |
| 4 | **Reports** | `/reports` | **NEW** - Report table, generate button, type/status filters, empty state |
| 5 | Tools | `/tools` | 36 tools in 12 categories with search |
| 6 | Vault | `/vault` | AES-256-GCM encryption |
| 7 | AI Assistant | `/ai` | Direct Ollama integration |
| 8 | Metrics | `/metrics` | 19 computational metrics |
| 9 | Admin | `/admin` | Empty state, clean layout |

### Screening Page - Full Features
- **Quick Screen** - Fast domain screening
- **Deep Investigation** - Comprehensive investigation
- **AI Analysis** - AI-powered analysis (requires Ollama)
- **Data Collectors** - 8 toggleable collectors: Domain Intelligence, WHOIS, DNS, SSL, HTTP Headers, Social Media, Cryptocurrency, Geolocation
- **Activity Log** - Real-time activity logging with timestamps
- **Available Models** - Shows installed Ollama models
- **Investigation Depth** - Surface / Standard / Deep selector
- **Timeout** - 10s / 30s / 60s / 120s selector
- **Ollama CORS Detection** - Automatically detects CORS issues

### Tools Page - 36 Tools in 12 Categories
Domain Intelligence, Network Analysis, Search & Discovery, Metadata Analysis, Archives & History, Cryptocurrency, AI & ML, Geolocation, Social Media, Communication, Public Records, and more.

### All Bugs Fixed
- No mock data anywhere
- No setTimeout shadowing bug
- No double router
- useEffect used correctly for health checks

---

## Quick Start

### Option 1: Use the Live Site (Recommended)
Open https://acuashoz7zieq.kimi.page

### Option 2: Run Locally
```bash
# 1. Download the source code from this repo
# 2. Install dependencies: npm install
# 3. Build: npm run build
# 4. Serve: npx serve dist
# 5. Open http://localhost:3000
```

### For Ollama Integration
```bash
# Windows CMD
set OLLAMA_ORIGINS=* && ollama serve

# Then serve the app with npx serve
```

---

## Repo Structure

This repo contains the built dist files. Due to GitHub file size limits, the JS bundle is split into multiple parts loaded sequentially.

| File | Size | Description |
|------|------|-------------|
| `index.html` | 405B | Entry point |
| `assets/index-CxTWqwDY.css` | 85KB | Styles |
| `assets/v18_loader.js` | 450B | JS loader (loads 7 parts) |
| `assets/v18_p1.js` | 68KB | JS part 1/7 |
| `assets/v18_p2.js` | 68KB | JS part 2/7 |
| `assets/v18_p3.js` | 68KB | JS part 3/7 |
| `assets/v18_p4.js` | 68KB | JS part 4/7 |
| `assets/v18_p5.js` | 68KB | JS part 5/7 |
| `assets/v18_p6.js` | 68KB | JS part 6/7 |
| `assets/v18_p7.js` | 68KB | JS part 7/7 |

**Total JS: 486KB** | **Total CSS: 85KB**

---

*Built with React + TypeScript + Tailwind CSS + Vite*