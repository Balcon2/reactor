# Energy Systems Lab

Energy Systems Lab is an English-language educational simulator built with Vite, React, TypeScript (strict), Tailwind CSS, React Three Fiber, Drei, Three, Zustand, lucide-react, and Recharts. It presents nine fictional, dimensionless systems:

* Tidal Array
* Solar Field
* Wind Cluster
* River Turbine
* Geothermal Loop
* Thermal Storage Plant
* Renewable Hybrid Plant
* Stellar Plasma
* Orbital Solar

## Run locally

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm test
```

## What is included

Each system has a shared industrial plant scene built from reusable tanks, pipes, skids, and panels; three controls; a deterministic educational simulation engine; output/efficiency/risk metrics; and a Recharts response trace. Plant, Cutaway, Flow, Guided, Safety, and Components views keep the model legible without actionable construction or operating detail. System 6 focuses on thermal storage and explicitly distinguishes stored heat from a battery. System 7 shows a direct PV-to-electrical path with surplus routed to thermal storage. Residual heat remains visible after source shutdown in the conceptual notes. Compare mode supports side-by-side study, while Field notes and the short quiz turn the experiment into a learning loop. Control values and quiz progress persist in localStorage. The interface is responsive, keyboard-friendly, offers a reduced-motion setting, and includes a graceful WebGL fallback.

**This simulator is fictional and for educational purposes only. It is not a design, safety, or operational tool.**

No actionable nuclear/fusion details are provided. The Stellar Plasma system is intentionally abstract and dimensionless; its labels do not describe real equipment, procedures, or operating conditions.
