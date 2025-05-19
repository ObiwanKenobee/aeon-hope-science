🧱 Functional Requirements

Core Pages/Routes:
/ — Landing Page with Langata-focused introduction
/energy — GreenEnergyKit (solar, biomass tools)
/agriculture — UrbanAgriLab (hydroponics, smart farming)
/health — HealthOS (indigenous medicine + diagnostics)
/ai-lab — Swahili AI tools for prompt engineering and models
/waste — TakaScience (recycling & biofuel experiments)
/community — Forum for youth sharing ideas
/sync — Offline data sync and USB export/import page
Components:
<ExperimentCard /> — Displays a DIY science project
<LabBuilder /> — Recommender based on available tools
<UploadData /> — Input results, photos, and sensor logs
<KnowledgeArchive /> — Offline docs, videos, PDFs (searchable)
<LanguageSwitch /> — English/Kiswahili toggle
<ProgressMap /> — Track personal learning + lab goals
<MentorConnect /> — Submit a question, get replies from diaspora scientists
State Management:
Context API for user session + selected module
IndexedDB or localStorage for offline caching
Worker thread for sync queue management
Style & UX:
TailwindCSS + accessible design
Youth-friendly fonts, calming colors
Iconography inspired by Pan-African & indigenous symbolism
Platform Features:
PWA Support: Full offline caching
USB Export/Import: Export JSON data for labs with no internet
Mesh Sync Support: Option to use Gun.js or IPFS later
Admin Mode: View local lab stats, upload learning packs
Dark Mode: For labs running at night with solar power
🔐 Roles:

Youth Explorer (Default): Can view, test, submit experiments
Community Mentor: Can publish labs and reply to others
Admin (School or NGO): Upload curriculum, manage devices
💾 Backend API Prompt (Suggested):

Use NestJS with TypeORM + SQLite (offline-first, scalable to Postgres). Set up REST endpoints for:
/experiments — GET, POST, PUT
/labs — Lab station registration + updates
/users — Alias-based login + progress tracking
/sync — Manage queued data export + USB format
📦 Project Structure

aeon-langata/
├── public/
├── src/
│   ├── components/
│   │   ├── ExperimentCard.tsx
│   │   ├── LabBuilder.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── energy.tsx
│   │   ├── agriculture.tsx
│   │   ├── health.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── syncService.ts
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
├── vite.config.ts
├── tailwind.config.ts
