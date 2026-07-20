# OSINT Intelligence Workstation v2

Complete 11-page OSINT command center built with React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui.

## Pages (11)
1. **Dashboard** — System overview with stats, activity feed, quick actions, Ollama status
2. **Sources** — OSINT source management (12 sources, 7 categories)
3. **Tools** — Catalog of 36 OSINT tools across 12 categories
4. **Investigations** — Case management with CRUD, status/priority filters
5. **Reports** — Report generation with type/status management
6. **Screening** — AI-powered target screening with Ollama integration
7. **Vault** — AES-256-GCM encrypted credential storage
8. **AI Assistant** — Ollama-powered chat interface
9. **Metrics** — Analytics dashboard with Recharts (4 chart types)
10. **Settings** — Ollama config, Vault keys, Display, Notifications
11. **Admin** — User management, RBAC permissions, Audit log

## Tech Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v3 + shadcn/ui (40+ components)
- Wouter routing
- Recharts for data visualization
- Lucide React icons
- Ollama integration for local AI

## Design
- Navy blue (#0A2463) primary
- Light theme only
- Card-based layouts
- RTL-ready for Hebrew

## Deployment
```
npx serve
```

## Version History
- v20: Complete rebuild with 11 pages, full feature set