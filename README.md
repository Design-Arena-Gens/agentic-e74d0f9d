# Bharat Life Care Social Media Agent

Agentic control center that automates Bharat Life Care's social media strategy, execution, and analytics. The web app fuses campaign intelligence, workflow orchestration, automated scheduling, and a co-pilot tuned to the brand's medical-compliance voice.

## Tech Stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) utility-first styling
- [Framer Motion](https://www.framer.com/motion/) micro-interactions
- [date-fns](https://date-fns.org/) lightweight date helpers

## Capabilities

- **Unified Command Center**: KPI snapshots, campaign spotlight, workflow pulse, and publishing timeline updated in real time.
- **Agent Co-Pilot**: Conversational assistant synthesizes strategies for calendar, analytics, crisis, and task management.
- **Strategy Auto-Composer**: Generates multi-channel playbooks anchored to Bharat Life Care's preventive-health pillars.
- **Automation Playbooks**: Highlights always-on routines (calendar generation, sentiment listening, lead nurture).
- **Brand Voice Blueprint**: Guardrails for tone, messaging principles, and approved content formats.

## Quickstart

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to open the command center.

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e74d0f9d
```

Verify DNS propagation after a few seconds:

```bash
curl https://agentic-e74d0f9d.vercel.app
```

## Structure

```
app/
  layout.tsx        # Application shell
  page.tsx          # Main dashboard assembly
  globals.css       # Tailwind base + custom utilities
components/         # Dashboard modules and UI primitives
lib/                # Domain data seeds and AI helpers
config files        # Next.js, Tailwind, ESLint, TypeScript
```

## License

MIT © Bharat Life Care
