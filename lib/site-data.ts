// Content data for CR Rubber and Seals Private Limited
// Source: Approved Website Content & SEO Guide.

export const heroSlides = [
  {
    id: 'hydraulic-pneumatic',
    tag: 'Precision Sealing Solutions',
    title: `India's Most Trusted Hydraulic &
Pneumatic Seal Manufacturer`,
    description:
      'ISO 9001:2015 certified manufacturer of hydraulic seals, pneumatic seals, oil seals, O-rings, PU products and custom moulded rubber components.',
    badge: 'ISO 9001:2015 Certified',
    image: '/images/slide-1.png',
  },
  {
    id: 'machined-seals',
    tag: 'One Hour Seal Factory',
    title: `Custom Machined Seals
Up to 1500mm OD`,
    description:
      'CNC-machined custom seals with 125+ profiles — no tooling cost, no minimum order. Large diameter and TBM seals up to 7500mm.',
    badge: 'No Tooling Cost · No MOQ',
    image: '/images/slide-4.png',
  },
  {
    id: 'orings',
    tag: 'Elastomer Engineering',
    title: `O-Rings & Rings in
Every Material`,
    description:
      'NBR, Viton, Silicone and EPDM O-rings, X-rings, V-rings, backup rings and O-ring cord — standard and non-standard sizes.',
    badge: 'Standard & Custom Sizes',
    image: '/images/slide-2.png',
  },
  {
    id: 'moulded-pu',
    tag: 'Sister Company of Crown Rubber Works',
    title: `Moulded Rubber &
Polyurethane Products`,
    description:
      'Custom moulded rubber parts, gaskets, diaphragms and a complete polyurethane range for industrial, mining and material-handling applications.',
    badge: 'In-House R&D & Compounding',
    image: '/images/slide-3.png',
  },
] as const

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Products', id: 'products' },
  { label: 'About Us', id: 'about' },
  { label: 'Quality & Certifications', id: 'certifications' },
  { label: 'Industries', id: 'industries' },
  { label: 'Blogs', id: 'blogs' },
  { label: 'Contact Us', id: 'contact' },
] as const

export const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015 Certified',
    icon: 'ShieldCheck',
    number: 'CCPL/QMS/D1131',
    summary:
      'Quality management system certification covering manufacturing and supply of hydraulic, pneumatic seals, oil seals, PU products and moulded rubber products.',
    details: [
      ['Certificate Number', 'CCPL/QMS/D1131'],
      ['Issued On', '22 May 2026'],
      ['Valid Until', '21 May 2029'],
      ['1st Surveillance Due', '22 April 2027'],
      ['2nd Surveillance Due', '22 April 2028'],
      ['Certifying Body', 'Care Certification Private Limited (CCPL), New Delhi'],
      ['Accreditation', 'IAF — EGAC Accredited, CAB #012308'],
      ['IAF Code', '14'],
      [
        'Scope',
        'Manufacturing & Supply of Hydraulic, Pneumatic Seals, Oil Seals, PU Products & Moulded Rubber Products',
      ],
    ],
    downloadLabel: 'Download ISO 9001:2015 Certificate (PDF)',
    file: '/certificates/iso-9001-certificate.pdf',
    preview: '/images/iso-9001-preview.png',
  },
  {
    id: 'iec',
    title: 'Importer-Exporter Code (IEC)',
    icon: 'Globe',
    number: 'AAMCC7518G',
    summary:
      'Registered with the DGFT, Government of India — authorising CR Rubber and Seals Pvt. Ltd. for international import and export operations.',
    details: [
      ['IEC Number', 'AAMCC7518G'],
      ['Date of Issue', '14 January 2026'],
      ['Issuing Authority', 'DGFT — Additional Director General of Foreign Trade, Mumbai'],
      ['PAN', 'AAMCC7518G'],
      [
        'Registered Address',
        'Shed W 10, TTC Industrial Area, Pawane MIDC, Navi Mumbai, Thane, Maharashtra — 400705',
      ],
      ['Signatory', 'Mohammad Anis Ansari, Director'],
    ],
    downloadLabel: 'Download IEC Certificate (PDF)',
    file: '/certificates/iec-certificate.pdf',
    preview: '/images/iec-preview.png',
  },
  {
    id: 'gst',
    title: 'GST Registration',
    icon: 'FileCheck2',
    number: '27AAMCC7518G1ZF',
    summary:
      'Regular GST registration for CR Rubber and Seals Private Limited under the jurisdiction of Mumbai, Maharashtra.',
    details: [
      ['GSTIN', '27AAMCC7518G1ZF'],
      ['Registration Type', 'Regular'],
      ['Period of Validity', '02/06/2025 — Not Applicable'],
      [
        'Principal Place of Business',
        'Shed W 10, TTC Industrial Area, Pawane MIDC Road, Navi Mumbai — 400705',
      ],
      ['Approving Officer', 'Rekha Arun Sitap, Superintendent, Mumbai'],
    ],
    downloadLabel: 'Download GST Certificate (PDF)',
    file: '/certificates/gst-certificate.pdf',
    preview: '/images/gst-preview.png',
  },
  {
    id: 'fieo',
    title: 'FIEO Export Registration',
    icon: 'Globe',
    number: 'RCMC/FIEO/16904/2026-2027',
    summary:
      'Federation of Indian Exporters Organisation (FIEO) membership certificate recognizing CR Rubber and Seals as a Merchant Cum Manufacturer Exporter under the Foreign Trade Policy of Government of India.',
    details: [
      ['Registration Number', 'RCMC/FIEO/16904/2026-2027'],
      ['Registered As', 'Merchant Cum Manufacturer Exporter'],
      ['IEC Number', 'AAMCC7518G'],
      ['Valid Until', '31/03/2027'],
      ['Issue Date', '24/05/2026'],
      [
        'Registered Products',
        'Industrial rubber, polyurethane products, hydraulic & pneumatic seals, custom molded rubber components',
      ],
    ],
    downloadLabel: 'Download FIEO Certificate (PDF)',
    file: '/certificates/fieo-certificate.pdf',
    preview: '/images/fieo-preview.png',
  },
  {
    id: 'udyam',
    title: 'Udyam Registration (MSME)',
    icon: 'Award',
    number: 'UDYAM-MH-33-0776310',
    summary:
      'Udyam Registration Certificate recognizing CR Rubber and Seals as a Micro Enterprise under the MSME scheme of the Government of India, classified under manufacturing of rubber products.',
    details: [
      ['Udyam Registration Number', 'UDYAM-MH-33-0776310'],
      ['Enterprise Type', 'Micro Enterprise'],
      ['Major Activity', 'Manufacturing'],
      ['Registration Date', '23/05/2026'],
      ['NIC Code', '22199 - Manufacture of other rubber products n.e.c.'],
      ['Address', 'Shed W 10, TTC Industrial Area, Pawane MIDC, Turbhe, Navi Mumbai - 400705'],
    ],
    downloadLabel: 'Download Udyam Certificate (PDF)',
    file: '/certificates/udyam-certificate.pdf',
    preview: '/images/udyam-preview.png',
  },
] as const

export const timeline = [
  {
    year: '1995',
    title: 'Crown Rubber Works Founded',
    description:
      'Crown Rubber Works founded in Navi Mumbai by Mr. Mohammad Anis Ansari. Began manufacturing hydraulic and rubber seals for Indian industry.',
  },
  {
    year: '2000s',
    title: 'CNC Capability & Export',
    description:
      'Crown Rubber Works expanded into CNC seal manufacturing and international export. Began supplying Gulf countries, Singapore and Sri Lanka.',
  },
  {
    year: '2025',
    title: 'CR Rubber and Seals Pvt. Ltd. Established',
    description:
      'CR Rubber and Seals Private Limited established as the sister company of Crown Rubber Works. Both entities operate from the same facility at Pawane MIDC, Navi Mumbai. GST registration active since June 2025.',
  },
  {
    year: '2026',
    title: 'ISO & IEC Certification',
    description:
      'CR Rubber and Seals Pvt. Ltd. receives ISO 9001:2015 certification (CCPL/QMS/D1131, valid to 21 May 2029) and IEC registration (AAMCC7518G).',
  },
] as const

export const industries = [
  {
    id: 'hydraulic',
    name: 'Hydraulic Industry',
    iconName: 'Gauge',
    description:
      'Hydraulic systems demand seals with exceptional pressure resistance and precise tolerancing. Our piston seals, rod seals, wiper seals and guide rings are engineered for pressures up to 700 bar, with materials ranging from NBR to PTFE to FKM for every fluid compatibility requirement.',
    keyProducts: [
      'Piston Seals',
      'Rod Seals',
      'Wiper / Dust Seals',
      'Guide Rings',
      'Seal Kits for all major OEMs',
    ],
  },
  {
    id: 'construction',
    name: 'Construction & Earthmoving',
    iconName: 'HardHat',
    description:
      'Construction and earthmoving equipment operate in harsh, contaminated environments. Our seal kits for BEML, Komatsu, L&T, Caterpillar and TATA excavators are directly interchangeable with OEM components, ensuring fast maintenance turnaround on site.',
    keyProducts: [
      'Rock Breaker Seal Kits',
      'Pump Seal Kits (all excavator brands)',
      'Hydraulic Cylinder Seals',
      'Wiper / Dust Seals',
      'Custom O-rings & Backup Rings',
    ],
  },
  {
    id: 'mining',
    name: 'Mining Industry',
    iconName: 'Pickaxe',
    description:
      'Mining applications require the toughest sealing solutions. We manufacture TBM seals up to 7500mm diameter for tunnel boring machines, PU mining screens for ore separation, and hydrocyclone components — serving India\u2019s underground and surface mining sector.',
    keyProducts: [
      'TBM Seals up to 7500mm OD',
      'PU Mining Screens',
      'Hydrocyclone Separators',
      'Large Diameter Machined Seals',
      'Mud Pump Seals for drilling',
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas Industry',
    iconName: 'Fuel',
    description:
      'Oil and gas operations demand seals that withstand extreme pressures, temperatures and chemical exposure. Our Viton (FKM) and PTFE range provides superior chemical resistance, while our mud pump seals handle the toughest drilling environments.',
    keyProducts: [
      'Viton / FKM O-Rings & Seals',
      'Mud Pump Seals (PU/Rubber/Cast Iron)',
      'High-Pressure Hydraulic Seals (up to 700 bar)',
      'PTFE Products',
      'X-Rings (Quad Rings) for static/dynamic sealing',
    ],
  },
  {
    id: 'power-steel-cement',
    name: 'Power, Steel & Cement Plants',
    iconName: 'Factory',
    description:
      'Heavy industrial plant environments combine high temperatures, chemical exposure and continuous duty cycles. Our fabric oil seals, high-temperature Viton seals and PU products are specified for rotating equipment, conveyor systems and hydraulic machinery.',
    keyProducts: [
      'Fabric Oil Seals',
      'PU Scrapers for conveyor belts',
      'High-Temperature Viton Seals',
      'V-Rings for rotating equipment',
      'Custom Moulded Rubber Parts',
    ],
  },
  {
    id: 'agriculture-rail',
    name: 'Agriculture & Ship Building / Railway',
    iconName: 'Sprout',
    description:
      'Agricultural equipment and railway/shipbuilding applications demand reliable, long-life sealing. Our standard O-ring kits, oil seals and custom moulded rubber parts are trusted for these sectors.',
    keyProducts: [
      'Oil Seals',
      'O-Ring Kits & Boxes',
      'V-Rings for shaft sealing',
      'Custom Moulded Rubber Parts',
      'Rubber Pipe Saddles',
    ],
  },
] as const

export const products = [
  {
    id: 'machined-seals',
    title: 'Machined Seals',
    category: 'Machined Seals',
    image: '/images/machined-seals.png',
    tagline: 'CNC-machined custom seals — no tooling cost, no MOQ.',
    description:
      'One of our flagship capabilities — precision CNC-machined sealing solutions for the most demanding applications, with no tooling cost and no minimum order requirement.',
    features: [
      'Customised Machined Seals — CNC machined up to 1500mm OD, 500+ instant profiles, any material',
      'Large Diameter Seals — up to 7500mm for Tunnel Boring Machines (TBM)',
      'Meander Spring Seals — U-Spring and V-Spring profiles, weld-free micro spring seals',
      'Helical Spring Seals — stainless steel, standard and custom profiles',
      'One Hour Seal Factory — express delivery, no MOQ, no tooling cost',
      'And more custom profiles on request',
    ],
  },
  {
    id: 'seal-kits',
    title: 'Seal Kits',
    category: 'Seal Kits',
    image: '/images/seal-kits.png',
    tagline: 'OEM-interchangeable kits for construction, mining & excavation.',
    description:
      'Complete seal kits directly interchangeable with OEM components for all major construction, mining and excavation equipment brands — ensuring fast maintenance turnaround on site.',
    features: [
      'Rock Breaker Seal Kits — for hammers, breakers and construction equipment',
      'Pump Seal Kits — compatible with BEML, Komatsu, L&T, Caterpillar, TATA and all major brands',
      'TBM Seal Kits — complete seal kits for Tunnel Boring Machines',
      'Pneumatic Seal Kits — reliable sealing for pneumatic applications',
      'And more seal kit configurations for all equipment types',
    ],
  },
  {
    id: 'o-rings',
    title: 'O-Rings',
    category: 'O-Rings',
    image: '/images/o-rings.png',
    tagline: 'Any elastomer, any size — standard and non-standard.',
    description:
      'O-rings in any elastomeric material to any customer specification — standard and non-standard sizes, in all major ring profiles for static and dynamic sealing applications.',
    features: [
      'NBR O-Rings — oil-resistant, widely used across hydraulic and pneumatic applications',
      'Viton (FKM) O-Rings — excellent chemical resistance, temperature range -15°C to 200°C',
      'X-Rings (Quad Rings) — 4-lobe configuration for superior static and dynamic sealing',
      'V-Rings — Forsheda-type, FKM Viton & Nitrile, ideal as dust slingers',
      'Backup Rings — prevent O-ring extrusion under high pressure',
      'O-Ring Boxes, Kits and Cord — and more sizes, materials and profiles on request',
    ],
  },
  {
    id: 'hydraulic-seals',
    title: 'Hydraulic Seals',
    category: 'Hydraulic Seals',
    image: '/images/hydraulic-seals.png',
    tagline: '50+ profiles, pressures up to 700 bar.',
    description:
      'Our hydraulic seals cover every position in a hydraulic cylinder — piston, rod, wiper and guide — available in 50+ standard profiles across all materials and pressures up to 700 bar.',
    features: [
      'Piston Seals — 30+ profiles in PU, NBR, FPM, PTFE, pressure up to 700 bar',
      'Rod Seals — 20+ profiles including fabric-reinforced options for extreme conditions',
      'Wiper / Dust Seals — prevents contamination from entering cylinder assemblies',
      'Guide Rings — POM, PTFE and Polyester Fabric for lateral support',
      'And more profiles and material combinations available on request',
    ],
  },
  {
    id: 'pneumatic-seals',
    title: 'Pneumatic Seals',
    category: 'Pneumatic Seals',
    image: '/images/pneumatic-seals.png',
    tagline: 'Rotary shaft oil seals, fabric oil seals & V-rings.',
    description:
      'Covers rotary shaft oil seals, fabric oil seals and V-rings for high-speed, contamination-sensitive and heavy-duty rotating shaft applications across all industries.',
    features: [
      'Oil Seals — standard, open-type, closed-type, heavy duty and dual-lip variants',
      'Fabric Oil Seals — for vehicles, conveyor rollers, electric motors and vacuum pumps',
      'V-Rings (CVA, CVS, CVE, CVL) — all-rubber axial seals, excellent dust slingers',
      'Pneumatic Cylinder Seals — PU, NBR and FPM for all pneumatic applications',
      'More variants for all shaft sizes and operating conditions',
    ],
  },
  {
    id: 'moulded-rubber',
    title: 'Moulded Rubber Parts',
    category: 'Moulded Rubber',
    image: '/images/moulded-rubber-parts.png',
    tagline: 'Custom compression-moulded components to exact spec.',
    description:
      'With in-house rubber compounding and CNC mould manufacturing, we produce custom moulded rubber components to exact client specifications — from simple gaskets to complex multi-insert mouldings.',
    features: [
      'Custom Moulded Rubber Parts — compression moulding in natural rubber, any hardness and size',
      'Rubber Gaskets — flat gaskets in NBR/natural rubber, 40–90 Shore A',
      'Rubber Diaphragms — for engineering and automotive applications',
      'Rubber Mouldings — using single/multiple inserts and lamination packs',
      'Rubber Pipe Saddles — in NBR and EPDM',
      'Diffuser Plates and more custom profiles on request',
    ],
  },
  {
    id: 'teflon-nylon',
    title: 'Teflon & Nylon',
    category: 'Teflon & Nylon',
    tagline: 'High-performance engineering materials.',
    description:
      'High-performance engineering materials for applications requiring superior chemical resistance, low friction and dimensional stability at extreme temperatures.',
    features: [
      'Teflon (PTFE) Rods and Sheets — smooth finish, corrosion resistant, per global standards',
      'Nylon Rods — sturdy construction, low friction, for engineering applications',
      'Teflon & Plastic Products — sealing components in Teflon and engineering plastics',
      'And more profiles, sizes and custom specifications on request',
    ],
  },
  {
    id: 'polyurethane',
    title: 'Polyurethane Products',
    category: 'Polyurethane',
    tagline: 'Custom hardness, colour, size and shape.',
    description:
      'Our comprehensive polyurethane range serves industrial, mining, automotive and material handling applications — available in custom hardness, colour, size and shape to meet exact requirements.',
    features: [
      'PU Seals — for hydraulic machines, any size, any model',
      'PU Rollers, Wheels and Rods — 0–600mm, cast iron core, multiple colours',
      'PU Blocks, Sheets, Pads and Damping Pads — hardness 20–80 Shore A',
      'PU Bushes, Couplings and Scrapers — for automotive and conveyor applications',
      'PU Mining Screens, Hydrocyclone and Mud Pump Seals — for mining and oil & gas',
      'PU Sleeves, PU Rods — and more products on request',
    ],
  },
] as const

export const blogPosts = [{id:"1",title:"Elastomer Selection Guide: Navigating Compound Engineering",slug:"elastomer-selection-guide-navigating-compound-engineering",excerpt:"Selecting the correct rubber compound is crucial for high-pressure industrial sealing. Learn when to choose Viton, NBR, EPDM, or Polyurethane.",content:`
# Elastomer Selection Guide: Navigating Compound Engineering

In industrial sealing, specifying the correct elastomer compound is the difference between seamless machine operations and catastrophic system failure. When designing seals, engineers must evaluate chemical exposure, thermal limits, mechanical loads, and pressure spikes. 

Below, we break down the four most critical compounds utilized in modern sealing applications:

---

## 1. NBR (Nitrile Butadiene Rubber)
Nitrile is the workhorse of the seal industry. Offering excellent resistance to petroleum-based oils, water, and hydraulic fluids, it is the primary choice for standard cylinders.
* **Temperature Range:** -30°C to +100°C
* **Best Used For:** General purpose hydraulic seals, oil gaskets.
* **Limitations:** Poor resistance to ozone, weathering, and polar solvents.

## 2. FKM / Viton (Fluorocarbon Elastomers)
When systems run hot or encounter aggressive chemicals, FKM is the premier choice. Sourced from global suppliers, it maintains sealing integrity under severe conditions.
* **Temperature Range:** -20°C to +200°C (spikes to +250°C)
* **Best Used For:** Chemical processing pumps, aerospace engines, high-temp hydraulic machinery.
* **Limitations:** Vulnerable to low-molecular-weight organic acids and steam.

## 3. EPDM (Ethylene Propylene Diene Monomer)
EPDM provides outstanding resistance to ozone, sunlight, water, and steam. It is ideal for outdoor applications and hot-water environments.
* **Temperature Range:** -50°C to +150°C
* **Best Used For:** Outdoor enclosures, steam lines, automotive coolant hoses.
* **Limitations:** Absolutely no compatibility with petroleum oils, greases, or fuels.

## 4. PU (Polyurethane)
PU is highly prized for its mechanical strength, abrasion resistance, and outstanding tensile properties. In CNC-machined custom seals, PU block components offer zero tool-cost capabilities.
* **Temperature Range:** -30°C to +90°C
* **Best Used For:** High-pressure hydraulic cylinders, scrapers, wear rings.
* **Limitations:** High susceptibility to water hydrolysis at elevated temperatures.

---

## Technical Summary
* **High Chemical Exposure:** Use **FKM / Viton**
* **Mechanical Shock / Wear:** Use **Polyurethane (PU)**
* **Steam & Weathering:** Use **EPDM**
* **Standard Hydraulic Oil:** Use **Nitrile (NBR)**

Selecting the correct compound extends seal lifespan, reduces machine downtime, and optimizes system efficiency. Contact our engineering desk at CR Rubber and Seals for custom compound formulations.
`,publishedAt:"May 28, 2026",readTime:"5 min read",category:"Engineering Research",author:"Mr. Anis Ansari"},{id:"2",title:"Unlocking Efficiency with CNC Custom Machined Seals",slug:"unlocking-efficiency-with-cnc-custom-machined-seals",excerpt:"How CNC seal manufacturing enables custom seals in under 1 hour with zero tooling costs and no minimum order quantity (MOQ).",content:`
# Unlocking Efficiency with CNC Custom Machined Seals

Historically, custom rubber seals required designing and casting a dedicated metal compression mold. This process frequently took weeks and cost thousands of dollars, making prototyping or small-batch runs prohibitively expensive.

Today, CNC-machined seal technology has revolutionized custom seal manufacturing. 

---

## The CNC Manufacturing Process
Instead of compression molding, CNC seals are manufactured by carving profiles directly from high-density semi-finished elastomer billets. 

\`\`\`
[Billet Raw Material] ➔ [CNC Lathe Programming] ➔ [Precision Machined Seal Profile]
\`\`\`

At CR Rubber and Seals, our in-house CNC toolroom enables us to produce customized seals to exact dimensional tolerances in under an hour.

---

## Critical Benefits of CNC Seals

1. **Zero Tooling Cost**
   Since no metal molds are fabricated, there are zero upfront tool development costs. You pay only for the raw material and machining time.

2. **No Minimum Order Quantity (MOQ)**
   Whether you need a single custom-sized rod wiper for a breakdown machine or a batch of 500 rings for an OEM assembly, CNC manufacturing scales seamlessly. We produce 1 unit or 1,000 units with the same efficiency.

3. **Rapid Breakdown Turnaround**
   In critical plant breakdowns, every hour of idle machinery costs money. We can manufacture and ship a custom CNC seal to your site on the same day.

4. **Extreme Precision**
   CNC lathes machine profiles to **ISO 3302-1 Class M1** tolerances, offering accuracy that traditional compression molding struggles to achieve consistently.

---

## When to Choose CNC Machining
* **Emergency Breakdowns:** When an old, obsolete seal fails and must be replaced immediately.
* **Custom Dimensions:** When rebuilding machinery that has been re-bored to non-standard dimensions.
* **Prototyping:** Testing new cylinder designs before committing to expensive production molds.
`,publishedAt:"May 15, 2026",readTime:"4 min read",category:"Manufacturing Technology",author:"Engineering Desk"},{id:"3",title:"Understanding ISO 3302-1 Tolerances in Rubber Manufacturing",slug:"understanding-iso-3302-1-tolerances-in-rubber-manufacturing",excerpt:"A deep-dive into the ISO 3302-1 dimensional tolerance standard, detailing M1, M2, and M3 classes for precision molded and extruded rubber.",content:`
# Understanding ISO 3302-1 Tolerances in Rubber Manufacturing

Unlike metal components, rubber parts are flexible, compress under force, and expand or contract based on compound formulation, curing temperature, and humidity. As a result, standard steel tolerances cannot be applied to elastomeric parts.

To standardize rubber tolerances, the International Organization for Standardization developed **ISO 3302-1**.

---

## Dimensional Tolerance Classes
ISO 3302-1 divides molded rubber products into four tolerance classes, from the tightest precision to general commercial grades:

* **Class M1 (Precision):** Reserved for technical applications where dimensions are critical. Requires premium raw materials, in-house tooling, and precise environment control during manufacturing. Sourced billets at CR Rubber and Seals are class M1.
* **Class M2 (High Quality):** Standard commercial grade for high-quality engineering components. Suitable for most industrial sealing applications.
* **Class M3 (Good Quality):** Suitable for non-critical applications like protective bumpers or footpads.
* **Class M4 (Non-Critical):** General commercial products where tolerances are irrelevant.

---

## Molded Dimensions Comparison Table (Sample Values)

| Size Range (mm) | Class M1 (± mm) | Class M2 (± mm) | Class M3 (± mm) |
|---|---|---|---|
| 0 to 4.0 | ± 0.08 | ± 0.10 | ± 0.15 |
| 4.0 to 6.3 | ± 0.10 | ± 0.15 | ± 0.20 |
| 6.3 to 10.0 | ± 0.12 | ± 0.20 | ± 0.30 |
| 10.0 to 16.0 | ± 0.15 | ± 0.25 | ± 0.40 |
| 16.0 to 25.0 | ± 0.20 | ± 0.35 | ± 0.50 |
| 25.0 to 40.0 | ± 0.25 | ± 0.45 | ± 0.70 |

---

## Why Class M1 Matters in High-Pressure Systems
In hydraulic systems operating above **350 bar**, a variance of even 0.2mm in seal cross-section can lead to:
1. **Extrusion:** The seal gets pinched in the extrusion gap, causing rapid wear and eventual failure.
2. **Excessive Friction:** Tight dimensions can create heavy mechanical drag, causing overheating and cylinder scoring.
3. **By-pass Leakage:** Under-sized seals fail to pre-load properly, letting fluid bypass the piston.

At CR Rubber and Seals, all CNC custom seals are manufactured to comply strictly with **ISO 3302-1 M1** standards, ensuring bulletproof field operations.
`,publishedAt:"May 02, 2026",readTime:"6 min read",category:"Quality Standards",author:"Quality Inspector"}] as const
