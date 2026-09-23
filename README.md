# Energy Systems Lab

Energy Systems Lab is an English-language educational simulator built with Vite, React, TypeScript (strict), Tailwind CSS, React Three Fiber, Drei, Three, Zustand, lucide-react, and Recharts. It presents nine fictional, dimensionless systems:

* Tidal Array
* Solar Field
* Wind Cluster
* River Turbine
* Geothermal Loop
* Bio Digestor
* Flow Storage
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

Each system has a shared interactive 3D scene, three controls, a deterministic educational simulation engine, output/efficiency/risk metrics, and a Recharts response trace. Compare mode supports side-by-side study, while Field notes and the short quiz turn the experiment into a learning loop. Control values and quiz progress persist in localStorage. The interface is responsive, keyboard-friendly, offers a reduced-motion setting, and includes a graceful WebGL fallback.

**This simulator is fictional and for educational purposes only. It is not a design, safety, or operational tool.**

No actionable nuclear/fusion details are provided. The Stellar Plasma system is intentionally abstract and dimensionless; its labels do not describe real equipment, procedures, or operating conditions.
