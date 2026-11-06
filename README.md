# Anand Jose Arackal

**Software & AI Architect** · Full-Stack · Integrations · AI Architecture
Kerala, India · Currently building enterprise finance software at **Sage AR Automation**

[🌐 anandjose.com](https://anandjose.com) ·
[💼 LinkedIn](https://www.linkedin.com/in/anand-jose-arackal) ·
[🐙 GitHub](https://github.com/anandjose-arackal) ·
[✉️ anandjose.live@gmail.com](mailto:anandjose.live@gmail.com)

---

## About

Ten years spanning the full software development lifecycle — from requirements and architecture through delivery, systems integration, and the cloud infrastructure that runs it at scale. My focus is solution engineering and system reliability: turning complex business problems into software that stays up, scales cleanly, and keeps earning its keep in production.

Today I work as an AI architect: designing agent systems end to end — how LLMs, tools and enterprise data connect, where guardrails sit, and how agents are evaluated — so AI moves from demo to dependable production software.

| Experience | Projects | Domain | Cloud | Current Mission |
|---|---|---|---|---|
| 10+ years | 10+ shipped to enterprise | Finance — AP & AR automation | Azure · AWS | AI Architecture at Sage |

## Experience

### Software Engineer — Sage AR Automation (SARA)
*2025 — Present*

Building AI skills and agents for Sage AR Automation, and preparing the product for new markets worldwide through full UI localisation.

- Shipped AI skills and agents that automate accounts-receivable workflows.
- Localised SARA's React UI into **5 languages**, helping introduce SARA to new markets across the globe.
- Fixed early-payment discount calculation so it evaluates correctly across every time zone.
- Restored reliable payment functionality in the Fortis payment integration.

`React` `.NET (C#)` `AI Agents` `Localisation`

### Solution Engineer — Lockstep AP (Sage)
*Oct 2021 — 2025*

- Migrated production MySQL to Azure MySQL Flexible Server with a master-replica plan — only **~3 hours of downtime**.
- Engineered tailored data exports and cloud-to-cloud migrations across **5 platforms**: Azure, GCP, AWS, Drive API and ATP.
- Owned customer escalations end to end and kept the platform stable through large-scale data migrations.

`Azure` `MySQL` `AWS` `GCP` `Ruby` `Shell`

### Product Development Engineer — Finly.io (now Lockstep AP)
*Oct 2018 — Oct 2021*

- Designed a configurable ETL platform (Ruby sandbox) for ERP integrations — cut customer onboarding from **over a week to 1–2 days**.
- Built payment integrations with **3 leading Indian banks**, including collection wallet and BBPS APIs.
- Processed **40,000+ bulk payments** within minutes and **200,000+ API payments a month** for a single client.
- Built version management for data objects with full audit trails, and ELK Stack error handling that catches bad data before import.

`Ruby` `MySQL` `ELK Stack` `React` `AWS` `Shell`

### Associate Software Engineer — Trivand Technologies Pvt Ltd
*Feb 2016 — Sep 2018*

- Designed and built multi-client insurance management software for a leading insurance brokerage.
- Role-based claim assignment algorithm raised resource utilisation by **15%**.
- Bulk claim and invoicing features accelerated large-scale claim recovery.

`Ruby on Rails` `MongoDB` `Redis` `jQuery` `REST` `AWS`

## Projects

| Project | What it is | Stack |
|---|---|---|
| [fest_hub](https://github.com/anandjose-arackal/fest_hub) · [demo](https://missionhub-five.vercel.app) | Multi-organisation festival competition platform — registration, admin back-office, live results display and certificates | Next.js, TypeScript, Supabase, Tailwind CSS |
| [padheyam](https://github.com/anandjose-arackal/padheyam) · [demo](https://padheyam.vercel.app) | Mobile-first Catholic Mass finder with a map-first home and live next-Mass countdown; fully anonymous | Next.js, React 19, Supabase, Google Maps |
| food-portal · [live](https://www.nasrani.in) | Food pre-order and counter app for Nazrani Fest 2026 — online payment, QR pickup tokens, live order handover | Next.js, Supabase, Razorpay, Firebase |
| erp-integration-platform *(private)* | Configurable ETL for ERP integrations + onboarding tooling | Ruby, MySQL, ELK Stack |
| bank-payment-integrations *(private)* | High-volume bulk and API payment rails with 3 Indian banks | Ruby, MySQL, REST, AWS |
| cloud-data-migrations *(private)* | Production MySQL → Azure cutover and multi-cloud customer exports | MySQL, Azure, GCP, AWS |
| sara-ai-agents *(private)* | AI skills and agents for accounts-receivable automation | React, .NET, AI Agents |
| [openSUSE/osem](https://github.com/openSUSE/osem/pull/1166) *(contribution)* | Fix for empty proposal abstracts, openSUSE bugathon (Aug 2016) | Ruby on Rails |

## Skills

- **Backend:** Ruby on Rails, .NET, Node.js, Python
- **Frontend:** React, Next.js, TypeScript
- **Infrastructure:** Azure, AWS, Docker, Kubernetes
- **Databases:** SQL Server, PostgreSQL, MySQL, Redis
- **Architecture:** Microservices, REST, Event Driven, CI/CD, DDD, Testing
- **AI:** Claude, OpenAI, Azure OpenAI, LangChain, MCP

---

## About this repo

Source for my portfolio site — Next.js (static export), Tailwind CSS, Framer Motion — deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

Content lives in [`src/lib/data.ts`](src/lib/data.ts) and [`src/lib/content/`](src/lib/content/).
