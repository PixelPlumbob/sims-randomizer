// ============================================================
// LOGIC — SIMSTORY
// Data tables (PACKS, TRAITS, ASPIRATIONS, OCCULTS, CAREERS,
// FREELANCE_JOBS, AFTERSCHOOL, MARITAL_STATUSES, KIDS_OPTIONS,
// WORLDS, CONFLICTS_RAW, BONUS_TRAITS, DEATHS, CHILD_DEATHS)
// are all defined in data.js and loaded before this file.
// ============================================================

const STAGE_ORDER  = ["infant","toddler","child","teen","young_adult","adult","elder"];
const STAGE_LABELS = { infant:"Infant", toddler:"Toddler", child:"Child", teen:"Teen", young_adult:"Young Adult", adult:"Adult", elder:"Elder" };

// young_adult maps to "adult" for all data-table lookups
function dataStage(stage) { return stage === "young_adult" ? "adult" : stage; }

function stageIndex(s) { return STAGE_ORDER.indexOf(s); }
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]; }
function pickWeighted(list) {
  const total = list.reduce((s, i) => s + (i.weight || 1), 0);
  let r = Math.random() * total;
  for (const item of list) { r -= (item.weight || 1); if (r <= 0) return item; }
  return list[list.length - 1];
}

// ============================================================
// EXCLUSION SET
// Key format: "trait:id" | "aspiration:id" | "occult:id" | "career:id"
// ============================================================
const excluded = new Set();
function isExcluded(type, id) { return excluded.has(`${type}:${id}`); }
function toggleExclude(type, id, checked) {
  if (checked) excluded.add(`${type}:${id}`); else excluded.delete(`${type}:${id}`);
  updateExcludeCount();
  refreshDrawerCount(type);
}
function updateExcludeCount() {
  const badge = document.getElementById("exclude-count");
  if (!badge) return;
  if (excluded.size > 0) {
    badge.textContent = excluded.size;
    badge.style.display = "inline-flex";
  } else {
    badge.style.display = "none";
  }
}

// ============================================================
// EXCLUSION DRAWER
// ============================================================
function openDrawer()  {
  document.getElementById("drawer-overlay").classList.add("open");
  document.getElementById("exclusion-drawer").classList.add("open");
}
function closeDrawer() {
  document.getElementById("drawer-overlay").classList.remove("open");
  document.getElementById("exclusion-drawer").classList.remove("open");
}

function getDrawerSections(selectedPacks) {
  const stage = document.getElementById("life-stage-select")?.value || "adult";
  const ds = dataStage(stage);

  const traitItems = TRAITS
    .filter(t => selectedPacks.includes(t.pack) && t.stages.includes(ds))
    .map(t => ({ id: t.id, label: t.label, category: "Trait" }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const aspItems = ASPIRATIONS
    .filter(a => selectedPacks.includes(a.pack) && a.stages.includes(ds))
    .map(a => ({ id: a.id, label: a.label, category: a.category || "General" }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const occultItems = OCCULTS
    .filter(o => selectedPacks.includes(o.pack))
    .map(o => ({ id: o.id, label: o.label, category: "Life State" }))
    .sort((a, b) => a.label.localeCompare(b.label));

  let careerItems = [];
  if (stage === "child") {
    careerItems = [{ id: "elementary", label: "Elementary School Student", category: "School" }];
  } else if (stage === "teen") {
    careerItems = [
      { id: "highschool", label: "High School Student", category: "School" },
      ...CAREERS.filter(c => c.partTime && c.stages.includes("teen") && selectedPacks.includes(c.pack))
        .map(c => ({ id: c.id, label: c.label, category: "Part-time" }))
    ].sort((a, b) => a.label.localeCompare(b.label));
  } else if (stage !== "infant" && stage !== "toddler") {
    careerItems = CAREERS
      .filter(c => c.stages.includes(ds) && selectedPacks.includes(c.pack))
      .map(c => ({ id: c.id, label: c.label, category: c.partTime ? "Part-time" : "Full-time" }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  return [
    { type: "trait",      title: "Traits",      items: traitItems   },
    { type: "aspiration", title: "Aspirations", items: aspItems     },
    { type: "occult",     title: "Life States", items: occultItems  },
    { type: "career",     title: "Careers",     items: careerItems  },
  ].filter(s => s.items.length > 0);
}

function buildDrawer() {
  const body = document.getElementById("drawer-body");
  if (!body) return;
  const sections = getDrawerSections(getSelectedPacks());
  body.innerHTML = "";
  if (!sections.length) {
    body.innerHTML = `<p class="drawer-empty">Select packs to see options.</p>`;
    return;
  }
  sections.forEach(sec => {
    const excludedCount = sec.items.filter(i => isExcluded(sec.type, i.id)).length;
    const wrap = document.createElement("div");
    wrap.className = "sb-section";
    wrap.dataset.type = sec.type;

    const hdr = document.createElement("button");
    hdr.className = "sb-section-hdr";
    hdr.setAttribute("aria-expanded", "false");
    hdr.innerHTML = `
      <span class="sb-section-arrow">▶</span>
      <span class="sb-section-title">${sec.title}</span>
      <span class="sb-count" id="sb-count-${sec.type}">${excludedCount > 0 ? `${excludedCount} excluded` : ""}</span>`;
    hdr.onclick = () => {
      const isOpen = wrap.classList.toggle("open");
      hdr.setAttribute("aria-expanded", String(isOpen));
    };
    wrap.appendChild(hdr);

    const list = document.createElement("div");
    list.className = "sb-item-list";

    const grouped = {};
    sec.items.forEach(item => {
      const cat = item.category || "Other";
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(item);
    });
    const cats = Object.keys(grouped).sort();
    cats.forEach(cat => {
      if (cats.length > 1) {
        const catLbl = document.createElement("div");
        catLbl.className = "sb-cat-label";
        catLbl.textContent = cat;
        list.appendChild(catLbl);
      }
      grouped[cat].forEach(item => {
        const row = document.createElement("label");
        row.className = "sb-item";
        row.innerHTML = `
          <input type="checkbox" ${isExcluded(sec.type, item.id) ? "checked" : ""}
            onchange="toggleExclude('${sec.type}','${item.id}',this.checked)">
          <span class="sb-item-label">${item.label}</span>`;
        list.appendChild(row);
      });
    });

    wrap.appendChild(list);
    body.appendChild(wrap);
  });
}

function refreshDrawerCount(type) {
  const sec = getDrawerSections(getSelectedPacks()).find(s => s.type === type);
  const count = sec ? sec.items.filter(i => isExcluded(type, i.id)).length : 0;
  const el = document.getElementById(`sb-count-${type}`);
  if (el) el.textContent = count > 0 ? `${count} excluded` : "";
}

// ============================================================
// PICKERS
// ============================================================
function buildBlockedMap() {
  const blocked = {};
  CONFLICTS_RAW.forEach(([a, b]) => {
    if (!a || !b) return;
    if (!blocked[a]) blocked[a] = [];
    if (!blocked[b]) blocked[b] = [];
    if (!blocked[a].includes(b)) blocked[a].push(b);
    if (!blocked[b].includes(a)) blocked[b].push(a);
  });
  return blocked;
}

function getTraitCount(stage) {
  return { infant:1, toddler:1, child:1, teen:2, young_adult:3, adult:3, elder:3 }[stage] || 3;
}

function pickTraits(stage, packs, count) {
  const blocked = buildBlockedMap();
  const ds = dataStage(stage);
  const pool = TRAITS.filter(t =>
    t.stages.includes(ds) && packs.includes(t.pack) && !isExcluded("trait", t.id)
  );
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const chosen = [];
  for (const trait of shuffled) {
    if (chosen.length >= count) break;
    const ids = chosen.map(t => t.id);
    if (!(blocked[trait.id] || []).some(b => ids.includes(b))) chosen.push(trait);
  }
  return chosen;
}

function pickAspiration(stage, packs) {
  if (stage === "infant" || stage === "toddler") return null;
  const ds = dataStage(stage);
  const pool = ASPIRATIONS.filter(a =>
    a.stages.includes(ds) && packs.includes(a.pack) && !isExcluded("aspiration", a.id)
  );
  return pool.length ? pickRandom(pool) : null;
}

function pickOccult(packs) {
  const pool = OCCULTS.filter(o => packs.includes(o.pack) && !isExcluded("occult", o.id));
  return pool.length ? pickWeighted(pool) : null;
}

function pickChildOccult(parentOccult, spouseOccult, packs) {
  const pool = OCCULTS.filter(o => packs.includes(o.pack) && !isExcluded("occult", o.id));
  if (!pool.length) return null;
  const weighted = pool.map(o => {
    let w = o.weight || 1;
    if (parentOccult && o.id === parentOccult.id) w += 4;
    if (spouseOccult && o.id === spouseOccult.id) w += 4;
    return { ...o, weight: w };
  });
  return pickWeighted(weighted);
}

function pickCareer(stage, packs) {
  if (stage === "infant" || stage === "toddler") return null;
  if (stage === "child") {
    if (isExcluded("career", "elementary")) return null;
    return { id: "elementary", label: "Elementary School Student", isSchool: true };
  }
  if (stage === "teen") {
    const ptPool = CAREERS.filter(c =>
      c.partTime && c.stages.includes("teen") && packs.includes(c.pack) && !isExcluded("career", c.id)
    );
    if (Math.random() < 0.35 && ptPool.length) {
      const job = pickRandom(ptPool);
      return { id: job.id, label: job.label, isSchool: true, schoolBase: "High School Student" };
    }
    if (!isExcluded("career", "highschool"))
      return { id: "highschool", label: "High School Student", isSchool: true };
    return null;
  }
  const pool = CAREERS.filter(c =>
    c.stages.includes(dataStage(stage)) && packs.includes(c.pack) && !isExcluded("career", c.id)
  );
  const picked = pool.length ? pickRandom(pool) : null;
  if (picked?.id === "freelancer") {
    const fp = FREELANCE_JOBS.filter(f => packs.includes(f.pack));
    picked.freelanceJob = fp.length ? pickRandom(fp) : null;
  }
  return picked;
}

function isChecked(id) {
  const el = document.getElementById(id);
  return el ? el.checked : false;
}

// ============================================================
// GHOST LOGIC
// DEATHS and CHILD_DEATHS data tables are defined in data.js.
// Ghost is fully independent from occult — separate category.
// ============================================================
function pickGhost(stage, occultId, packs) {
  // Infants and toddlers cannot be ghosts
  if (stage === "infant" || stage === "toddler") return null;
  // 10% independent chance
  if (Math.random() >= 0.10) return null;

  // Children: restricted pool based on their occult type
  if (stage === "child") {
    const allowedIds = CHILD_DEATHS[occultId] || CHILD_DEATHS._default;
    const pool = DEATHS.filter(d => allowedIds.includes(d.id) && packs.includes(d.pack));
    return pool.length ? pickRandom(pool) : null;
  }

  // Teen+ — filter by pack availability, age minimum, and occult restrictions
  const pool = DEATHS.filter(d => {
    if (!packs.includes(d.pack)) return false;
    if (stageIndex(stage) < stageIndex(d.ageMin)) return false;
    if (d.occultRestriction === "vampires_only"     && occultId !== "vampire")     return false;
    if (d.occultRestriction === "spellcasters_only" && occultId !== "spellcaster") return false;
    if (d.occultRestriction === "fairies_only"      && occultId !== "fairy")       return false;
    if (d.occultRestriction === "not_fairies"       && occultId === "fairy")       return false;
    if (d.occultRestriction === "not_mermaids"      && occultId === "mermaid")     return false;
    return true;
  });
  return pool.length ? pickRandom(pool) : null;
}

// ============================================================
// LOCK STATE — per simId
// ============================================================
const simLocks = {};
function getLocks(simId) {
  if (!simLocks[simId]) simLocks[simId] = {
    occult:false, ghost:false, traits:false, aspiration:false,
    world:false, career:false, afterschool:false, relationship:false, kids:false
  };
  return simLocks[simId];
}
function toggleLock(simId, section) {
  getLocks(simId)[section] = !getLocks(simId)[section];
  const card = document.getElementById(simIdToCardId(simId));
  if (!card) return;
  card.querySelectorAll(`[data-sim-id="${simId}"][data-lock-section="${section}"]`).forEach(bar => {
    applyLockBarState(bar, getLocks(simId)[section]);
  });
}
function simIdToCardId(simId) {
  if (simId === "main")   return "sim-card";
  if (simId === "spouse") return "spouse-card";
  return `child-card-${simId.replace("child_","")}`;
}
function applyLockBarState(bar, isLocked) {
  bar.classList.toggle("locked", isLocked);
  bar.setAttribute("aria-pressed", isLocked);
  bar.title = isLocked ? "Unlock — will re-randomize on next roll" : "Lock — keep this on next roll";
  const icon = bar.querySelector(".lock-icon");
  const lbl  = bar.querySelector(".lock-label");
  if (icon) icon.textContent = isLocked ? "🔒" : "🔓";
  if (lbl)  lbl.textContent  = isLocked ? "Locked" : "Lock this";
}
function makeLockBar(simId, section) {
  const isLocked = getLocks(simId)[section];
  const bar = document.createElement("button");
  bar.className = "lock-bar" + (isLocked ? " locked" : "");
  bar.dataset.simId       = simId;
  bar.dataset.lockSection = section;
  bar.setAttribute("aria-pressed", isLocked);
  bar.title = isLocked ? "Unlock — will re-randomize on next roll" : "Lock — keep this on next roll";
  bar.innerHTML = `<span class="lock-icon">${isLocked ? "🔒" : "🔓"}</span><span class="lock-label">${isLocked ? "Locked" : "Lock this"}</span>`;
  bar.onclick = () => toggleLock(simId, section);
  return bar;
}

// ============================================================
// LIFE STAGE FAMILY RULES
// ============================================================
function getValidChildStages(parentStage, spouseStage) {
  const parentIdx      = stageIndex(parentStage);
  const spouseIdx      = spouseStage ? stageIndex(spouseStage) : parentIdx;
  const youngestParent = Math.min(parentIdx, spouseIdx);
  // Kids must be at least one stage younger, max young_adult
  const maxKidIdx = Math.min(youngestParent - 1, stageIndex("young_adult"));
  if (maxKidIdx < 0) return ["infant"];
  return STAGE_ORDER.slice(0, maxKidIdx + 1);
}

// ============================================================
// PACK PANEL
// ============================================================
let selectedPacks = new Set(PACKS.map(p => p.id));
function getSelectedPacks() { return Array.from(selectedPacks); }
function updatePackCount()  { document.getElementById("pack-count").textContent = selectedPacks.size; }

function buildPackPanel() {
  const body  = document.getElementById("panel-body");
  const types = [
    { key:"base",      label:"Base Game"       },
    { key:"expansion", label:"Expansion Packs" },
    { key:"gamepack",  label:"Game Packs"       },
    { key:"stuff",     label:"Stuff Packs"      },
    { key:"kit",       label:"Kits"             },
    { key:"event",     label:"Game Events"      },
  ];
  body.innerHTML = "";
  types.forEach(({ key, label }) => {
    const group = PACKS.filter(p => p.type === key);
    if (!group.length) return;
    const div = document.createElement("div");
    div.className = `pack-type-group type-${key}`;
    div.innerHTML = `<div class="pack-type-label">${label}</div>`;
    group.forEach(pack => {
      const lbl = document.createElement("label");
      lbl.className = "pack-checkbox";
      lbl.innerHTML = `
        <input type="checkbox" value="${pack.id}" ${selectedPacks.has(pack.id) ? "checked" : ""}
          onchange="togglePack('${pack.id}',this.checked)">
        <span class="pack-type-dot"></span>
        ${pack.label}`;
      div.appendChild(lbl);
    });
    body.appendChild(div);
  });
  updatePackCount();
}
function togglePack(id, checked) {
  if (checked) selectedPacks.add(id); else selectedPacks.delete(id);
  updatePackCount();
  buildDrawer();
}
function selectAllPacks() { selectedPacks = new Set(PACKS.map(p => p.id)); buildPackPanel(); buildDrawer(); }
function selectNoPacks()  { selectedPacks = new Set(["base"]);              buildPackPanel(); buildDrawer(); }
function openPanel()  { document.getElementById("overlay").classList.add("open");    document.getElementById("pack-panel").classList.add("open"); }
function closePanel() { document.getElementById("overlay").classList.remove("open"); document.getElementById("pack-panel").classList.remove("open"); }

// ============================================================
// DISPLAY HELPERS
// ============================================================
function makeTraitRow(trait, type) {
  const row = document.createElement("div");
  row.className = `trait-row${type === "bonus" ? " trait-row-bonus" : ""}`;
  row.innerHTML = `
    <div class="trait-name">
      ${trait.label}
      ${type === "bonus" ? '<span class="bonus-star">★ bonus trait</span>' : ""}
    </div>
    ${trait.desc ? `<div class="trait-desc">${trait.desc}</div>` : ""}`;
  return row;
}
function makeChip(labelText, valueText) {
  const chip = document.createElement("div");
  chip.className = "info-chip";
  chip.innerHTML = `<span class="info-chip-label">${labelText}</span><span class="info-chip-value">${valueText}</span>`;
  return chip;
}
function makeLockableSection(simId, section, labelText, contentEl) {
  const wrap = document.createElement("div");
  wrap.className = "card-section";
  if (simId && section) wrap.appendChild(makeLockBar(simId, section));
  const lbl = document.createElement("div");
  lbl.className = "card-label";
  lbl.textContent = labelText;
  wrap.appendChild(lbl);
  wrap.appendChild(contentEl);
  return wrap;
}
function makeSection(labelText, contentEl) {
  const wrap = document.createElement("div");
  wrap.className = "card-section";
  const lbl = document.createElement("div");
  lbl.className = "card-label";
  lbl.textContent = labelText;
  wrap.appendChild(lbl);
  wrap.appendChild(contentEl);
  return wrap;
}

// ============================================================
// CARD RENDER
// ============================================================
function renderSimCard(result, container, role, index, simId) {
  container.innerHTML = "";

  // Role badge for spouse and children
  if (role !== "main") {
    const badge = document.createElement("div");
    badge.className = `role-badge role-badge-${role}`;
    badge.textContent = role === "spouse" ? "💍 Spouse" : `👶 Child ${index + 1}`;
    container.appendChild(badge);
  }

  // ── Life (stage + occult) ──
  const lifeContent = document.createElement("div");
  lifeContent.className = "main-details";
  const addDetail = (lbl, val) => {
    const item = document.createElement("div");
    item.className = "main-detail-item";
    item.innerHTML = `<span class="main-detail-label">${lbl}</span><span class="main-detail-value">${val}</span>`;
    lifeContent.appendChild(item);
  };
  addDetail("Life Stage", STAGE_LABELS[result.stage]);
  if (result.occult) addDetail("Life State", result.occult.label);
  container.appendChild(result.occult
    ? makeLockableSection(simId, "occult", "Life", lifeContent)
    : makeSection("Life", lifeContent));

  // ── Ghost (separate section, only shown when present) ──
  if (result.ghost) {
    const ghostContent = document.createElement("div");
    ghostContent.className = "ghost-box";
    ghostContent.innerHTML = `
      <div class="ghost-name">👻 Ghost</div>
      <div class="ghost-death">
        <span class="ghost-death-label">Cause of Death</span>
        <span class="ghost-death-value">${result.ghost.label}</span>
      </div>`;
    container.appendChild(makeLockableSection(simId, "ghost", "Ghost", ghostContent));
  }

  // ── Traits ──
  const traitsContent = document.createElement("div");
  traitsContent.className = "traits-row";
  result.traits.forEach(t => traitsContent.appendChild(makeTraitRow(t, "trait")));
  if (result.aspiration?.bonusTrait) traitsContent.appendChild(makeTraitRow(result.aspiration.bonusTrait, "bonus"));
  container.appendChild(makeLockableSection(simId, "traits", "Traits", traitsContent));

  // ── Aspiration ──
  if (result.aspiration) {
    const aspContent = document.createElement("div");
    aspContent.className = "aspiration-box";
    aspContent.innerHTML = `
      <div class="asp-name">${result.aspiration.label}</div>
      ${result.aspiration.desc ? `<div class="asp-desc">${result.aspiration.desc}</div>` : ""}`;
    container.appendChild(makeLockableSection(simId, "aspiration", "Aspiration", aspContent));
  }

  // ── Details ──
  const details = [];
  if (role === "main" && result.world) details.push({ label:"World",         value: result.world.label,         lock:"world"         });
  if (result.career) {
    const careerLabel = result.career.schoolBase
      ? `${result.career.schoolBase} · ${result.career.label}` : result.career.label;
    details.push({ label:"Career", value: careerLabel, lock:"career" });
    if (result.career.freelanceJob) details.push({ label:"Freelance Job", value: result.career.freelanceJob.label });
  }
  if (result.afterschool)  details.push({ label:"After School",   value: result.afterschool.label,  lock:"afterschool"  });
  if (result.relationship) details.push({ label:"Marital Status", value: result.relationship.label, lock:"relationship" });
  if (result.kids)         details.push({ label:"Kids",           value: result.kids.label,         lock:"kids"         });

  if (details.length) {
    const detailsWrap = document.createElement("div");
    detailsWrap.className = "card-section details-section";
    const lbl = document.createElement("div");
    lbl.className = "card-label";
    lbl.textContent = "Details";
    detailsWrap.appendChild(lbl);
    const grid = document.createElement("div");
    grid.className = "details-grid";
    details.forEach(d => {
      const block = document.createElement("div");
      block.className = "detail-block";
      if (d.lock) block.appendChild(makeLockBar(simId, d.lock));
      block.appendChild(makeChip(d.label, d.value));
      grid.appendChild(block);
    });
    detailsWrap.appendChild(grid);
    container.appendChild(detailsWrap);
  }
}

// ============================================================
// FAMILY STATE
// ============================================================
let familyState = { main: null, spouse: null, children: [] };

// ============================================================
// MAIN SIM GENERATION
// ============================================================
let lastSimResult = null;

function generateSim(keepData) {
  const stage = document.getElementById("life-stage-select").value;
  const packs  = getSelectedPacks();
  const count  = getTraitCount(stage);
  const locks  = getLocks("main");

  // Traits — always generated (no Step 1 toggle for traits)
  const traits = (locks.traits && keepData) ? keepData.traits : pickTraits(stage, packs, count);
  if (!traits.length) return { error: "No traits available for this life stage with your selected packs. Try selecting more packs or reducing exclusions." };

  // Aspiration — respects chk-aspiration
  let aspiration = null;
  if (locks.aspiration && keepData) aspiration = keepData.aspiration;
  else if (isChecked("chk-aspiration")) aspiration = pickAspiration(stage, packs);

  // Occult — respects chk-occult
  let occult = null;
  if (locks.occult && keepData) occult = keepData.occult;
  else if (isChecked("chk-occult")) occult = pickOccult(packs);

  // Ghost — independent 10% chance; uses occult id for restriction checks
  let ghost = null;
  if (locks.ghost && keepData) ghost = keepData.ghost;
  else ghost = pickGhost(stage, occult?.id || "sim", packs);

  // World — respects chk-world; only for main sim
  let world = null;
  if (locks.world && keepData) world = keepData.world;
  else if (isChecked("chk-world")) {
    const pool = WORLDS.filter(w => packs.includes(w.pack));
    world = pool.length ? pickRandom(pool) : null;
  }

  // Career + after-school — respects chk-career
  let career = null, afterschool = null;
  if (locks.career && keepData) career = keepData.career;
  else if (isChecked("chk-career")) career = pickCareer(stage, packs);

  if (locks.afterschool && keepData) afterschool = keepData.afterschool;
  else if (isChecked("chk-career") && (stage === "child" || stage === "teen")) {
    const pool = AFTERSCHOOL.filter(a => a.stages.includes(stage) && packs.includes(a.pack));
    if (pool.length && Math.random() < (stage === "teen" ? 0.55 : 0.45)) afterschool = pickRandom(pool);
  }

  // Relationship + kids — young_adult / adult / elder only
  let relationship = null, kids = null;
  if (stage === "young_adult" || stage === "adult" || stage === "elder") {
    if (locks.relationship && keepData) relationship = keepData.relationship;
    else if (isChecked("chk-relationship")) relationship = pickRandom(MARITAL_STATUSES);
    if (locks.kids && keepData) kids = keepData.kids;
    else if (isChecked("chk-kids")) kids = pickRandom(KIDS_OPTIONS);
  }

  return { stage, occult, ghost, world, career, afterschool, relationship, kids, traits, aspiration };
}

// ============================================================
// SECONDARY SIM GENERATION (spouse / child)
// Respects the same Step 1 toggles as the main sim.
// World is always null — family shares one household.
// ============================================================
function generateSimForRole(simId, stage, packs, isChild, parentOccult, spouseOccult) {
  const locks = getLocks(simId);
  const keepData = simId === "spouse"
    ? familyState.spouse
    : simId.startsWith("child_")
      ? (familyState.children[parseInt(simId.replace("child_",""))] || null)
      : null;

  // Traits
  const count  = getTraitCount(stage);
  const traits = (locks.traits && keepData) ? keepData.traits : pickTraits(stage, packs, count);

  // Aspiration — respects chk-aspiration
  let aspiration = null;
  if (locks.aspiration && keepData) aspiration = keepData.aspiration;
  else if (isChecked("chk-aspiration") && stage !== "infant" && stage !== "toddler")
    aspiration = pickAspiration(stage, packs);

  // Occult — respects chk-occult; children inherit weighted toward parents
  let occult = null;
  if (locks.occult && keepData) occult = keepData.occult;
  else if (isChecked("chk-occult")) {
    occult = isChild
      ? pickChildOccult(parentOccult, spouseOccult, packs)
      : pickOccult(packs);
  }

  // Ghost — independent 10% chance; uses occult id for restriction checks
  let ghost = null;
  if (locks.ghost && keepData) ghost = keepData.ghost;
  else ghost = pickGhost(stage, occult?.id || "sim", packs);

  // Career — respects chk-career
  let career = null, afterschool = null;
  if (locks.career && keepData) career = keepData.career;
  else if (isChecked("chk-career")) career = pickCareer(stage, packs);

  if (locks.afterschool && keepData) afterschool = keepData.afterschool;
  else if (isChecked("chk-career") && (stage === "child" || stage === "teen")) {
    const pool = AFTERSCHOOL.filter(a => a.stages.includes(stage) && packs.includes(a.pack));
    if (pool.length && Math.random() < 0.5) afterschool = pickRandom(pool);
  }

  // Relationship — spouse inherits main's status; children have none
  let relationship = null;
  if (!isChild && (stage === "young_adult" || stage === "adult" || stage === "elder")) {
    relationship = familyState.main.relationship;
  }

  return { stage, occult, ghost, world: null, career, afterschool, relationship, kids: null, traits, aspiration };
}

// ============================================================
// FAMILY PROMPTS
// ============================================================
function showFamilyPrompts(result) {
  const area = document.getElementById("family-prompts");
  area.innerHTML = "";

  const needsSpouse = result.relationship
    && (result.relationship.id === "married" || result.relationship.id === "engaged")
    && !familyState.spouse;
  const needsKids = result.kids && result.kids.id !== "none" && !familyState.children.length;

  if (!needsSpouse && !needsKids) return;

  const box = document.createElement("div");
  box.className = "family-prompt-box";

  if (needsSpouse) {
    const row = document.createElement("div");
    row.className = "prompt-row";
    row.innerHTML = `
      <div class="prompt-text"><span class="prompt-icon">💍</span>
        Your Sim is <strong>${result.relationship.label}</strong> — randomize a spouse?
      </div>
      <div class="prompt-actions">
        <button class="btn-prompt-yes" onclick="generateSpouse()">Yes, generate spouse</button>
        <button class="btn-prompt-no"  onclick="dismissPrompt(this)">Skip</button>
      </div>`;
    box.appendChild(row);
  }

  if (needsKids) {
    const kidsCount   = result.kids.id === "one" ? 1 : result.kids.id === "two" ? 2 : 3;
    const validStages = getValidChildStages(familyState.main.stage, familyState.spouse?.stage);
    const stageOptions = validStages.map(s => `<option value="${s}">${STAGE_LABELS[s]}</option>`).join("");
    const row = document.createElement("div");
    row.className = "prompt-row";
    row.innerHTML = `
      <div class="prompt-text"><span class="prompt-icon">👶</span>
        Your Sim has <strong>${result.kids.label}</strong> — randomize them?
      </div>
      <div class="prompt-actions kids-actions">
        <div class="kids-stage-row">
          <label class="kids-stage-label">Kids' life stage:</label>
          <select id="kids-stage-select" class="kids-stage-select">
            <option value="auto">Auto-determine</option>
            ${stageOptions}
          </select>
        </div>
        <div class="prompt-btns-row">
          <button class="btn-prompt-yes" onclick="generateKids(${kidsCount})">Yes, generate ${kidsCount > 1 ? kidsCount + " kids" : "1 kid"}</button>
          <button class="btn-prompt-no"  onclick="dismissPrompt(this)">Skip</button>
        </div>
      </div>`;
    box.appendChild(row);
  }

  area.appendChild(box);
}

function dismissPrompt(btn) {
  const row = btn.closest(".prompt-row");
  row.style.opacity = "0.4";
  row.style.pointerEvents = "none";
}

function generateSpouse() {
  const packs   = getSelectedPacks();
  const mainIdx = stageIndex(familyState.main.stage);
  const valid   = STAGE_ORDER.slice(mainIdx);
  // Weight heavily toward same stage as main sim
  const pool = valid.flatMap(s => s === familyState.main.stage ? [s,s,s] : [s]);
  const spouseResult = generateSimForRole("spouse", pickRandom(pool), packs, false,
    familyState.main.occult, null);
  familyState.spouse = spouseResult;
  const card = document.getElementById("spouse-card");
  card.style.display = "block";
  renderSimCard(spouseResult, card, "spouse", 0, "spouse");
  showFamilyPrompts(familyState.main);
  updateSaveButton();
}

function generateKids(count) {
  const packs         = getSelectedPacks();
  const stageSelect   = document.getElementById("kids-stage-select");
  const selectedStage = stageSelect?.value || "auto";
  familyState.children = [];
  document.getElementById("children-cards").innerHTML = "";

  const validStages = getValidChildStages(familyState.main.stage, familyState.spouse?.stage);
  const usedStages  = [];

  for (let i = 0; i < count; i++) {
    let stage;
    if (selectedStage !== "auto") {
      stage = validStages.includes(selectedStage) ? selectedStage : validStages[0];
    } else {
      const unused = validStages.filter(s => !usedStages.includes(s));
      stage = pickRandom(unused.length ? unused : validStages);
    }
    usedStages.push(stage);

    const simId = `child_${i}`;
    const kid   = generateSimForRole(simId, stage, packs, true,
      familyState.main.occult, familyState.spouse?.occult);
    familyState.children.push(kid);

    const card = document.createElement("div");
    card.className    = "card";
    card.id           = `child-card-${i}`;
    card.style.display = "block";
    document.getElementById("children-cards").appendChild(card);
    renderSimCard(kid, card, "child", i, simId);
  }
  updateSaveButton();
}

// ============================================================
// NOTEBOOK EXPORT — human-readable HTML file
// ============================================================
function simToNotebookHTML(result, role, index) {
  if (!result) return "";

  const roleTitles = { main:"🎮 Main Sim", spouse:"💍 Spouse", child:`👶 Child ${index + 1}` };
  const title = roleTitles[role] || role;

  const traitsList = result.traits.map(t => `
    <div class="nb-trait">
      <strong>${t.label}</strong>
      ${t.desc ? `<p>${t.desc}</p>` : ""}
    </div>`).join("");

  const bonusTrait = result.aspiration?.bonusTrait ? `
    <div class="nb-trait nb-trait-bonus">
      <strong>★ ${result.aspiration.bonusTrait.label}</strong>
      <span class="nb-bonus-tag">Bonus trait from Aspiration</span>
      ${result.aspiration.bonusTrait.desc ? `<p>${result.aspiration.bonusTrait.desc}</p>` : ""}
    </div>` : "";

  const aspSection = result.aspiration ? `
    <div class="nb-section">
      <div class="nb-section-label">Aspiration</div>
      <div class="nb-aspiration">
        <strong>${result.aspiration.label}</strong>
        ${result.aspiration.desc ? `<p>${result.aspiration.desc}</p>` : ""}
      </div>
    </div>` : "";

  const ghostSection = result.ghost ? `
    <div class="nb-section">
      <div class="nb-section-label">Ghost</div>
      <div class="nb-ghost-box">
        <span class="nb-ghost-icon">👻</span>
        <div>
          <div class="nb-ghost-title">Ghost</div>
          <div class="nb-ghost-death">Cause of Death: <strong>${result.ghost.label}</strong></div>
        </div>
      </div>
    </div>` : "";

  const detailRows = [];
  if (role === "main" && result.world) detailRows.push(["World", result.world.label]);
  if (result.career) {
    const cl = result.career.schoolBase
      ? `${result.career.schoolBase} + ${result.career.label}` : result.career.label;
    detailRows.push(["Career", cl]);
    if (result.career.freelanceJob) detailRows.push(["Freelance Job", result.career.freelanceJob.label]);
  }
  if (result.afterschool)  detailRows.push(["After School",   result.afterschool.label]);
  if (result.relationship) detailRows.push(["Marital Status", result.relationship.label]);
  if (result.kids)         detailRows.push(["Kids",           result.kids.label]);

  const detailsSection = detailRows.length ? `
    <div class="nb-section">
      <div class="nb-section-label">Details</div>
      <table class="nb-table">
        ${detailRows.map(([k, v]) => `<tr><td class="nb-key">${k}</td><td class="nb-val">${v}</td></tr>`).join("")}
      </table>
    </div>` : "";

  return `
  <div class="nb-sim-card">
    <div class="nb-sim-title">${title}</div>

    <div class="nb-section">
      <div class="nb-section-label">Life</div>
      <div class="nb-life-row">
        <div class="nb-life-chip">
          <span class="nb-chip-label">Life Stage</span>
          <span class="nb-chip-value">${STAGE_LABELS[result.stage]}</span>
        </div>
        ${result.occult ? `
        <div class="nb-life-chip">
          <span class="nb-chip-label">Life State</span>
          <span class="nb-chip-value">${result.occult.label}</span>
        </div>` : ""}
      </div>
    </div>

    ${ghostSection}

    <div class="nb-section">
      <div class="nb-section-label">Traits</div>
      <div class="nb-traits-list">
        ${traitsList}
        ${bonusTrait}
      </div>
    </div>

    ${aspSection}
    ${detailsSection}
  </div>`;
}

function downloadNotebook() {
  const timestamp    = new Date().toLocaleString("en-GB", { dateStyle:"long", timeStyle:"short" });
  const mainHTML     = simToNotebookHTML(familyState.main, "main", 0);
  const spouseHTML   = familyState.spouse ? simToNotebookHTML(familyState.spouse, "spouse", 0) : "";
  const childrenHTML = familyState.children.map((c, i) => simToNotebookHTML(c, "child", i)).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SimStory Notebook</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Georgia, 'Times New Roman', serif; background: #faf9f6; color: #2c2c2c; padding: 40px 20px 80px; }
  .nb-page { max-width: 720px; margin: 0 auto; }
  .nb-cover { text-align: center; padding: 48px 0 40px; border-bottom: 2px solid #e0dff8; margin-bottom: 40px; }
  .nb-cover-title { font-size: 36px; font-weight: 700; color: #534AB7; letter-spacing: -0.5px; margin-bottom: 8px; }
  .nb-cover-sub { font-size: 15px; color: #888; }
  .nb-cover-date { font-size: 13px; color: #bbb; margin-top: 6px; }
  .nb-sim-card { background: white; border: 1px solid #e0dff8; border-radius: 16px; padding: 32px; margin-bottom: 28px; page-break-inside: avoid; }
  .nb-sim-title { font-size: 22px; font-weight: 700; color: #534AB7; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 1.5px solid #f0eff9; }
  .nb-section { margin-bottom: 22px; }
  .nb-section:last-child { margin-bottom: 0; }
  .nb-section-label { font-size: 10px; font-weight: 700; color: #bbb; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; }
  .nb-life-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .nb-life-chip { background: #f0eff9; border: 1.5px solid #d0cef5; border-radius: 10px; padding: 10px 18px; display: flex; flex-direction: column; gap: 2px; }
  .nb-chip-label { font-size: 10px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.06em; font-family: Arial, sans-serif; }
  .nb-chip-value { font-size: 20px; font-weight: 700; color: #534AB7; line-height: 1.2; }
  .nb-ghost-box { display: flex; align-items: center; gap: 14px; background: #edf7ed; border: 1.5px solid #a8d5a2; border-radius: 10px; padding: 14px 16px; }
  .nb-ghost-icon { font-size: 28px; line-height: 1; }
  .nb-ghost-title { font-size: 15px; font-weight: 700; color: #2d6e2d; margin-bottom: 3px; }
  .nb-ghost-death { font-size: 13px; color: #4a7c4a; font-family: Arial, sans-serif; }
  .nb-traits-list { display: flex; flex-direction: column; gap: 10px; }
  .nb-trait { background: #eeedfe; border-radius: 10px; padding: 12px 16px; }
  .nb-trait strong { font-size: 15px; color: #2E2680; display: block; margin-bottom: 4px; }
  .nb-trait p { font-size: 13px; color: #555; line-height: 1.6; font-family: Arial, sans-serif; }
  .nb-trait-bonus { background: #fff8e1; border: 1.5px dashed #e6b800; }
  .nb-trait-bonus strong { color: #7a5200; }
  .nb-bonus-tag { display: inline-block; font-size: 10px; font-weight: 600; color: #b8860b; background: white; border: 1px solid #e6c84a; border-radius: 10px; padding: 1px 8px; margin: 3px 0 4px; font-family: Arial, sans-serif; }
  .nb-aspiration { background: #f5f4ff; border-left: 3px solid #534AB7; border-radius: 0 10px 10px 0; padding: 14px 16px; }
  .nb-aspiration strong { font-size: 15px; color: #2E2680; display: block; margin-bottom: 5px; }
  .nb-aspiration p { font-size: 13px; color: #555; line-height: 1.6; font-family: Arial, sans-serif; }
  .nb-table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; }
  .nb-table tr { border-bottom: 1px solid #f0eff9; }
  .nb-table tr:last-child { border-bottom: none; }
  .nb-key { padding: 9px 12px 9px 0; font-size: 12px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; width: 160px; }
  .nb-val { padding: 9px 0; font-size: 14px; font-weight: 600; color: #2E2680; }
  .nb-divider { border: none; border-top: 2px dashed #e0dff8; margin: 36px 0; }
  @media print { body { background: white; padding: 20px; } .nb-sim-card { box-shadow: none; border: 1px solid #ccc; } }
</style>
</head>
<body>
<div class="nb-page">
  <div class="nb-cover">
    <div class="nb-cover-title">✨ SimStory Notebook</div>
    <div class="nb-cover-sub">Your generated household</div>
    <div class="nb-cover-date">Saved on ${timestamp}</div>
  </div>
  ${mainHTML}
  ${spouseHTML   ? `<hr class="nb-divider">${spouseHTML}`   : ""}
  ${childrenHTML ? `<hr class="nb-divider">${childrenHTML}` : ""}
</div>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = `simstory_notebook_${new Date().toISOString().slice(0,10)}.html`;
  a.click();
  URL.revokeObjectURL(url);

  const btn  = document.getElementById("btn-save");
  const orig = btn.innerHTML;
  btn.innerHTML = "✅ Saved!";
  btn.disabled  = true;
  setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 2000);
}

function updateSaveButton() {
  const btn  = document.getElementById("btn-save");
  const row  = document.getElementById("save-row");
  const show = !!familyState.main;
  if (btn) btn.style.display = show ? "flex" : "none";
  if (row) row.style.display = show ? "flex" : "none";
}

// ============================================================
// MAIN HANDLER
// ============================================================
function updateChecklist() {}
function updateToggles()  {}

function handleGenerate() {
  const result   = generateSim(lastSimResult);
  const errorBox = document.getElementById("error-box");
  const card     = document.getElementById("sim-card");

  if (result.error) {
    errorBox.textContent   = result.error;
    errorBox.style.display = "block";
    card.style.display     = "none";
    return;
  }

  errorBox.style.display = "none";
  lastSimResult = result;
  familyState   = { main: result, spouse: null, children: [] };

  document.getElementById("spouse-card").style.display = "none";
  document.getElementById("spouse-card").innerHTML     = "";
  document.getElementById("children-cards").innerHTML  = "";
  document.getElementById("family-prompts").innerHTML  = "";

  renderSimCard(result, card, "main", 0, "main");
  card.style.display = "block";
  document.getElementById("lock-hint").style.display = "flex";
  showFamilyPrompts(result);
  updateSaveButton();
}

// ── Init ──
buildPackPanel();
buildDrawer();
