window.SCENARIOS = {
  sub_saharan: {
    name: "Sub-Saharan District Hospital (Queue Crisis)",
    brief: "A 120-bed district hospital in a provincial capital experiencing overwhelming outpatient queues. Patients begin lining up at 4:00 AM, with average registration wait times exceeding 4.5 hours. Outpatient services are bottlenecked by paper-based record retrieval. Staffing levels are at 60% of establishment, causing severe clinician burnout. Inpatient beds are frequently full (94% occupancy) due to delayed discharge processes and slow diagnostic turnarounds.",
    metrics: {
      visits: 350,
      wait: 270,
      beds: 120,
      occupancy: 94,
      staffing: 60,
      his: "none"
    }
  },
  sea_provincial: {
    name: "Southeast Asian Provincial Center (Bed Shortage)",
    brief: "A regional secondary-care hospital with 250 staffed beds facing critical overcrowding. Average bed occupancy stands at 108%, with patients regularly boarding in corridors. Admission and discharge administrative processes are highly fragmented, taking up to 6 hours per patient. Daily outpatient volume is 750 visits, and queue bottlenecks occur at the pharmacy and billing stations rather than registration.",
    metrics: {
      visits: 750,
      wait: 180,
      beds: 250,
      occupancy: 108,
      staffing: 75,
      his: "basic"
    }
  },
  rural_clinic: {
    name: "Resource-Constrained Rural Clinic (Workflow Friction)",
    brief: "A primary care health center serving 45,000 residents. The clinic has only 12 overnight observation beds and is staffed by 2 clinical officers and 3 nurses. Average daily outpatient visits hover around 120. Patient wait times average 3 hours due to a 'first-come, first-served' queuing system with no triage, mixing emergency cases with routine checkups and drug refills. Administrative tasks are completely manual, handled by clinical staff.",
    metrics: {
      visits: 120,
      wait: 180,
      beds: 12,
      occupancy: 85,
      staffing: 50,
      his: "none"
    }
  },
  custom: {
    name: "Custom Situation Brief",
    brief: "Paste your provincial health center or hospital situation details here to customize the operational analysis package...",
    metrics: {
      visits: 200,
      wait: 120,
      beds: 100,
      occupancy: 80,
      staffing: 80,
      his: "basic"
    }
  }
};
window.INTERVENTIONS = [
  {
    id: 1,
    title: "Implement Color-Coded Triage Desk",
    horizon: "Immediate (0-3m)",
    cost: "Negligible",
    objective: "Segregate emergency cases and speed up routing of minor ailments.",
    activities: "Set up physical triage desk at clinic entrance; train nurses on South African Triage Scale (SATS); deploy color cards (Red/Yellow/Green).",
    actor: "Head Nurse & Clinic Manager",
    impact: "Reduces registration-to-treatment wait time for high-urgency patients by 70%.",
    dependencies: "Staff availability for 1-day triage training.",
    risk: "Staff default to 'first-come, first-served' during rush hours.",
    mitigation: "Assign a dedicated, experienced nurse and perform daily spot audits.",
    feasibility: 9,
    impactScore: 8,
    x: 9, y: 8
  },
  {
    id: 2,
    title: "Establish Fast-Track Refill Station",
    horizon: "Immediate (0-3m)",
    cost: "Low",
    objective: "Redirect stable chronic patients away from standard clinician queues.",
    activities: "Define eligibility criteria for stable refills; designate a nursing/pharmacy tech window; pre-pack common chronic medication regimens.",
    actor: "Pharmacy Director & Outpatient Manager",
    impact: "Reduces outpatient wait time by 40% for eligible chronic patients; lowers clinician load.",
    dependencies: "Preloaded stock of standard multi-month chronic blister packs.",
    risk: "Unstable chronic patients bypass clinical review.",
    mitigation: "Rigid screening checklist; limit fast-track status to patients stable for >6 months.",
    feasibility: 8,
    impactScore: 9,
    x: 8, y: 9
  },
  {
    id: 3,
    title: "Staggered Outpatient Scheduling System",
    horizon: "Medium (3-12m)",
    cost: "Low",
    objective: "Smooth out peak morning arrival waves by distributing appointments.",
    activities: "Divide booking slots into hourly bands (e.g., 8-9 AM, 9-10 AM); allocate slots via community workers or SMS; reserve afternoon for walk-ins.",
    actor: "IT Officer & Clinic Admin",
    impact: "Flattens the morning patient arrival spike, reducing peak registration queue lengths by 50%.",
    dependencies: "Basic mobile connectivity; outreach/SMS coordination.",
    risk: "Patients ignore time slots and still arrive at 5:00 AM.",
    mitigation: "Extensive patient messaging; reward compliance with guaranteed 30-minute queue priority.",
    feasibility: 7,
    impactScore: 7,
    x: 7, y: 7
  },
  {
    id: 4,
    title: "Daily Active Bed Management & Board",
    horizon: "Medium (3-12m)",
    cost: "Low",
    objective: "Optimize inpatient discharge and transfer schedules to release beds early.",
    activities: "Install visual dry-erase 'Bed Boards' in wards; initiate multi-disciplinary 'discharge huddles' at 8:00 AM; pre-schedule discharges.",
    actor: "Medical Director & Ward Charge Nurses",
    impact: "Reduces discharge delay bottlenecks, freeing up to 10-15% of bed capacity by midday.",
    dependencies: "Clinical consensus on discharge criteria.",
    risk: "Physicians fail to attend morning huddles.",
    mitigation: "Keep huddles strictly under 10 minutes, held directly inside the central ward corridor.",
    feasibility: 8,
    impactScore: 8,
    x: 8, y: 8
  },
  {
    id: 5,
    title: "Integrated Health Information System (HIS)",
    horizon: "Long-term (12-36m)",
    cost: "High",
    objective: "Eliminate paper record retrieval delays and streamline electronic billing.",
    activities: "Procure modular open-source HIS (e.g., OpenMRS); install local server & LAN network; digitize patient indices; train staff.",
    actor: "Ministry of Health (MOH) & Donor Partners",
    impact: "Saves 3-5 minutes of administration time per patient; provides real-time operational data.",
    dependencies: "Stable electricity grid or solar backup; regional IT support team.",
    risk: "System downtime freezes all clinic activities.",
    mitigation: "Dual-redundant server backup; implement manual paper fallback protocols for outages.",
    feasibility: 3,
    impactScore: 9,
    x: 3, y: 9
  },
  {
    id: 6,
    title: "Infrastructure Expansion (Modular Wards)",
    horizon: "Long-term (12-36m)",
    cost: "High",
    objective: "Resolve physical bed shortages for inpatient and observation services.",
    activities: "Draft expansion plans; secure capital donor funding; construct low-cost prefab or modular wards; recruit additional staff cadres.",
    actor: "Provincial Governor & MOH Procurement",
    impact: "Directly adds bed capacity, lowering occupancy metrics to safe levels (<85%).",
    dependencies: "Budget approval; staffing allocation commitments.",
    risk: "New beds built but sit empty due to lack of trained nurses.",
    mitigation: "Tie infrastructure funding to a synchronized hiring and training pipeline.",
    feasibility: 4,
    impactScore: 9,
    x: 4, y: 9
  }
];
window.KPIS = [
  {
    name: "Average Outpatient Wait Time",
    definition: "Total elapsed time from patient arrival/registration to clinical consultation.",
    source: "Triage/Registration Logs & Clinician Timestamps",
    frequency: "Weekly",
    baseline: (wait) => `${wait} minutes`,
    target: (wait) => `${Math.round(wait * 0.45)} minutes (55% reduction)`
  },
  {
    name: "Peak Outpatient Queue Length",
    definition: "Maximum number of patients waiting in registration queue at 9:00 AM.",
    source: "Hourly queue counts by administrative staff",
    frequency: "Daily",
    baseline: (visits) => `${Math.round(visits * 0.3)} patients`,
    target: (visits) => `${Math.round(visits * 0.1)} patients (66% reduction)`
  },
  {
    name: "Average Bed Occupancy Rate",
    definition: "Daily occupied beds divided by total staffed beds, averaged monthly.",
    source: "Ward census reports collected midnight daily",
    frequency: "Monthly",
    baseline: (visits, beds, occupancy) => `${occupancy}%`,
    target: (visits, beds, occupancy) => occupancy > 85 ? "85% (Target safety threshold)" : `${occupancy}%`
  },
  {
    name: "Discharged Patients Leaving Before 12:00 PM",
    definition: "Percentage of planned daily discharges completed before noon.",
    source: "Ward discharge logs",
    frequency: "Weekly",
    baseline: (visits) => "15%",
    target: (visits) => "65%"
  },
  {
    name: "Triage Compliance Rate",
    definition: "Percentage of arriving outpatients correctly triaged at entry within 10 minutes.",
    source: "Triage desk registers and SATS audits",
    frequency: "Weekly",
    baseline: (visits) => "0% (No triage system)",
    target: (visits) => "95%"
  },
  {
    name: "Staff Burnout / Absenteeism Rate",
    definition: "Percentage of clinical staff shifts missed due to unscheduled sick leave.",
    source: "Human Resources roster database",
    frequency: "Monthly",
    baseline: (visits, beds, occupancy, staffing) => `${Math.round(18 - (staffing / 10))}%`,
    target: (visits, beds, occupancy, staffing) => `${Math.round(6 - (staffing / 25))}%`
  }
];
window.SLIDES = [
  {
    title: "1. Strategic Action Plan: Provincial Healthcare Operations",
    body: "Optimizing patient flow, bed utilization, and administrative bottlenecks across provincial facilities.",
    footer: "Policy & Operational Briefing • Ministry of Health & Donors"
  },
  {
    title: "2. The Challenge: Operational Bottlenecks",
    body: "Unstructured queues (wait times > 4 hours), critical bed shortages (occupancy > 95%), and severe staff burnout are driving down patient satisfaction and clinical safety. Manual administrative registration and slow discharge schedules are primary systemic bottlenecks.",
    footer: "Current-State Diagnosis & Metrics"
  },
  {
    title: "3. Root-Cause Analysis Summary",
    body: "Why are queues so long? Five core dimensions: People (understaffing, multi-tasking); Process (manual patient retrieval, rigid first-come system); Technology (lack of electronic health records); Infrastructure (no physical triage space, bed deficits); Policy (uncoordinated discharge planning).",
    footer: "Systemic Root Causes (Ishikawa Tree)"
  },
  {
    title: "4. Phase 1: Quick Wins (0-3 Months)",
    body: "Establish a color-coded Nurse Triage desk (South African Triage Scale) to route critical cases. Launch a Fast-Track Medication Refill Station for stable chronic patients, reducing daily outpatient loads immediately with negligible capital expenditure.",
    footer: "Prioritized Interventions"
  },
  {
    title: "5. Phase 2: Workflow Redesign (3-12 Months)",
    body: "Introduce a dry-erase Ward Bed Board and mandatory 8:00 AM clinical huddles to speed up discharges. Deploy a staggered hourly appointment system via community health workers to flatten morning arrival queues.",
    footer: "Prioritized Interventions"
  },
  {
    title: "6. Phase 3: Systemic Solutions (12-36 Months)",
    body: "Deploy a modular, open-source Health Information System (HIS) to eliminate paper medical records. Execute modular ward infrastructure expansions tied directly to synchronized provincial staff recruitment pipelines.",
    footer: "Long-term Capital Strategy"
  },
  {
    title: "7. Monitoring, Evaluation & First 30 Days",
    body: "Track 6 key performance indicators including Outpatient Wait Times and Bed Occupancy. Immediate next steps: 1) Appoint the Bed Management lead; 2) Designate the triage desk; 3) Standardize pre-packed chronic blister packs; 4) Launch baseline data logs.",
    footer: "Operational Roadmap & Accountability"
  }
];
