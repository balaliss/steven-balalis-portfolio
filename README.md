# Steven Balalis - Professional Portfolio (Static Web Site)

A zero-dependency, static web portfolio built exclusively from `base_resume.md` and `proof_bank.md` to share alongside job applications, resumes, and cover letters.

## What It Showcases (100% Source-Verified)

1. **AI Fluency & Forward-Deployed Execution (`#ai-fluency`):**
   - **Orbit AI White-Label Email Architecture:** Shipped in Python, JavaScript/Node.js, and SQL via GitLab CI/CD, monitored in Grafana and AWS (used by all 30 live partners).
   - **After-Hours Emergency-Detection IVR AI:** Validated end to end against a 10-call QA test suite (`10/10 passed`) before release, plus Orbit AI flow JSON schema reverse-engineering.
   - **AI Use-Case Intake & Security Governance:** Scoped ~10 AI use cases since July 2026 (`build, pilot, or decline`) with Legal, Security, Compliance, and Internal Audit gates; OAuth vs. scoped Atlassian API token decision for Jira intake; Claude Admin at BCM One and Transcarent.
   - **Ongoing API & Workflow Integrations:** Orbit AI API and REST API validation for CRM (`Salesforce`, `HubSpot`) across SkySwitch/NetSapiens (ongoing) and `n8n` to HubSpot integration (ongoing), informed by an 18-request roadmap board built from 54 partner mentions.
   - **Academic & Applied LLM Depth:** M.S. in AI & LLMs (In Progress, Eastern University), LLM engineering coursework (`RAG Pipelines`, `AI Agents`, `QLoRA / Fine-Tuning`, `OpenAI/Anthropic APIs`), `AWS AIF-C01` (In Progress: `LangChain`, `Amazon Bedrock`, `IaC`), and org-wide generative AI adoption at Persevere Now (`25%+ YoY` via ~3 workshops/month).
2. **Leading Teams Since 2016 (`#leadership`):**
   - **BCM One (Jul 2026 - Present):** 4 direct reports (AI Implementation Team Product Owner & Scrum Master).
   - **Transcarent (Sep 2025 - Jun 2026):** Program leadership across 6 cross-functional workstreams (`P0-P2`), 20+ integration programs, 30+ partners, and 12 executive partner accounts (no direct reports).
   - **Persevere Now (Nov 2022 - May 2025):** 17 direct reports (3 software engineers, 7 classroom instructors, 7 TAs).
   - **Trenton Public School District (Sep 2019 - Nov 2022):** Led a 4-person team as Technology Program Manager.
   - **State of New Jersey - Dept. of the Treasury (Aug 2012 - Sep 2019):** Led a 5-person team of Pension Benefit Specialists from 2016 to 2019 on SHBP/SEHBP enrollment and triage support with Horizon Blue Cross Blue Shield of New Jersey.
3. **Interactive CAR Case Studies (`#case-studies`):**
   - 9 filterable Context-Action-Result (CAR) dossiers across AI & Voice Deployment, Healthcare & Data Integrations, and Operating Models & Automation.
4. **Complete Chronological Career Record & Credentials (`#experience`, `#credentials`):**
   - Exact employers, titles, dates, degrees (`B.S. - Rutgers University, 2012`, `M.F.A. - Thomas Edison State University, 2022`, `M.S. AI & LLMs - Eastern University, In Progress`), and certifications (`PSPO I`, `Lean Six Sigma Black Belt`, `AWS Cloud Practitioner`, `Salesforce AI Associate`).

---

## Preview Locally

Open `portfolio/index.html` directly in any browser, or serve the folder locally:

```bash
python3 -m http.server 8080 --directory portfolio
```

Then visit `http://localhost:8080`.

---

## Free One-Command Static Hosting Options

Because `portfolio/` is pure static HTML, CSS, JavaScript, and optimized local assets (`index.html`, `styles.css`, `app.js`, `assets/`), you can deploy it for free in under 60 seconds:

### Option 1: Cloudflare Pages (Free, Unlimited Bandwidth)
- Drag and drop the `portfolio` folder at [pages.cloudflare.com](https://pages.cloudflare.com), or run:
  ```bash
  npx wrangler pages deploy portfolio --project-name steven-balalis-portfolio
  ```

### Option 2: Netlify Drop (Free, Instant URL)
- Drag and drop the `portfolio` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant HTTPS link, or run:
  ```bash
  npx netlify-cli deploy --dir=portfolio --prod
  ```

### Option 3: GitHub Pages or Vercel (Free)
- **Vercel:** Run `npx vercel portfolio --prod`
- **GitHub Pages:** Push the `portfolio/` directory to a public GitHub repository and enable GitHub Pages on the root or `/portfolio` folder.
