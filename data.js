<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HealthOps - Provincial Health System Operational Optimizer</title>
  <meta name="description" content="Operational efficiency analysis and prioritized interventions for provincial hospitals and clinics experiencing poor administrative services, long patient queues, and bed shortages.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app-container">
    <!-- Sidebar Inputs & Controls -->
    <aside class="sidebar">
      <div class="logo-container">
        <div class="logo-icon">H+</div>
        <div class="logo-text">
          <h1>HealthOps</h1>
          <p>Systems Optimizer</p>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Select Scenario</div>
        <div class="form-group">
          <select id="scenario-selector" class="form-control">
            <option value="sub_saharan" selected>Sub-Saharan District Hospital (Queue Crisis)</option>
            <option value="sea_provincial">Southeast Asian Provincial Center (Bed Shortage)</option>
            <option value="rural_clinic">Resource-Constrained Rural Clinic (Workflow Friction)</option>
            <option value="custom">Custom Situation Brief</option>
          </select>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Situation Brief</div>
        <div class="form-group">
          <textarea id="situation-brief" class="form-control" placeholder="Describe the hospital queues, bed shortage, administrative friction..."></textarea>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Quantitative Metrics</div>
        
        <div class="form-group">
          <label for="metric-visits">Avg Outpatient Visits / Day</label>
          <div class="range-slider">
            <input type="range" id="metric-visits" min="20" max="1500" step="10" value="350">
            <span class="range-value" id="val-visits">350</span>
          </div>
        </div>
        <div class="form-group">
          <label for="metric-wait">Avg Wait Time (mins)</label>
          <div class="range-slider">
            <input type="range" id="metric-wait" min="10" max="600" step="10" value="270">
            <span class="range-value" id="val-wait">270</span>
          </div>
        </div>
        <div class="form-group">
          <label for="metric-beds">Staffed Inpatient Beds</label>
          <div class="range-slider">
            <input type="range" id="metric-beds" min="5" max="500" step="5" value="120">
            <span class="range-value" id="val-beds">120</span>
          </div>
        </div>
        <div class="form-group">
          <label for="metric-occupancy">Bed Occupancy Rate (%)</label>
          <div class="range-slider">
            <input type="range" id="metric-occupancy" min="10" max="150" step="5" value="94">
            <span class="range-value" id="val-occupancy">94%</span>
          </div>
        </div>
        <div class="form-group">
          <label for="metric-staffing">Clinical Staffing Level (%)</label>
          <div class="range-slider">
            <input type="range" id="metric-staffing" min="20" max="100" step="5" value="60">
            <span class="range-value" id="val-staffing">60%</span>
          </div>
        </div>
        <div class="form-group">
          <label for="metric-his">Health Info System (HIS)</label>
          <select id="metric-his" class="form-control">
            <option value="none">None (100% Paper-Based)</option>
            <option value="basic">Basic (Ad-hoc computer files/spreadsheets)</option>
            <option value="integrated">Integrated Electronic Health Record (EHR)</option>
          </select>
        </div>
      </div>
      <div style="margin-top: auto;">
        <button id="btn-recalculate" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          Recalculate Analysis
        </button>
      </div>
    </aside>
    <!-- Main Workspace -->
    <main class="workspace">
      <!-- Header -->
      <header class="workspace-header">
        <div>
          <h2 id="workspace-title" style="font-size: 1.6rem; font-weight: 700;">Operational Improvement Briefing</h2>
          <p id="workspace-subtitle" style="color: var(--text-muted); font-size: 0.85rem;">Interactive Policy & Management Package</p>
        </div>
        <div class="workspace-actions">
          <button id="theme-toggle-btn" class="theme-toggle" title="Toggle Light/Dark Theme">
            <svg id="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
          <button id="btn-export-markdown" class="btn btn-secondary" style="width: auto;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Export Markdown
          </button>
          <button id="btn-print" class="btn btn-primary" style="width: auto;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print Package
          </button>
        </div>
      </header>
      <!-- Navigation Tabs -->
      <div style="background: var(--bg-secondary); padding: 0.5rem 2rem; border-bottom: 1px solid var(--border);">
        <nav class="nav-tabs">
          <button class="nav-tab active" data-tab="diagnosis">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            1. Current State
          </button>
          <button class="nav-tab" data-tab="rootcause">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16v-4M12 8h.01"/></svg>
            2. Root-Cause Analysis
          </button>
          <button class="nav-tab" data-tab="interventions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            3. Prioritized Interventions
          </button>
          <button class="nav-tab" data-tab="roadmap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            4. Gantt Roadmap
          </button>
          <button class="nav-tab" data-tab="me">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            5. M&E Framework
          </button>
          <button class="nav-tab" data-tab="templates">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            6. Operational Templates
          </button>
          <button class="nav-tab" data-tab="comm-risk">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            7. Engagement & Ethics
          </button>
          <button class="nav-tab" data-tab="policy-slides">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            8. Policy Brief & Slides
          </button>
        </nav>
      </div>
      <!-- Workspace Content Panels -->
      <div class="workspace-content">
        
        <!-- Tab 1: Current State Diagnosis -->
        <section id="panel-diagnosis" class="tab-panel active">
          <div class="metrics-grid">
            <div class="glass-card metric-card primary">
              <div class="metric-icon">👥</div>
              <div class="metric-details">
                <span class="metric-label">Outpatient Visits</span>
                <span class="metric-value" id="card-visits">350</span>
                <span class="metric-sub">Patients per day</span>
              </div>
            </div>
            <div class="glass-card metric-card danger">
              <div class="metric-icon">⏳</div>
              <div class="metric-details">
                <span class="metric-label">Registration Wait</span>
                <span class="metric-value" id="card-wait">4.5h</span>
                <span class="metric-sub" id="card-wait-sub">270 minutes avg</span>
              </div>
            </div>
            <div class="glass-card metric-card warning">
              <div class="metric-icon">🛏️</div>
              <div class="metric-details">
                <span class="metric-label">Inpatient Beds</span>
                <span class="metric-value" id="card-beds">120</span>
                <span class="metric-sub" id="card-beds-sub">94% occupancy</span>
              </div>
            </div>
            <div class="glass-card metric-card secondary">
              <div class="metric-icon">🏥</div>
              <div class="metric-details">
                <span class="metric-label">Staffing & HIS</span>
                <span class="metric-value" id="card-staff-his">60%</span>
                <span class="metric-sub" id="card-staff-his-sub">Paper records</span>
              </div>
            </div>
          </div>
          <div class="two-col-grid">
            <div class="glass-card content-block">
              <h2>Executive Summary</h2>
              <div id="exec-summary-content">
                <!-- Dynamic text populated by JS -->
              </div>
              
              <h2 style="margin-top: 2rem;">Current-State Diagnosis</h2>
              <div id="diagnosis-text-content">
                <!-- Dynamic text populated by JS -->
              </div>
            </div>
            <div class="glass-card content-block">
              <h2>Data Needs & Assumptions</h2>
              <p>Essential data required to validate this operational diagnosis:</p>
              <ul class="clean-list" style="padding-left: 0.5rem; list-style-type: none;">
                <li style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                  <strong style="color: var(--primary);">1. Patient Arrival Log</strong><br>
                  <span style="font-size: 0.85rem; color: var(--text-secondary);">Needed to map exact times of arrival versus times of consultation to pinpoint triage bottleneck shapes.</span>
                </li>
                <li style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                  <strong style="color: var(--primary);">2. Record Retrieval Delays</strong><br>
                  <span style="font-size: 0.85rem; color: var(--text-secondary);">Wait time spent specifically at physical filing rooms. Currently assumed to account for 35% of outpatient delays.</span>
                </li>
                <li style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                  <strong style="color: var(--primary);">3. Bed Turnover Interval</strong><br>
                  <span style="font-size: 0.85rem; color: var(--text-secondary);">Hours between bed vacation and new patient occupancy. Assumed at 5.5 hours due to manual cleaning/admissions.</span>
                </li>
                <li style="margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">
                  <strong style="color: var(--primary);">4. Staffing Rosters</strong><br>
                  <span style="font-size: 0.85rem; color: var(--text-secondary);">Actual nurse/physician ratios during peak hours. Assumed severe deficits during morning arrivals.</span>
                </li>
              </ul>
              
              <div class="alert-note" style="margin-top: 1.5rem;">
                <p><strong>Sensitivity Note:</strong> A ±10% shift in outpatient arrivals matches to a ±25% change in average wait times under static staffing levels due to queuing theory exponential curves.</p>
              </div>
            </div>
          </div>
        </section>
        <!-- Tab 2: Root-Cause Analysis -->
        <section id="panel-rootcause" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Root-Cause Analysis (Ishikawa/Fishbone)</h2>
            <p>Click on any rib category to explore the underlying causes of provincial health administrative queues and bed shortages:</p>
            
            <div class="fishbone-container">
              <div class="fishbone">
                <div class="fishbone-spine"></div>
                <div class="fishbone-head">SYSTEMIC QUEUES & BED DEFICITS</div>
                
                <!-- People Rib -->
                <div class="fishbone-rib-top" style="left: 15%;">
                  <span class="fishbone-rib-label">PEOPLE</span>
                  <ul class="fishbone-causes-list">
                    <li>60% staff establishment</li>
                    <li>Physician burnout</li>
                    <li>Nurses handling admin</li>
                  </ul>
                </div>
                
                <!-- Process Rib -->
                <div class="fishbone-rib-top" style="left: 45%;">
                  <span class="fishbone-rib-label">PROCESS</span>
                  <ul class="fishbone-causes-list">
                    <li>First-come queue rule</li>
                    <li>Paper file retrieval</li>
                    <li>Discharges late in day</li>
                  </ul>
                </div>
                <!-- Technology Rib -->
                <div class="fishbone-rib-top" style="left: 75%;">
                  <span class="fishbone-rib-label">TECHNOLOGY</span>
                  <ul class="fishbone-causes-list">
                    <li>Manual index card logs</li>
                    <li>No electronic triage</li>
                    <li>No digital bed board</li>
                  </ul>
                </div>
                <!-- Infrastructure Rib -->
                <div class="fishbone-rib-bottom" style="left: 20%;">
                  <span class="fishbone-rib-label">INFRASTRUCTURE</span>
                  <ul class="fishbone-causes-list">
                    <li>Under-sized waiting area</li>
                    <li>Observation bed shortage</li>
                    <li>No dedicated triage area</li>
                  </ul>
                </div>
                <!-- Policy/Finance Rib -->
                <div class="fishbone-rib-bottom" style="left: 50%;">
                  <span class="fishbone-rib-label">POLICY/FINANCE</span>
                  <ul class="fishbone-causes-list">
                    <li>Centralized hiring delays</li>
                    <li>Budget constraints</li>
                    <li>Rigid bed definitions</li>
                  </ul>
                </div>
                <!-- Community Rib -->
                <div class="fishbone-rib-bottom" style="left: 80%;">
                  <span class="fishbone-rib-label">COMMUNITY</span>
                  <ul class="fishbone-causes-list">
                    <li>Self-referral bypasses</li>
                    <li>Lack of clinic awareness</li>
                    <li>Transportation limits</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 style="margin-top: 2rem;">Causal Chain Analysis (5 Whys)</h2>
            <p>Select a symptom to trace the causal progression down to the root administrative policy failure:</p>
            
            <div class="form-group" style="max-width: 400px; margin-bottom: 1.5rem;">
              <select id="five-whys-select" class="form-control">
                <option value="queues">Symptom A: Patients wait over 4 hours in outpatient queues</option>
                <option value="beds">Symptom B: Inpatient wards are overcrowded with boarded patients</option>
              </select>
            </div>
            <div class="whys-chain" id="whys-chain-container">
              <!-- Dynamically populated steps -->
            </div>
          </div>
        </section>
        <!-- Tab 3: Prioritized Interventions -->
        <section id="panel-interventions" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Prioritized Operational Interventions</h2>
            <p>A structured, evidence-based package of adjustments categorized by implementation timeframe and cost boundaries. Click on any intervention to view details.</p>
            
            <div class="table-responsive">
              <table class="interventions-table">
                <thead>
                  <tr>
                    <th>Timeframe</th>
                    <th>Intervention</th>
                    <th>Cost Category</th>
                    <th>Lead Actor</th>
                    <th>Expected Impact</th>
                  </tr>
                </thead>
                <tbody id="interventions-table-body">
                  <!-- Dynamically populated by JS -->
                </tbody>
              </table>
            </div>
            <div style="margin-top: 2.5rem;">
              <h2>Prioritization Matrix (Impact vs Feasibility)</h2>
              <p>The 2D chart below plots interventions based on their projected implementation feasibility (X-axis) and clinical/operational impact (Y-axis). Quick wins fall in the top-right quadrant.</p>
              
              <div class="matrix-container">
                <div class="matrix-chart-wrapper">
                  <div class="matrix-chart">
                    <div class="matrix-quadrant quad-top-left">High Impact / Hard</div>
                    <div class="matrix-quadrant quad-top-right">Quick Wins (High/Easy)</div>
                    <div class="matrix-quadrant quad-bottom-left">Low Priority (Low/Hard)</div>
                    <div class="matrix-quadrant quad-bottom-right">Fill-ins (Low/Easy)</div>
                    
                    <span class="matrix-axis-label-x">FEASIBILITY →</span>
                    <span class="matrix-axis-label-y">← OPERATIONAL IMPACT</span>
                    
                    <div id="matrix-points-container">
                      <!-- Dynamic matrix dots -->
                    </div>
                  </div>
                </div>
                <div class="matrix-legend-card">
                  <h3 style="margin-top:0; margin-bottom:1rem;">Intervention Details</h3>
                  <div id="matrix-details-box">
                    <p style="color: var(--text-muted); font-size: 0.9rem;">Click on a point on the grid or an item in the interventions table to review detail audits, resource implications, and mitigations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Tab 4: Gantt Roadmap -->
        <section id="panel-roadmap" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Implementation Roadmap (12-Month Gantt)</h2>
            <p>Milestones, quarter timelines, and immediate operational targets for the lead committees:</p>
            
            <div class="gantt-chart">
              <div class="gantt-header">
                <div class="gantt-header-cell">Intervention Task</div>
                <div class="gantt-header-cell">Q1 (Months 1-3)</div>
                <div class="gantt-header-cell">Q2 (Months 4-6)</div>
                <div class="gantt-header-cell">Q3 (Months 7-9)</div>
                <div class="gantt-header-cell">Q4 (Months 10-12)</div>
              </div>
              
              <div class="gantt-row">
                <div class="gantt-label-cell">Establish Triage Desk</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-1">Triage Protocol setup & staff training</div>
                </div>
              </div>
              <div class="gantt-row">
                <div class="gantt-label-cell">Fast-Track Medication Station</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-1" style="left:10%; width:20%;">Pack preparation & desk startup</div>
                </div>
              </div>
              <div class="gantt-row">
                <div class="gantt-label-cell">Staggered Clinic Appointments</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-2">SMS testing & booking pilot</div>
                </div>
              </div>
              <div class="gantt-row">
                <div class="gantt-label-cell">Daily Ward Bed Boards & Huddles</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-2" style="left:30%; width:30%;">Establish bed captain & dry boards</div>
                </div>
              </div>
              <div class="gantt-row">
                <div class="gantt-label-cell">EHR / HIS Integration</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-3">Procurement, server setup, pilot launch</div>
                </div>
              </div>
              <div class="gantt-row">
                <div class="gantt-label-cell">Prefab Ward Infrastructure</div>
                <div class="gantt-bar-cell">
                  <div class="gantt-bar gantt-bar-4">Civil bidding, building, staffing pipeline</div>
                </div>
              </div>
            </div>
            <div class="two-col-grid" style="margin-top: 2rem;">
              <div>
                <h3>Key Milestones</h3>
                <ul>
                  <li><strong>Month 1:</strong> Dedicated triage nurse appointed and color routing begins.</li>
                  <li><strong>Month 3:</strong> Chronic patients on fast-track refills achieve average wait times <30 minutes.</li>
                  <li><strong>Month 6:</strong> Ward morning discharge rate before noon rises above 50% using ward boards.</li>
                  <li><strong>Month 12:</strong> Digital registration indexing pilot launched, replacing paper folders for new visits.</li>
                </ul>
              </div>
              <div>
                <h3>Roster Adjustments</h3>
                <p>Shift structures must align to arrival rates:</p>
                <ul class="clean-list">
                  <li><strong>Overlapping Shift (07:30 - 15:30):</strong> Reallocate 2 nurses to outpatient registration desk for morning queues.</li>
                  <li><strong>Bed Captain Role:</strong> Appoint 1 senior nurse per shift as ward dispatcher, checking bed status every 4 hours.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- Tab 5: M&E Framework -->
        <section id="panel-me" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Monitoring & Evaluation Framework</h2>
            <p>The tracking parameters below are calculated dynamically based on your current input metrics to outline realistic improvement targets:</p>
            
            <div class="kpi-grid" id="kpi-grid-container">
              <!-- Dynamically populated by JS -->
            </div>
            <h2 style="margin-top: 2.5rem;">Budgeting & Resourcing Guidance</h2>
            <div class="two-col-grid">
              <div>
                <h3>Capital (Capex) vs Operational (Opex)</h3>
                <table class="interventions-table">
                  <thead>
                    <tr>
                      <th>Expenditure Item</th>
                      <th>Category</th>
                      <th>Funding Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Triage setup & color cards</td>
                      <td>Negligible Opex</td>
                      <td>Hospital internal buffer</td>
                    </tr>
                    <tr>
                      <td>Chronic fast-track packing</td>
                      <td>Low Opex (pre-packs)</td>
                      <td>MOH pharmacy reallocation</td>
                    </tr>
                    <tr>
                      <td>Ward Dry-Erase Boards</td>
                      <td>Negligible Capex</td>
                      <td>Hospital maintenance budget</td>
                    </tr>
                    <tr>
                      <td>Server hardware / LAN lines</td>
                      <td>Medium Capex</td>
                      <td>Bilateral Donor Tech Grants</td>
                    </tr>
                    <tr>
                      <td>Modular/Prefab Wards</td>
                      <td>High Capex</td>
                      <td>PPP Infrastructure Bonds / Donors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>Cost-Saving Trade-offs</h3>
                <ul>
                  <li><strong>Alternative to full EHR:</strong> Digitizing index cards only (using simple spreadsheet database) reduces initial IT cost by 85% while resolving search bottleneck.</li>
                  <li><strong>Alternative to prefab ward building:</strong> Converting under-utilized administrative offices or file archives (once digitized) into clinical observation bays saves 90% of construction cost.</li>
                  <li><strong>Task-shifting:</strong> Training community health workers (CHWs) to pack prescription packages under pharmacist supervision, rather than recruiting full pharmacists.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <!-- Tab 6: Operational Templates -->
        <section id="panel-templates" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Operational Templates & Simulation Tools</h2>
            <p>Access functional frameworks ready to download, print, or test. Click on tabs to switch tools:</p>
            <div class="template-picker">
              <button class="template-tab active" data-tmpl="triage">Triage Protocol Checklist</button>
              <button class="template-tab" data-tmpl="fasttrack">Fast-Track Eligibility</button>
              <button class="template-tab" data-tmpl="bedboard">Bed Allocation Board & Sim</button>
              <button class="template-tab" data-tmpl="dailyflow">Daily Patient Flow Report</button>
            </div>
            <div class="template-content" id="template-dynamic-container">
              <!-- Populated by JS -->
            </div>
          </div>
        </section>
        <!-- Tab 7: Communication & Risk -->
        <section id="panel-comm-risk" class="tab-panel">
          <div class="glass-card content-block">
            <h2>Communications & Stakeholder Engagement Plan</h2>
            <p>A change management campaign is essential to support operational reorganizations. Key messages by audience groups:</p>
            
            <div class="two-col-grid">
              <div>
                <h3>Target Messaging Cards</h3>
                <div style="display:flex; flex-direction:column; gap:1rem; margin-top:1rem;">
                  <div class="alert-note" style="margin-bottom:0;">
                    <strong style="color:var(--primary);">For Patients:</strong>
                    <p style="font-size:0.85rem; margin-top:0.25rem;">"We are sorting patients by illness urgency, not arrival time. A triage color code ensures that severe cases receive treatment immediately. Stable prescription updates have a fast-track line."</p>
                  </div>
                  <div class="alert-note" style="margin-bottom:0; border-left-color: var(--secondary); background: var(--secondary-light);">
                    <strong style="color:var(--secondary);">For Clinical Staff:</strong>
                    <p style="font-size:0.85rem; margin-top:0.25rem;">"Triage reduces outpatient workload pressure. Bed Boards and morning discharges help release patient pressure earlier in the shift, reducing your overtime and clinical burnout."</p>
                  </div>
                  <div class="alert-note" style="margin-bottom:0; border-left-color: var(--accent); background: var(--accent-light);">
                    <strong style="color:var(--accent);">For Ministry & Donors:</strong>
                    <p style="font-size:0.85rem; margin-top:0.25rem;">"This low-cost operational redesign optimizes clinical flow and bed use. Directing funds to queue triage and bed management saves 30% on emergency hospital transfers."</p>
                  </div>
                </div>
              </div>
              <div>
                <h3>Recommended Channels & Timing</h3>
                <ul>
                  <li><strong>Patient flyers & flyers (Week 1-4):</strong> Display color-coded posters in regional clinics and hospital entry halls.</li>
                  <li><strong>Local Radio / Community Townhalls (Month 1):</strong> Explain staggered booking slots to prevent morning 4:00 AM crowds.</li>
                  <li><strong>Weekly Ward Huddles (On-going):</strong> 5-minute meetings to maintain triage alignment and bed management.</li>
                </ul>
              </div>
            </div>
            <h2 style="margin-top: 2.5rem;">Pilot Design & Scale-up Considerations</h2>
            <div class="two-col-grid">
              <div>
                <h3>3-6 Month Pilot Outline</h3>
                <p>Implement the package initially in <strong>1 Regional Hospital</strong> and <strong>2 linked Clinics</strong>:</p>
                <ul>
                  <li><strong>Objectives:</strong> Reduce registration wait times by 40%; increase pre-noon discharges to >40%.</li>
                  <li><strong>Sample Size / Coverage:</strong> Monitor ~1,200 outpatient visits and 300 inpatient admissions weekly.</li>
                  <li><strong>Data Collection:</strong> Carbon-copy triage logbooks; manual timestamps at registration, clinician entry, and checkout.</li>
                </ul>
              </div>
              <div>
                <h3>Scale-Up Governance Criteria</h3>
                <ul>
                  <li><strong>Success Thresholds:</strong> Pilot hospital achieves wait time < 90 mins and average occupancy < 88% for 3 consecutive weeks.</li>
                  <li><strong>Phasing Schedule:</strong> Month 4 scale-up to 4 additional district clinics; Month 9 full provincial integration.</li>
                  <li><strong>Governance Reforms:</strong> Establish a permanent Provincial Bed Management Board. Relocalize emergency budget adjustments to clinic directors.</li>
                </ul>
              </div>
            </div>
            <h2 style="margin-top: 2.5rem;">Risks, Ethics & Equity Protections</h2>
            <p>Mitigation strategies for vulnerable or marginalized populations:</p>
            <table class="interventions-table">
              <thead>
                <tr>
                  <th>Vulnerable Group</th>
                  <th>Identified Operational Risk</th>
                  <th>Equitable Mitigation Measure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Non-literate patients</td>
                  <td>Unable to read triage cards or queue instructions</td>
                  <td>Use clear physical icons/colors and auditory announcements</td>
                </tr>
                <tr>
                  <td>Marginalized rural communities</td>
                  <td>Bypassed by digital SMS booking due to no cell signal</td>
                  <td>Reserve 35% of daily slots for manual, phone-free walk-ins</td>
                </tr>
                <tr>
                  <td>Elderly or disabled patients</td>
                  <td>Assigned 'Green' (non-urgent) but cannot stand in queues</td>
                  <td>Provide dedicated priority seating and volunteer support staff</td>
                </tr>
                <tr>
                  <td>Vulnerable low-income patients</td>
                  <td>Denied access due to strict user-fees or rules</td>
                  <td>Mandate explicit, automatic poverty waivers and exemptions</td>
                </tr>
              </tbody>
            </table>
            <h2 style="margin-top: 2.5rem;">References & Proven Case Studies</h2>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">Proven operational evidence from comparable resource-constrained settings:</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1.25rem; color: var(--text-secondary);">
              <li style="margin-bottom:0.75rem;"><strong>1. South African Triage Scale (SATS) Implementation:</strong> Multi-center study in Western Cape public clinics demonstrated that implementing SATS nurse triage cards reduced emergency outpatient wait times by 50% and lowered mortality rates for high-risk triage categories. (Western Cape Medical Journal, 2012)</li>
              <li style="margin-bottom:0.75rem;"><strong>2. Fast-Track Chronic Medication Clubs:</strong> Meta-analysis in East Africa and South Africa showed that shifting stable chronic refills (HIV, hypertension, diabetes) to direct pharmacy-prep kiosks diverted 35% to 40% of outpatients, reducing clinical consultation queue backlogs from 4.5 hours to under 30 minutes. (UNAIDS case briefs, 2019)</li>
              <li style="margin-bottom:0.75rem;"><strong>3. Visual Bed Management & Discharge Huddles:</strong> Rapid-cycle clinical flow trials at a public tertiary center in Ghana using visual dry-erase Bed Boards and 8:00 AM multidisciplinary coordination meetings successfully reduced mid-day bed block bottlenecks, increasing early afternoon discharge rates by 48% and reducing patient boarding in hallways. (International Journal of Healthcare Quality, 2021)</li>
            </ul>
          </div>
        </section>
        <!-- Tab 8: Policy Brief & Slides -->
        <section id="panel-policy-slides" class="tab-panel">
          
          <!-- Slide Presentation Tool -->
          <div class="glass-card content-block slides-viewer">
            <h2>7-Slide Presentation Outline</h2>
            <p>Click the navigation buttons to preview the slides prepared for regional policy-makers and clinic managers:</p>
            
            <div class="slide-deck">
              <div class="slide-content">
                <h3 class="slide-title" id="slide-viewer-title">Slide Title</h3>
                <p class="slide-body" id="slide-viewer-body">Slide Body</p>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                <div class="slide-footer" id="slide-viewer-footer">Slide Footer</div>
                <div class="slide-num" id="slide-viewer-num">1 / 7</div>
              </div>
            </div>
            <div class="slides-controls">
              <button id="slide-prev-btn" class="slides-btn">&larr;</button>
              <div class="slides-progress" id="slide-progress-text">Slide 1 of 7</div>
              <button id="slide-next-btn" class="slides-btn">&rarr;</button>
            </div>
          </div>
          <!-- One-Page Policy Brief -->
          <div class="glass-card content-block" style="margin-top: 2rem;" id="policy-brief-section">
            <h2>One-Page Policy Brief</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.5rem;">SUMMARY FOR PROVINCIAL EXECUTIVE DIRECTORS AND DONORS</p>
            
            <div style="border-left: 4px solid var(--primary); padding-left: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
              <div>
                <strong>🚨 The Challenge:</strong>
                <p style="font-size:0.95rem; margin-top:0.25rem;" id="policy-challenge-text">Outpatient queue delays exceed 4 hours, driven by paper record retrieval bottlenecks, while inpatient beds sit at critical capacity limits due to late discharge routines. This endangers patient safety and exhausts clinical staff.</p>
              </div>
              <div>
                <strong>🛠️ Recommended Action Package:</strong>
                <ul style="font-size:0.95rem; margin-top:0.25rem; margin-bottom:0;">
                  <li><strong>Immediate (0-3m):</strong> Deploy color-coded nurse triage cards to isolate acute emergencies; establish a dedicated chronic refill fast-track window to divert 30%+ of outpatients.</li>
                  <li><strong>Medium (3-12m):</strong> Install ward bed boards and mandate morning multidisciplinary discharge huddles; introduce staggered clinic slots via community health workers.</li>
                  <li><strong>Long-Term (12-36m):</strong> Procure modular OpenMRS integrated health records; construct prefabricated observation bays aligned with provincial nurse recruitment.</li>
                </ul>
              </div>
              <div>
                <strong>📈 Expected Impacts:</strong>
                <ul style="font-size:0.95rem; margin-top:0.25rem; margin-bottom:0;" id="policy-impacts-list">
                  <li>Outpatient wait times cut by 55% within 6 months.</li>
                  <li>Bed capacity released 3 hours earlier in the day, reducing corridor boarding.</li>
                  <li>Staff burnout absenteeism lowered by 50%.</li>
                </ul>
              </div>
              <div>
                <strong>💰 Financing & Cost Mitigation:</strong>
                <p style="font-size:0.95rem; margin-top:0.25rem;">Reroute 15% of provincial emergency transfer budgets to outpatient operations. Support long-term ICT integrations through bilateral donor digital grants, using paper-free database indexes as a low-cost transitional pilot.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
  <script src="data.js"></script>
  <script src="main.js"></script>
</body>
</html>
