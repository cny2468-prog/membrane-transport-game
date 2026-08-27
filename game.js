const stages = [
  {
    kicker: "STAGE 01 · 확산", title: "막을 건너는 두 가지 길", time: 65,
    mission: "산소와 포도당의 안팎 개수 차이를 각각 1 이하로 줄이세요.",
    substances: [
      { id: "oxygen", name: "산소", short: "O₂", color: "#67a7c5", outside: [7, 9], inside: [2, 3] },
      { id: "glucose", name: "포도당", short: "G", color: "#e0a845", outside: [2, 3], inside: [7, 9] }
    ],
    slots: [{ id: "gate-a" }, { id: "gate-b" }],
    required: ["simple", "facilitated"],
    tools: [
      { id: "simple", name: "인지질 이중층", sub: "단순 확산", icon: "O₂", color: "#4384a3" },
      { id: "facilitated", name: "포도당 운반체", sub: "촉진 확산", icon: "G", color: "#b97f31" },
      { id: "sodium-channel", name: "나트륨 통로", sub: "이온 통로", icon: "Na", color: "#c25d52" },
      { id: "vesicle", name: "수송 소낭", sub: "큰 물질 이동", icon: "○", color: "#806aa1" }
    ],
    goals: ["산소: 안팎의 개수 차이 1 이하", "포도당: 안팎의 개수 차이 1 이하"],
    moves: [{ id: "oxygen", tool: "simple", from: "outside", perCycle: 1 }, { id: "glucose", tool: "facilitated", from: "inside", perCycle: 1 }],
    hint: "작고 비극성인 산소는 막을 바로 지나지만, 포도당은 운반 단백질이 필요해요.",
    fact: "산소의 단순 확산과 포도당의 촉진 확산은 모두 농도가 높은 쪽에서 낮은 쪽으로 일어나며 ATP를 쓰지 않습니다."
  },
  {
    kicker: "STAGE 02 · 소낭 수송", title: "큰 물질은 막째로 옮긴다", time: 70,
    mission: "영양 물질은 안으로, 노폐물은 밖으로 옮기고 산소의 농도 차이도 줄이세요.",
    substances: [
      { id: "protein", name: "큰 영양 물질", short: "P", color: "#9277b9", outside: [7, 8], inside: [1, 2] },
      { id: "waste", name: "노폐물", short: "W", color: "#d2695d", outside: [1, 2], inside: [7, 8] },
      { id: "oxygen", name: "산소", short: "O₂", color: "#67a7c5", outside: [7, 8], inside: [2, 3] }
    ],
    slots: [{ id: "gate-a" }, { id: "gate-b" }, { id: "gate-c" }],
    required: ["endocytosis", "exocytosis", "simple"],
    tools: [
      { id: "endocytosis", name: "세포내 유입", sub: "막이 안쪽으로 함입", icon: "IN", color: "#6b8e78" },
      { id: "exocytosis", name: "세포외 유출", sub: "소낭이 막과 융합", icon: "OUT", color: "#cc675d" },
      { id: "facilitated", name: "운반 단백질", sub: "작은 용질 이동", icon: "G", color: "#b97f31" },
      { id: "simple", name: "인지질 이중층", sub: "단순 확산", icon: "O₂", color: "#4384a3" }
    ],
    goals: ["큰 영양 물질: 세포 안 > 세포 밖", "노폐물: 세포 밖 > 세포 안", "산소: 안팎의 개수 차이 1 이하"],
    moves: [{ id: "protein", tool: "endocytosis", from: "outside", perCycle: 1 }, { id: "waste", tool: "exocytosis", from: "inside", perCycle: 1 }, { id: "oxygen", tool: "simple", from: "outside", perCycle: 1 }],
    hint: "세포내 유입과 세포외 유출은 막과 세포 골격을 움직이는 데 에너지가 필요합니다. 두 장치에 ATP를 각각 결합하세요.",
    fact: "세포내 유입과 세포외 유출은 소낭 형성·이동·막 융합에 에너지가 필요한 능동적 과정이므로 ATP를 사용합니다."
  },
  {
    kicker: "STAGE 03 · 능동 수송", title: "농도 기울기를 거슬러라", time: 75,
    mission: "Na⁺·K⁺ 분포를 회복하고 산소와 포도당의 농도 차이도 줄이세요.",
    substances: [
      { id: "sodium", name: "나트륨 이온", short: "Na⁺", color: "#ee7869", outside: [8, 10], inside: [1, 2] },
      { id: "potassium", name: "칼륨 이온", short: "K⁺", color: "#79a95d", outside: [1, 2], inside: [6, 8] },
      { id: "glucose", name: "포도당", short: "G", color: "#e0a845", outside: [2, 2], inside: [8, 8] },
      { id: "oxygen", name: "산소", short: "O₂", color: "#67a7c5", outside: [8, 8], inside: [2, 2] }
    ],
    slots: [{ id: "gate-a" }, { id: "gate-b" }, { id: "gate-c" }],
    required: ["na-k-pump", "simple", "facilitated"],
    tools: [
      { id: "na-k-pump", name: "Na⁺/K⁺ 펌프", sub: "능동 수송 단백질", icon: "3:2", color: "#557f73" },
      { id: "simple", name: "인지질 이중층", sub: "산소의 단순 확산", icon: "O₂", color: "#4384a3" },
      { id: "facilitated", name: "포도당 운반체", sub: "촉진 확산", icon: "G", color: "#b97f31" },
      { id: "sodium-channel", name: "나트륨 통로", sub: "농도 기울기 방향", icon: "Na", color: "#c25d52" },
      { id: "potassium-channel", name: "칼륨 통로", sub: "농도 기울기 방향", icon: "K", color: "#6e9f58" }
    ],
    goals: ["나트륨 이온: 세포 밖 > 세포 안", "칼륨 이온: 세포 안 > 세포 밖", "산소: 안팎의 개수 차이 1 이하", "포도당: 안팎의 개수 차이 1 이하"],
    moves: [{ id: "sodium", tool: "na-k-pump", from: "inside", perCycle: 3 }, { id: "potassium", tool: "na-k-pump", from: "outside", perCycle: 2 }, { id: "oxygen", tool: "simple", from: "outside", perCycle: 1 }, { id: "glucose", tool: "facilitated", from: "inside", perCycle: 1 }],
    hint: "이온 통로는 농도 기울기를 거스르지 못합니다. 펌프와 ATP를 함께 써야 해요.",
    fact: "나트륨-칼륨 펌프는 ATP를 써서 한 번에 Na⁺ 3개를 밖으로, K⁺ 2개를 안으로 옮깁니다. 산소와 포도당의 확산에는 ATP가 필요하지 않습니다."
  }
];

const stageBriefs = [
  {
    kicker: "STAGE 01 · 확산", title: "1단계: 농도 차이를 줄여라",
    summary: "산소와 포도당의 안팎 개수 차이를 1 이하로 만드세요.",
    conceptTitle: "산소는 막 사이로, 포도당은 운반체로",
    conceptText: "둘 다 농도가 높은 곳에서 낮은 곳으로 이동하며 ATP는 쓰지 않습니다.",
    tip: "물음표 2곳에 필요한 장치를 놓고 작동 횟수를 정하세요."
  },
  {
    kicker: "STAGE 02 · 소낭 수송", title: "2단계: 큰 물질을 옮겨라",
    summary: "영양 물질·노폐물을 옮기고 산소 농도 차이도 줄이세요.",
    conceptTitle: "소낭 수송에는 ATP, 산소 확산에는 ATP 불필요",
    conceptText: "세포내 유입과 세포외 유출에는 ATP를 각각 결합하고, 산소는 인지질 이중층을 직접 통과시킵니다.",
    tip: "별 모양 ATP 카드를 두 소낭 수송 장치에 각각 끌어다 놓으세요."
  },
  {
    kicker: "STAGE 03 · 능동 수송", title: "3단계: 농도 기울기를 거슬러라",
    summary: "이온 분포를 회복하고 산소·포도당 농도 차이도 줄이세요.",
    conceptTitle: "펌프에는 ATP, 확산에는 ATP 불필요",
    conceptText: "펌프는 Na⁺ 3개를 밖으로, K⁺ 2개를 안으로 옮깁니다.",
    tip: "펌프·인지질 이중층·운반체를 놓은 뒤 별 모양 ATP 카드를 펌프에 끌어다 놓으세요."
  }
];

const missionVariants = [
  [
    "호흡에 필요한 산소와 포도당의 안팎 개수 차이를 각각 1 이하로 줄이세요.",
    "확산 경로를 골라 산소와 포도당이 세포막 양쪽에 고르게 퍼지게 하세요.",
    "산소는 막으로, 포도당은 운반체로 이동시켜 두 물질의 농도 차이를 줄이세요."
  ],
  [
    "큰 영양 물질은 안으로, 노폐물은 밖으로 옮기고 산소도 고르게 분포시키세요.",
    "세포내 유입과 세포외 유출로 큰 물질을 정리하고 산소의 농도 차이를 줄이세요.",
    "영양 물질을 받아들이고 노폐물을 내보낸 뒤 산소의 안팎 개수 차이를 1 이하로 만드세요."
  ],
  [
    "Na⁺·K⁺ 분포를 회복하고 산소와 포도당의 농도 차이도 줄이세요.",
    "ATP를 펌프에 직접 결합해 이온 분포를 바로잡고 두 확산 물질을 평형에 가깝게 만드세요.",
    "Na⁺는 밖에, K⁺는 안에 더 많게 만들고 산소와 포도당은 고르게 분포시키세요."
  ]
];

const ENERGY_TOOLS = new Set(["endocytosis", "exocytosis", "na-k-pump"]);
const DIFFUSION_VARIANTS = [
  { id: "oxygen", name: "산소 (O₂)", short: "O₂", color: "#67a7c5" },
  { id: "carbon-dioxide", name: "이산화탄소 (CO₂)", short: "CO₂", color: "#8b8fbe" }
];
const state = { stage: 0, score: 0, stageScore: 0, stageScores: [null, null, null], seconds: 0, timerId: null, placements: {}, cycles: {}, counts: {}, selected: null, draggingTool: null, attempts: 0, hintUsed: false, running: false, sound: true, budget: 0, remainingBudget: 0, atpBindings: {}, activeMission: "", lastMissionIndexes: {}, lastCountKeys: {} };
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const randomBetween = ([min, max]) => Math.floor(Math.random() * (max - min + 1)) + min;

function currentStage() { return stages[state.stage]; }

function chooseMission() {
  const variants = missionVariants[state.stage];
  let index = randomBetween([0, variants.length - 1]);
  if (variants.length > 1 && index === state.lastMissionIndexes[state.stage]) index = (index + 1) % variants.length;
  state.lastMissionIndexes[state.stage] = index;
  return variants[index];
}

function generateCounts() {
  let counts;
  let key;
  let attempts = 0;
  do {
    if (state.stage === 0) {
      const oxygenLow = randomBetween([1, 3]);
      const glucoseLow = randomBetween([1, 3]);
      counts = {
        oxygen: { outside: oxygenLow + randomBetween([3, 7]), inside: oxygenLow },
        glucose: { outside: glucoseLow, inside: glucoseLow + randomBetween([3, 7]) }
      };
    } else if (state.stage === 1) {
      const proteinLow = randomBetween([1, 3]);
      const wasteLow = randomBetween([1, 3]);
      const oxygenLow = randomBetween([1, 3]);
      counts = {
        protein: { outside: proteinLow + randomBetween([4, 8]), inside: proteinLow },
        waste: { outside: wasteLow, inside: wasteLow + randomBetween([4, 8]) },
        oxygen: { outside: oxygenLow + randomBetween([3, 7]), inside: oxygenLow }
      };
    } else {
      const sodiumLow = randomBetween([1, 2]);
      const potassiumLow = randomBetween([1, 3]);
      const oxygenLow = randomBetween([1, 3]);
      const glucoseLow = randomBetween([1, 3]);
      counts = {
        sodium: { outside: 3, inside: 6 },
        potassium: { outside: 6, inside: 3 },
        glucose: { outside: glucoseLow, inside: glucoseLow + randomBetween([3, 7]) },
        oxygen: { outside: oxygenLow + randomBetween([3, 7]), inside: oxygenLow }
      };
    }
    key = JSON.stringify(counts);
    attempts += 1;
  } while (key === state.lastCountKeys[state.stage] && attempts < 20);
  state.lastCountKeys[state.stage] = key;
  return counts;
}

function energyToolsForStage() {
  return currentStage().required.filter(toolId => ENERGY_TOOLS.has(toolId));
}

function clearEnergyBinding(toolId) {
  if (ENERGY_TOOLS.has(toolId)) delete state.atpBindings[toolId];
}

function calculateBudget() {
  if (state.stage === 0) {
    return ["oxygen", "glucose"].reduce((sum, id) => {
      const count = state.counts[id];
      return sum + Math.floor(Math.abs(count.outside - count.inside) / 2);
    }, 0);
  }
  if (state.stage === 1) {
    const protein = state.counts.protein;
    const waste = state.counts.waste;
    const oxygen = state.counts.oxygen;
    return Math.floor((protein.outside - protein.inside) / 2) + 1 + Math.floor((waste.inside - waste.outside) / 2) + 1 + Math.floor((oxygen.outside - oxygen.inside) / 2);
  }
  return 2 + Math.floor((state.counts.oxygen.outside - state.counts.oxygen.inside) / 2) + Math.floor((state.counts.glucose.inside - state.counts.glucose.outside) / 2);
}

function updateBudget() {
  const planned = Object.values(state.cycles).reduce((sum, value) => sum + value, 0);
  const available = Math.max(0, state.remainingBudget - planned);
  $("#budgetValue").textContent = available;
  $("#budgetBar").style.width = `${state.budget ? available / state.budget * 100 : 0}%`;
  updateEnergyStatus();
}

function updateEnergyStatus(mode = "ready") {
  const panel = $("#energyStatus");
  const energyTools = energyToolsForStage();
  panel.hidden = energyTools.length === 0;
  if (!energyTools.length) return;
  const placedTools = Object.values(state.placements);
  const placed = energyTools.filter(toolId => placedTools.includes(toolId));
  const bound = energyTools.filter(toolId => state.atpBindings[toolId]);
  const connected = placed.length === energyTools.length && bound.length === energyTools.length;
  panel.classList.toggle("connected", connected);
  panel.classList.toggle("using", mode === "using");
  panel.querySelector("b").textContent = mode === "using" ? "ATP 사용 중" : connected ? `ATP 장착 완료 ${bound.length}/${energyTools.length}` : placed.length ? `ATP를 장치에 끌어다 놓으세요 ${bound.length}/${energyTools.length}` : "에너지가 필요한 장치를 먼저 놓으세요";
  panel.querySelector("small").textContent = mode === "using" ? "ATP → ADP + Pi" : state.stage === 1 ? "세포내 유입·세포외 유출에 각각 결합" : "Na⁺/K⁺ 펌프에 직접 결합";
}

function renderMembraneStructure() {
  const layer = document.querySelector(".phospholipid-bilayer");
  const count = 54;
  const molecules = [];
  ["outer", "inner"].forEach(side => {
    for (let index = 0; index < count; index += 1) {
      const angle = index / count * Math.PI * 2;
      const radiusX = side === "outer" ? 48.2 : 42.2;
      const radiusY = side === "outer" ? 47.2 : 40.8;
      const x = 50 + Math.cos(angle) * radiusX;
      const y = 50 + Math.sin(angle) * radiusY;
      const rotation = angle * 180 / Math.PI + 90;
      molecules.push(`<span class="phospholipid ${side}" style="left:${x}%;top:${y}%;--lipid-angle:${rotation}deg"><b></b><i></i><i></i></span>`);
    }
  });
  layer.innerHTML = molecules.join("");
}

function showStageIntro() {
  const brief = stageBriefs[state.stage];
  clearInterval(state.timerId);
  state.timerId = null;
  $("#introKicker").textContent = brief.kicker;
  $("#introTitle").textContent = brief.title;
  $("#introSummary").textContent = state.activeMission || brief.summary;
  $("#introConceptTitle").textContent = brief.conceptTitle;
  $("#introConceptText").textContent = brief.conceptText;
  $("#introTip").textContent = brief.tip;
  $("#startButton").textContent = `${state.stage + 1}단계 시작`;
  $("#introModal").classList.remove("hidden");
}

function showGoalPreview() {
  const stage = currentStage();
  $("#goalPreviewList").innerHTML = stage.goals.map((goal, index) => `
    <div class="goal-line"><i>${index + 1}</i><span>${goal}</span></div>
  `).join("");
  $("#goalPreviewTitle").textContent = `${state.stage + 1}단계 성공 조건`;
  $("#goalPreviewMission").textContent = state.activeMission;
  $("#goalPreviewModal").classList.remove("hidden");
}

function beginStageAfterPreview() {
  $("#goalPreviewModal").classList.add("hidden");
  startTimer();
  tone(480, .08);
}

function setupStage() {
  const stage = currentStage();
  const diffusion = DIFFUSION_VARIANTS[randomBetween([0, DIFFUSION_VARIANTS.length - 1])];
  applyDiffusionVariant(stage, diffusion);
  clearInterval(state.timerId);
  state.seconds = stage.time;
  state.placements = {};
  state.cycles = Object.fromEntries(stage.slots.map(slot => [slot.id, 0]));
  state.selected = null;
  state.attempts = 0;
  state.hintUsed = false;
  state.running = false;
  state.stageScore = 0;
  state.atpBindings = {};
  state.activeMission = chooseMission();
  if (state.stage === 2) state.activeMission = "펌프로 Na⁺ 3개를 밖으로, K⁺ 2개를 안으로 이동해 Na⁺는 밖 12개 이상, K⁺는 안 5개 이상으로 만드세요.";
  $("#runButton").disabled = false;
  state.counts = generateCounts();
  state.budget = calculateBudget();
  state.remainingBudget = state.budget;
  $("#stageKicker").textContent = stage.kicker;
  $("#stageTitle").textContent = stage.title;
  $("#missionText").textContent = state.activeMission;
  $("#sideMission").textContent = state.activeMission;
  $("#hintText").hidden = true;
  $("#hintText").textContent = stage.hint;
  $("#hintButton").disabled = false;
  updateProgress();
  renderTools();
  renderSlots();
  renderMembraneStructure();
  renderCounts();
  renderParticles();
  renderGoals();
  updateBudget();
  updateTimer();
}

function applyDiffusionVariant(stage, diffusion) {
  const substance = stage.substances.find(item => item.id === "oxygen");
  if (!substance) return;
  Object.assign(substance, { name: diffusion.name, short: diffusion.short, color: diffusion.color });
  state.simpleDiffusionId = diffusion.id;
  state.diffusionName = diffusion.name;
}

function startTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.seconds -= 1;
    updateTimer();
    if (state.seconds <= 0) timeUp();
  }, 1000);
}

function updateTimer() {
  const max = currentStage().time;
  const minutes = String(Math.floor(state.seconds / 60)).padStart(2, "0");
  const seconds = String(Math.max(0, state.seconds % 60)).padStart(2, "0");
  $("#timer").textContent = `${minutes}:${seconds}`;
  $("#timeBar").style.width = `${Math.max(0, state.seconds) / max * 100}%`;
  $("#timerWrap").classList.toggle("warning", state.seconds <= 15);
}

function updateProgress() {
  $$('[data-step-dot]').forEach((dot, index) => {
    dot.classList.toggle("active", index === state.stage);
    dot.classList.toggle("done", index < state.stage);
  });
}

function toolVisual(id) {
  if (id === "simple") return `<svg viewBox="0 0 64 64" aria-hidden="true"><g class="lipid-mini"><circle cx="12" cy="13" r="5"/><path d="M10 18l-2 16m6-16 2 16"/><circle cx="28" cy="13" r="5"/><path d="M26 18l-2 16m6-16 2 16"/><circle cx="44" cy="13" r="5"/><path d="M42 18l-2 16m6-16 2 16"/><circle cx="20" cy="51" r="5"/><path d="M18 46l-2-16m6 16 2-16"/><circle cx="36" cy="51" r="5"/><path d="M34 46l-2-16m6 16 2-16"/><circle cx="52" cy="51" r="5"/><path d="M50 46l-2-16m6 16 2-16"/></g><path class="pass-arrow" d="M8 32h47m-7-7 7 7-7 7"/></svg>`;
  if (id === "facilitated") return `<svg viewBox="0 0 64 64" aria-hidden="true"><path class="protein-fill" d="M18 4c12 2 13 12 14 20 2-8 5-18 15-18 11 0 11 15 5 23-3 5-3 8 1 14 6 10-2 19-13 15-6-2-7-10-8-16-2 8-3 17-13 18C7 61 5 48 11 40c4-6 4-10 0-16C5 15 8 2 18 4z"/><path class="protein-pore" d="M31 8c-6 12-6 36 1 49"/><polygon class="substrate" points="32,23 39,27 39,35 32,39 25,35 25,27"/></svg>`;
  if (id.includes("channel")) return `<svg viewBox="0 0 64 64" aria-hidden="true"><path class="channel-fill" d="M13 3h15l4 12L36 3h15l-4 22 4 36H36l-4-14-4 14H13l4-36z"/><path class="channel-pore" d="M31 3v58"/><circle class="ion-bead" cx="32" cy="22" r="5"/><path class="pass-arrow" d="M32 30v22m-6-7 6 7 6-7"/></svg>`;
  if (id === "vesicle") return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="vesicle-ring" cx="32" cy="32" r="24"/><circle class="cargo" cx="25" cy="29" r="5"/><circle class="cargo" cx="39" cy="36" r="4"/></svg>`;
  if (id === "endocytosis") return `<svg viewBox="0 0 64 64" aria-hidden="true"><path class="membrane-curve" d="M3 16c18 0 17 8 29 8s12-8 29-8"/><path class="cup" d="M18 17c1 28 27 28 29 0"/><circle class="cargo" cx="32" cy="31" r="6"/><path class="pass-arrow" d="M32 2v11m-5-5 5 5 5-5"/></svg>`;
  if (id === "exocytosis") return `<svg viewBox="0 0 64 64" aria-hidden="true"><path class="membrane-curve" d="M3 48c18 0 17-8 29-8s12 8 29 8"/><circle class="vesicle-ring" cx="32" cy="27" r="15"/><circle class="cargo" cx="32" cy="27" r="5"/><path class="pass-arrow" d="M32 18V3m-5 6 5-6 5 6"/></svg>`;
  if (id === "na-k-pump") return `<svg viewBox="0 0 64 64" aria-hidden="true"><path class="pump-fill" d="M15 4c12-4 17 8 18 18C36 10 43 1 52 7c10 7 2 19-4 25 7 7 13 20 3 27-9 6-16-4-19-15-2 10-8 20-18 15-12-6-5-20 1-27C8 24 3 8 15 4z"/><path class="pump-core" d="M31 7c-5 12 6 18 0 27-5 8 4 15 1 24"/><path class="pump-arrow out" d="M22 37H6m6-6-6 6 6 6"/><path class="pump-arrow in" d="M43 27h15m-6-6 6 6-6 6"/></svg>`;
  if (id === "atp") return `<svg viewBox="0 0 64 64" aria-hidden="true"><polygon class="atp-star" points="32,3 39,20 58,18 45,32 57,49 38,45 32,62 25,45 6,49 19,32 6,18 25,20"/><text x="32" y="36">ATP</text></svg>`;
  return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="vesicle-ring" cx="32" cy="32" r="24"/></svg>`;
}

function renderTools() {
  const tools = [...currentStage().tools];
  tools.push({ id: "atp", name: "ATP 에너지", sub: energyToolsForStage().length ? "끌어서 필요한 장치에 장착" : "이 단계에서는 사용하는 장치 없음", color: "#b57b16" });
  $("#toolList").innerHTML = tools.map(tool => `
    <button class="tool-card" draggable="true" data-tool="${tool.id}" style="color:${tool.color}" type="button">
      <span class="tool-icon">${toolVisual(tool.id)}</span>
      <span><strong>${tool.name}</strong><small>${tool.sub}</small></span><b>↗</b>
    </button>`).join("");
  $$(".tool-card").forEach(card => {
    card.addEventListener("dragstart", event => { state.draggingTool = card.dataset.tool; event.dataTransfer.setData("text/plain", card.dataset.tool); });
    card.addEventListener("dragend", () => { state.draggingTool = null; $$(".drop-slot").forEach(slot => slot.classList.remove("over", "atp-over")); });
    card.addEventListener("click", () => selectTool(card.dataset.tool));
  });
}

function renderSlots() {
  $("#dropSlots").innerHTML = currentStage().slots.map(slot => `
    <div class="drop-slot" data-slot="${slot.id}" tabindex="0" role="button" aria-label="막의 빈 장치 자리">
      <span class="slot-question">?</span>
    </div>`).join("");
  $$(".drop-slot").forEach(slot => {
    slot.addEventListener("dragover", event => { event.preventDefault(); const acceptsATP = ENERGY_TOOLS.has(state.placements[slot.dataset.slot]); slot.classList.toggle("atp-over", state.draggingTool === "atp" && acceptsATP); slot.classList.toggle("atp-reject", state.draggingTool === "atp" && !acceptsATP); slot.classList.toggle("over", state.draggingTool !== "atp"); });
    slot.addEventListener("dragleave", () => slot.classList.remove("over", "atp-over", "atp-reject"));
    slot.addEventListener("drop", event => { event.preventDefault(); slot.classList.remove("over", "atp-over", "atp-reject"); const toolId = event.dataTransfer.getData("text/plain"); if (toolId === "atp") bindATPToSlot(slot.dataset.slot); else placeTool(slot.dataset.slot, toolId); });
    slot.addEventListener("click", () => { if (state.selected === "atp") bindATPToSlot(slot.dataset.slot); else if (state.selected) placeTool(slot.dataset.slot, state.selected); });
    slot.addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && state.selected) { if (state.selected === "atp") bindATPToSlot(slot.dataset.slot); else placeTool(slot.dataset.slot, state.selected); } });
  });
}

function selectTool(toolId) {
  if (toolId !== "atp" && Object.values(state.placements).includes(toolId)) return;
  state.selected = state.selected === toolId ? null : toolId;
  $$(".tool-card").forEach(card => card.classList.toggle("selected", card.dataset.tool === state.selected));
  if (state.selected) showToast(toolId === "atp" ? "ATP가 필요한 장치를 누르거나 ATP를 장치 위로 끌어다 놓으세요." : "이제 막의 빈칸을 눌러 주세요.");
}

function bindATPToSlot(slotId) {
  if (state.running) return;
  const toolId = state.placements[slotId];
  if (!toolId) { showToast("장치를 먼저 놓은 뒤 ATP를 끌어다 놓으세요."); return; }
  if (!ENERGY_TOOLS.has(toolId)) { showToast("이 장치는 ATP가 필요하지 않습니다."); return; }
  if (state.atpBindings[toolId]) { showToast("이미 ATP가 장착된 장치입니다."); return; }
  state.atpBindings[toolId] = true;
  state.selected = null;
  refreshPlacements();
  updateEnergyStatus();
  tone(720, .08);
  showToast(`${currentStage().tools.find(tool => tool.id === toolId)?.name || toolId}에 ATP를 장착했습니다.`);
}

function placeTool(slotId, toolId) {
  if (!toolId || toolId === "atp" || state.running) return;
  const stage = currentStage();
  const occupiedByAnother = state.placements[slotId] && state.placements[slotId] !== toolId;
  if (!state.placements[slotId] && Object.keys(state.placements).length >= stage.required.length) {
    showToast(`이 단계에는 장치 ${stage.required.length}개만 놓을 수 있어요.`);
    return;
  }
  Object.keys(state.placements).forEach(key => {
    if (state.placements[key] === toolId) { delete state.placements[key]; state.cycles[key] = 0; }
  });
  if (occupiedByAnother) {
    clearEnergyBinding(state.placements[slotId]);
    state.cycles[slotId] = 0;
  }
  state.placements[slotId] = toolId;
  state.selected = null;
  refreshPlacements();
  updateBudget();
  tone(540, .05);
}

function refreshPlacements() {
  const stage = currentStage();
  $$(".drop-slot").forEach(slotEl => {
    const slot = stage.slots.find(item => item.id === slotEl.dataset.slot);
    const toolId = state.placements[slot.id];
    const tool = stage.tools.find(item => item.id === toolId);
    const slotIndex = stage.slots.findIndex(item => item.id === slot.id);
    const orientation = [0, 90, 180, -90][slotIndex] ?? 0;
    slotEl.classList.toggle("has-device", Boolean(tool));
    slotEl.classList.toggle("holds-energy", ENERGY_TOOLS.has(toolId));
    slotEl.innerHTML = tool ? `
      <div class="installed-device ${tool.id}" style="color:${tool.color};${tool.id === "endocytosis" || tool.id === "exocytosis" ? `transform:rotate(${orientation}deg)` : ""}" title="${tool.name}">${toolVisual(tool.id)}<span class="sr-only">${tool.name}</span></div>
      ${ENERGY_TOOLS.has(toolId) ? `<button class="atp-bind-button ${state.atpBindings[toolId] ? "bound" : ""}" type="button" data-bind-atp="${toolId}" aria-label="${tool.name}에 ATP ${state.atpBindings[toolId] ? "결합 해제" : "결합"}"><span class="atp-token-shape">${toolVisual("atp")}</span><span>${state.atpBindings[toolId] ? "ATP 결합됨" : "ATP 클릭해 결합"}</span></button>` : ""}
      <div class="cycle-stepper"><button type="button" data-minus aria-label="수송 횟수 줄이기">−</button><b>${state.cycles[slot.id]}</b><button type="button" data-plus aria-label="수송 횟수 늘리기">＋</button><small>회 작동</small></div>
      <button class="remove-tool" type="button" aria-label="배치 취소">×</button>` : `<span class="slot-question">?</span>`;
    const remove = slotEl.querySelector(".remove-tool");
    if (remove) remove.addEventListener("click", event => { event.stopPropagation(); clearEnergyBinding(state.placements[slot.id]); delete state.placements[slot.id]; state.cycles[slot.id] = 0; refreshPlacements(); updateBudget(); });
    const bindAtp = slotEl.querySelector("[data-bind-atp]");
    if (bindAtp) bindAtp.addEventListener("click", event => { event.stopPropagation(); const energyTool = bindAtp.dataset.bindAtp; state.atpBindings[energyTool] = !state.atpBindings[energyTool]; refreshPlacements(); updateEnergyStatus(); tone(state.atpBindings[energyTool] ? 720 : 260, .08); });
    const minus = slotEl.querySelector("[data-minus]");
    const plus = slotEl.querySelector("[data-plus]");
    if (minus) minus.addEventListener("click", event => { event.stopPropagation(); changeCycles(slot.id, -1); });
    if (plus) plus.addEventListener("click", event => { event.stopPropagation(); changeCycles(slot.id, 1); });
  });
  $$(".tool-card").forEach(card => card.classList.toggle("used", card.dataset.tool !== "atp" && Object.values(state.placements).includes(card.dataset.tool)));
}

function changeCycles(slotId, change) {
  if (state.running) return;
  if (state.stage === 2 && state.placements[slotId] === "na-k-pump" && change > 0 && state.cycles[slotId] >= 2) {
    showToast("준비된 ATP가 2개라서 펌프는 2번까지 작동합니다.");
    return;
  }
  const planned = Object.values(state.cycles).reduce((sum, value) => sum + value, 0);
  if (change > 0 && planned >= state.remainingBudget) {
    showToast("쓸 수 있는 수송 횟수를 모두 배분했어요.");
    return;
  }
  state.cycles[slotId] = Math.max(0, state.cycles[slotId] + change);
  refreshPlacements();
  updateBudget();
}

function renderCounts(changed = false) {
  $("#countList").innerHTML = currentStage().substances.map(item => {
    const count = state.counts[item.id];
    return `<div class="count-row"><span class="matter-name" style="--matter:${item.color}"><i></i>${item.name}</span><b class="${changed ? "changed" : ""}">${count.outside}</b><b class="${changed ? "changed" : ""}">${count.inside}</b></div>`;
  }).join("");
}

function goalChecks() {
  if (state.stage === 0) return ["oxygen", "glucose"].map(id => Math.abs(state.counts[id].outside - state.counts[id].inside) <= 1);
  if (state.stage === 1) return [state.counts.protein.inside > state.counts.protein.outside, state.counts.waste.outside > state.counts.waste.inside, Math.abs(state.counts.oxygen.outside - state.counts.oxygen.inside) <= 1];
  return [state.counts.sodium.outside >= 12, state.counts.potassium.inside >= 5, Math.abs(state.counts.oxygen.outside - state.counts.oxygen.inside) <= 1, Math.abs(state.counts.glucose.outside - state.counts.glucose.inside) <= 1];
}

function renderGoals() {
  const checks = goalChecks();
  const diffusionLabel = state.diffusionName || "산소 (O₂)";
  const goals = currentStage().goals.map((goal, index) => {
    if (state.stage === 2 && index === 0) return "Na⁺: 세포 밖 3개 → 12개 이상";
    if (state.stage === 2 && index === 1) return "K⁺: 세포 안 3개 → 5개 이상";
    const diffusionGoal = (state.stage === 0 && index === 1) || (state.stage === 1 && index === 2) || (state.stage === 2 && index === 2);
    return diffusionGoal ? `${diffusionLabel}: 세포 안팎 개수 차이 1 이하` : goal;
  });
  $("#goalList").innerHTML = goals.map((goal, index) => `<div class="goal-line ${checks[index] ? "done" : ""}"><i>${checks[index] ? "✓" : ""}</i><span>${goal}</span></div>`).join("");
}

function calculateStageScore(checks = goalChecks()) {
  const passed = checks.filter(Boolean).length;
  const completion = checks.length ? passed / checks.length : 0;
  const timeRatio = Math.max(0, state.seconds) / currentStage().time;
  return Math.round(80 * completion + 20 * completion * timeRatio);
}

function commitStageScore() {
  state.stageScore = calculateStageScore();
  state.stageScores[state.stage] = Math.max(state.stageScores[state.stage] || 0, state.stageScore);
  state.score = state.stageScores.reduce((sum, score) => sum + (score || 0), 0);
}

function renderParticles() {
  const stage = currentStage();
  $("#outsideParticles").innerHTML = "";
  $("#insideParticles").innerHTML = "";
  $("#legend").innerHTML = stage.substances.map(item => `<span><i class="legend-shape ${item.id}" style="--dot:${item.color}"></i>${item.name}</span>`).join("");
  stage.substances.forEach((item, groupIndex) => {
    makeParticles($("#outsideParticles"), item, state.counts[item.id].outside, false, groupIndex);
    makeParticles($("#insideParticles"), item, state.counts[item.id].inside, true, groupIndex);
  });
}

function makeParticles(container, item, count, inside, groupIndex) {
  for (let index = 0; index < count; index += 1) {
    const dot = document.createElement("span");
    const carbonClass = item.id === "oxygen" && state.simpleDiffusionId === "carbon-dioxide" ? " carbon-dioxide" : "";
    dot.className = `particle ${item.id}${carbonClass}`;
    dot.innerHTML = particleGlyph(item.id, item.short);
    let x, y;
    if (inside) {
      const angle = (index * 137 + groupIndex * 51) * Math.PI / 180;
      const radius = 26 + (index % 3) * 16;
      x = 50 + Math.cos(angle) * radius * .72;
      y = 50 + Math.sin(angle) * radius * .64;
      if (x > 35 && x < 65 && y > 30 && y < 70) x += x < 50 ? -22 : 22;
    } else {
      const side = (index + groupIndex) % 4;
      const offset = 9 + ((index * 23 + groupIndex * 11) % 78);
      if (side === 0) { x = offset; y = 7 + groupIndex * 6; }
      if (side === 1) { x = 88 - groupIndex * 4; y = offset; }
      if (side === 2) { x = offset; y = 87 - groupIndex * 5; }
      if (side === 3) { x = 7 + groupIndex * 4; y = offset; }
    }
    dot.style.left = `${x}%`; dot.style.top = `${y}%`;
    const driftAngle = ((index * 83 + groupIndex * 47) % 360) * Math.PI / 180;
    const secondAngle = driftAngle + Math.PI * .72;
    const driftDistance = (inside ? 25 : 34) + (index % 4) * 7;
    dot.style.setProperty("--drift-x", `${Math.cos(driftAngle) * driftDistance}px`);
    dot.style.setProperty("--drift-y", `${Math.sin(driftAngle) * driftDistance}px`);
    dot.style.setProperty("--drift-x2", `${Math.cos(secondAngle) * driftDistance * .82}px`);
    dot.style.setProperty("--drift-y2", `${Math.sin(secondAngle) * driftDistance * .82}px`);
    dot.style.setProperty("--drift-time", `${3.5 + (index % 5) * .58}s`);
    dot.style.setProperty("--drift-delay", `${-(index % 6) * .8}s`);
    container.appendChild(dot);
  }
}

function particleGlyph(id, short) {
  if (id === "oxygen" && state.simpleDiffusionId === "carbon-dioxide") return `<i></i><i></i><i></i><b>C</b>`;
  if (id === "oxygen") return state.simpleDiffusionId === "carbon-dioxide" ? `<i></i><i></i><b>C</b>` : `<i></i><i></i><b>O₂</b>`;
  if (id === "glucose") return `<b>G</b>`;
  if (id === "protein") return `<i></i><i></i><i></i><b>P</b>`;
  if (id === "waste") return `<b>W</b>`;
  return `<b>${short}</b>`;
}

function runMembrane() {
  if (state.running) return;
  const stage = currentStage();
  const placedTools = Object.values(state.placements);
  if (placedTools.length < stage.required.length) { showToast(`필요한 장치 ${stage.required.length}개를 골라 놓으세요.`); tone(180, .08); return; }
  const plannedCycles = Object.values(state.cycles).reduce((sum, value) => sum + value, 0);
  if (plannedCycles === 0) { showToast("각 장치의 작동 횟수를 먼저 정해 주세요."); tone(180, .08); return; }
  state.attempts += 1;
  const correct = placedTools.length === stage.required.length && stage.required.every(toolId => placedTools.includes(toolId));
  if (!correct) {
    state.running = false;
    $("#runButton").disabled = false;
    showToast(stage === stages[2] ? "통로만으로는 농도 기울기를 거스를 수 없어요." : "물질의 크기와 이동 방향을 다시 살펴보세요.");
    document.querySelector(".cell-body").animate([{ transform: "translate(-50%,-50%)" }, { transform: "translate(-48%,-50%)" }, { transform: "translate(-52%,-50%)" }, { transform: "translate(-50%,-50%)" }], { duration: 360 });
    tone(160, .15);
    return;
  }
  const missingEnergy = energyToolsForStage().filter(toolId => !state.atpBindings[toolId]);
  if (missingEnergy.length) {
    const names = missingEnergy.map(toolId => stage.tools.find(tool => tool.id === toolId)?.name || toolId).join("·");
    showToast(`ATP 카드를 ${names} 장치 위로 끌어다 놓아 장착하세요.`);
    tone(190, .12);
    return;
  }
  state.running = true;
  clearInterval(state.timerId);
  $("#runButton").disabled = true;
  const activeMoves = stage.moves.map(move => {
    const slot = Object.keys(state.placements).find(slotId => state.placements[slotId] === move.tool);
    const cycles = state.cycles[slot] || 0;
    return { ...move, slot, cycles, amount: cycles * move.perCycle };
  }).filter(move => move.amount > 0);
  activeMoves.forEach(move => {
    const to = move.from === "outside" ? "inside" : "outside";
    state.counts[move.id][move.from] -= move.amount;
    state.counts[move.id][to] += move.amount;
  });
  state.remainingBudget -= plannedCycles;
  Object.keys(state.cycles).forEach(key => { state.cycles[key] = 0; });
  updateBudget();
  updateEnergyStatus("using");
  const animationDuration = animateTransport(activeMoves);
  tone(440, .08); setTimeout(() => tone(660, .12), 110);
  setTimeout(() => {
    renderCounts(true); renderParticles(); renderGoals(); refreshPlacements();
    document.querySelector(".cell-body").classList.remove("transporting", "detail-zoom");
    const cleared = goalChecks().every(Boolean);
    if (cleared) {
      clearInterval(state.timerId);
      setTimeout(() => showResult(true), 600);
    } else {
      clearInterval(state.timerId);
      setTimeout(() => showResult(false, "partial"), 600);
    }
  }, animationDuration + 180);
}

function animateTransport(moves) {
  const scene = $("#cellScene");
  const layer = $("#motionLayer");
  const sceneRect = scene.getBoundingClientRect();
  const cellRect = document.querySelector(".cell-body").getBoundingClientRect();
  document.querySelector(".cell-body").classList.add("transporting");
  if (moves.some(move => ENERGY_TOOLS.has(move.tool))) animateATPUse(layer, sceneRect, moves);
  const queues = moves.map(move => {
    const sourceId = move.from === "outside" ? "#outsideParticles" : "#insideParticles";
    return { move, sources: [...document.querySelectorAll(`${sourceId} .particle.${move.id}`)].slice(0, move.amount) };
  });
  const tasks = [];
  let timeline = 0;
  const pumpQueues = queues.filter(queue => queue.move.tool === "na-k-pump");
  const regularQueues = queues.filter(queue => queue.move.tool !== "na-k-pump");
  if (pumpQueues.length) {
    const sodiumQueue = pumpQueues.find(queue => queue.move.id === "sodium");
    const potassiumQueue = pumpQueues.find(queue => queue.move.id === "potassium");
    const sets = Math.max(0, Math.min(
      sodiumQueue ? Math.floor(sodiumQueue.sources.length / 3) : 0,
      potassiumQueue ? Math.floor(potassiumQueue.sources.length / 2) : 0
    ));
    for (let set = 0; set < sets; set += 1) {
      const setDelay = timeline;
      if (sodiumQueue) sodiumQueue.sources.slice(set * 3, set * 3 + 3).forEach((source, index) => tasks.push({ move: sodiumQueue.move, source, index, sourceCount: 3, delay: setDelay, travelTime: 650 }));
      if (potassiumQueue) potassiumQueue.sources.slice(set * 2, set * 2 + 2).forEach((source, index) => tasks.push({ move: potassiumQueue.move, source, index, sourceCount: 2, delay: setDelay, travelTime: 650 }));
      timeline += 650 + 260;
    }
  }
  regularQueues.forEach(queue => {
    const travelTime = queue.move.tool === "simple" ? 600 : queue.move.tool === "facilitated" ? 700 : queue.move.tool === "na-k-pump" ? 450 : 900;
    queue.sources.forEach((source, index) => {
      tasks.push({ move: queue.move, source, index, sourceCount: queue.sources.length, delay: timeline, travelTime });
      timeline += travelTime + 320;
    });
  });
  tasks.forEach((task, taskIndex) => {
      const { move, source, index } = task;
      const { delay, travelTime } = task;
      const rect = source.getBoundingClientRect();
      const clone = source.cloneNode(true);
      clone.classList.add("transport-particle");
      clone.dataset.molecule = move.id;
      if (move.tool === "endocytosis") clone.style.visibility = "hidden";
      const startX = rect.left - sceneRect.left;
      const startY = rect.top - sceneRect.top;
      let targetX;
      let targetY;
      const device = document.querySelector(`.drop-slot[data-slot="${move.slot}"] .installed-device`);
      const slot = document.querySelector(`.drop-slot[data-slot="${move.slot}"]`);
      const deviceRect = device ? device.getBoundingClientRect() : cellRect;
      const gateCenterX = deviceRect.left - sceneRect.left + deviceRect.width / 2;
      const gateCenterY = deviceRect.top - sceneRect.top + deviceRect.height / 2;
      const centerX = cellRect.left - sceneRect.left + cellRect.width / 2;
      const centerY = cellRect.top - sceneRect.top + cellRect.height / 2;
      const inwardLength = Math.min(cellRect.width, cellRect.height) * .25;
      const outwardLength = Math.min(sceneRect.width, sceneRect.height) * .25;
      const dx = gateCenterX - centerX;
      const dy = gateCenterY - centerY;
      const distance = Math.hypot(dx, dy) || 1;
      const normalX = dx / distance;
      const normalY = dy / distance;
      const spread = (index - (task.sourceCount - 1) / 2) * 24;
      const tangentX = -normalY;
      const tangentY = normalX;
      const laneGateX = gateCenterX + tangentX * spread;
      const laneGateY = gateCenterY + tangentY * spread;
      targetX = laneGateX + (move.from === "outside" ? -normalX * inwardLength : normalX * outwardLength) - rect.width / 2;
      targetY = laneGateY + (move.from === "outside" ? -normalY * inwardLength : normalY * outwardLength) - rect.height / 2;
      const gateX = laneGateX - rect.width / 2;
      const gateY = laneGateY - rect.height / 2;
      setTimeout(() => showTransportInset(move, gateX, gateY, sceneRect), delay);
      const outwardX = normalX * 30;
      const outwardY = normalY * 30;
      const entryX = gateX + (move.from === "outside" ? outwardX : -outwardX);
      const entryY = gateY + (move.from === "outside" ? outwardY : -outwardY);
      const exitX = gateX + (move.from === "outside" ? -outwardX : outwardX);
      const exitY = gateY + (move.from === "outside" ? -outwardY : outwardY);
      Object.assign(clone.style, { left: `${startX}px`, top: `${startY}px`, width: `${rect.width}px`, height: `${rect.height}px`, transform: "none", opacity: "0" });
      layer.appendChild(clone);
      if (move.tool === "endocytosis" || move.tool === "exocytosis") {
        document.querySelector(".cell-body").classList.add("detail-zoom");
        slot?.classList.add("focus-transport");
        setTimeout(() => slot?.classList.remove("focus-transport"), delay + travelTime + 180);
      }
      setTimeout(() => { source.style.opacity = "0"; tone(430 + taskIndex * 16, .045); }, delay);
      const transportFrames = [
        { left: `${startX}px`, top: `${startY}px`, transform: "scale(1)", opacity: move.tool === "exocytosis" ? 0 : 1, offset: 0 },
        { left: `${entryX}px`, top: `${entryY}px`, transform: "scale(1)", opacity: 1, offset: move.tool === "facilitated" ? .26 : .34 },
        { left: `${gateX}px`, top: `${gateY}px`, transform: "scale(.72)", opacity: .88, offset: move.tool === "facilitated" ? .42 : .5 },
        ...(move.tool === "facilitated" ? [{ left: `${gateX}px`, top: `${gateY}px`, transform: "scale(.72)", opacity: .88, offset: .64 }] : []),
        { left: `${exitX}px`, top: `${exitY}px`, transform: "scale(.9)", opacity: move.tool === "exocytosis" ? 0 : 1, offset: move.tool === "facilitated" ? .74 : .66 },
        { left: `${targetX}px`, top: `${targetY}px`, transform: "scale(1)", opacity: 1, offset: 1 }
      ];
      // 같은 경로의 입자들은 같은 타이밍에 애니메이션을 시작하고, 그룹 사이에서만 대기
      const playTransport = () => clone.animate(transportFrames, { duration: travelTime, easing: "cubic-bezier(.45,.05,.2,1)", fill: "forwards" });
      setTimeout(playTransport, delay);
      if (device) setTimeout(() => device.animate([{ filter: "brightness(1)" }, { filter: "brightness(1.55) drop-shadow(0 0 7px #fff2a8)" }, { filter: "brightness(1)" }], { duration: 420 }), delay + 420);
      if (false) {
        const speedLabel = document.createElement("b");
        speedLabel.className = `transport-speed ${move.tool}`;
        setTimeout(() => { speedLabel.textContent = move.tool === "simple" ? "단순확산 · 인지질 이중층" : "촉진확산 · 막 단백질"; }, delay);
        speedLabel.textContent = move.tool === "simple" ? "단순 확산 · 빠름" : "촉진 확산 · 느림";
        Object.assign(speedLabel.style, { left: `${gateX}px`, top: `${gateY - 26}px` });
        layer.appendChild(speedLabel);
        speedLabel.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)", offset: .25 }, { opacity: 1, offset: .75 }, { opacity: 0, transform: "translateY(-5px)" }], { duration: travelTime, delay, fill: "forwards" });
        setTimeout(() => speedLabel.remove(), delay + travelTime + 80);
      }
      if (state.stage === 1) animateVesicleProcess({ layer, clone, move, startX, startY, entryX, entryY, gateX, gateY, exitX, exitY, targetX, targetY, rect, delay, duration: travelTime });
      setTimeout(() => clone.remove(), travelTime + delay + 100);
  });
  return Math.max(0, timeline - 130);
}

function showTransportInset(move, gateX, gateY, sceneRect) {
  const inset = $("#membraneInset");
  const units = Array.from({ length: 13 }, () => `<span class="lipid-unit"><b></b><i></i><i></i></span>`).join("");
  const label = move.id === "glucose" ? "G" : move.id === "oxygen" && state.simpleDiffusionId === "carbon-dioxide" ? "CO₂" : move.id === "protein" ? "P" : move.id === "waste" ? "W" : "O₂";
  // 이 함수는 작업 큐의 입자 하나마다 호출되므로 확대창에도 하나만 표시
  const particleCount = 1;
  const particles = Array.from({ length: particleCount }, (_, index) => {
    const lane = (index - (particleCount - 1) / 2) * 34;
    return `<span class="inset-oxygen ${move.id === "glucose" ? "inset-glucose" : ""} ${move.id === "oxygen" && state.simpleDiffusionId === "carbon-dioxide" ? "inset-carbon-dioxide" : ""}" style="--lane-offset:${lane}px">${label}</span>`;
  }).join("");
  let detail = `<div class="bilayer-row outer">${units}</div><div class="bilayer-row inner">${units}</div>`;
  if (move.tool === "simple") detail += particles;
  if (move.tool === "facilitated") detail += `<span class="inset-protein"><i></i><b></b></span>${particles.replaceAll("inset-oxygen", "inset-oxygen protein-cargo")}`;
  if (move.tool === "endocytosis" || move.tool === "exocytosis") detail += `<span class="inset-vesicle"><i></i><b></b></span>`;
  if (move.tool === "na-k-pump") detail += `<div class="pump-set"><span class="pump-set-title">한 세트</span><span class="inset-ion sodium-ion">Na⁺</span><span class="inset-ion sodium-ion">Na⁺</span><span class="inset-ion sodium-ion">Na⁺</span><span class="inset-ion potassium-ion">K⁺</span><span class="inset-ion potassium-ion">K⁺</span></div>`;
  inset.innerHTML = detail;
  inset.className = `membrane-inset transport-inset ${move.tool} ${move.from === "inside" ? "reverse" : ""}`;
  const width = Math.min(330, sceneRect.width * .64);
  const left = Math.max(8, Math.min(sceneRect.width - width - 8, gateX - width / 2));
  const top = Math.max(8, Math.min(sceneRect.height - 168, gateY - 84));
  Object.assign(inset.style, { left: `${left}px`, top: `${top}px`, right: "auto", bottom: "auto", width: `${width}px` });
  inset.classList.remove("hidden");
  clearTimeout(showTransportInset.timer);
  showTransportInset.timer = setTimeout(() => inset.classList.add("hidden"), 1050);
}

function animateATPUse(layer, sceneRect, moves) {
  const poweredMoves = [...new Map(moves.filter(move => ENERGY_TOOLS.has(move.tool)).map(move => [move.tool, move])).values()];
  poweredMoves.forEach((poweredMove, poweredIndex) => {
    const device = document.querySelector(`.drop-slot[data-slot="${poweredMove.slot}"] .installed-device`);
    const atpSocket = document.querySelector(`.drop-slot[data-slot="${poweredMove.slot}"] .atp-bind-button`);
    if (!device || !atpSocket || !state.atpBindings[poweredMove.tool]) return;
    const from = atpSocket.getBoundingClientRect();
    const to = device.getBoundingClientRect();
    const startX = from.left - sceneRect.left + from.width / 2 - 18;
    const startY = from.top - sceneRect.top + from.height / 2 - 18;
    const targetX = to.left - sceneRect.left + to.width / 2 - 18;
    const targetY = to.top - sceneRect.top + to.height / 2 - 18;
    for (let cycle = 0; cycle < poweredMove.cycles; cycle += 1) {
    const token = document.createElement("span");
    token.className = "atp-transfer";
    token.innerHTML = "ATP";
    Object.assign(token.style, { left: `${startX}px`, top: `${startY}px` });
    layer.appendChild(token);
    const delay = poweredIndex * 180 + cycle * 520;
    token.animate([
      { left: `${startX}px`, top: `${startY}px`, opacity: 0, transform: "scale(.5)" },
      { opacity: 1, transform: "scale(1)", offset: .18 },
      { left: `${targetX}px`, top: `${targetY}px`, opacity: 1, transform: "scale(.85)", offset: .72 },
      { left: `${targetX}px`, top: `${targetY}px`, opacity: 0, transform: "scale(1.5)" }
    ], { duration: 780, delay, fill: "forwards", easing: "ease-in-out" });
    const label = document.createElement("b");
    label.className = "atp-reaction";
    label.textContent = "ATP → ADP + Pi";
    Object.assign(label.style, { left: `${targetX - 18}px`, top: `${targetY - 24}px` });
    layer.appendChild(label);
    label.animate([{ opacity: 0 }, { opacity: 1, offset: .35 }, { opacity: 1, offset: .72 }, { opacity: 0 }], { duration: 820, delay: delay + 300, fill: "forwards" });
    setTimeout(() => { token.remove(); label.remove(); }, delay + 1200);
    }
  });
}

function animateVesicleProcess(data) {
  const { layer, move, startX, startY, entryX, entryY, gateX, gateY, exitX, exitY, targetX, targetY, rect, delay, duration } = data;
  const shell = document.createElement("span");
  shell.className = `vesicle-shell ${move.from === "inside" ? "exocytosis" : "endocytosis"}`;
  shell.innerHTML = `<i></i><i></i><i></i>`;
  Object.assign(shell.style, { left: `${startX - 7}px`, top: `${startY - 7}px`, width: `${rect.width + 14}px`, height: `${rect.height + 14}px`, opacity: "0" });
  layer.appendChild(shell);
  const path = [
    { left: `${startX - 7}px`, top: `${startY - 7}px`, opacity: move.from === "inside" ? 1 : 0, transform: "scale(.8)", offset: 0 },
    { left: `${entryX - 7}px`, top: `${entryY - 7}px`, opacity: 1, transform: "scale(1)", offset: .34 },
    { left: `${gateX - 7}px`, top: `${gateY - 7}px`, opacity: 1, transform: "scale(1.18)", offset: .5 },
    { left: `${exitX - 7}px`, top: `${exitY - 7}px`, opacity: move.from === "inside" ? 0 : 1, transform: move.from === "inside" ? "scale(1.7)" : "scale(1)", offset: .66 },
    { left: `${targetX - 7}px`, top: `${targetY - 7}px`, opacity: move.from === "inside" ? 0 : 1, transform: "scale(.9)", offset: 1 }
  ];
  shell.animate(path, { duration, delay, easing: "cubic-bezier(.45,.05,.2,1)", fill: "forwards" });
  const caption = document.createElement("b");
  caption.className = "vesicle-caption";
  caption.textContent = move.from === "outside"
    ? "세포내 유입 · 소낭이 물질을 감싸 안으로 들어옵니다"
    : "세포외 유출 · 소낭이 막과 융합해 물질을 밖으로 내보냅니다";
  Object.assign(caption.style, { left: `${gateX - 82}px`, top: `${gateY - 70}px` });
  layer.appendChild(caption);
  caption.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)", offset: .2 }, { opacity: 1, offset: .78 }, { opacity: 0, transform: "translateY(-5px)" }], { duration: Math.min(duration, 2200), delay: delay + 160, fill: "forwards" });
  const fusion = document.createElement("span");
  fusion.className = "fusion-effect";
  fusion.innerHTML = `<i></i><b>${move.from === "inside" ? "소낭-세포막 융합" : "막이 물질을 감싸 소낭 형성"}</b>`;
  Object.assign(fusion.style, { left: `${gateX}px`, top: `${gateY}px` });
  layer.appendChild(fusion);
  fusion.animate([{ opacity: 0, transform: "scale(.4)" }, { opacity: 1, transform: "scale(1)", offset: .35 }, { opacity: 1, transform: "scale(1.08)", offset: .7 }, { opacity: 0, transform: "scale(1.35)" }], { duration: 720, delay: delay + duration * .35, fill: "forwards" });
  setTimeout(() => { shell.remove(); fusion.remove(); caption.remove(); }, duration + delay + 180);
}

function timeUp() {
  clearInterval(state.timerId);
  state.seconds = 0;
  updateTimer();
  showHint();
  tone(120, .35);
  showResult(false, "time");
}

function showResult(success, failure = "time") {
  const last = state.stage === stages.length - 1;
  const checks = goalChecks();
  const passed = checks.filter(Boolean).length;
  commitStageScore();
  const loungeMessage = last && state.score > 250 ? " 생명과학 라운지에 캡처해서 자랑해 보세요!" : "";
  $("#resultMark").textContent = success ? (last ? "★" : "✓") : `${passed}/${checks.length}`;
  $("#resultKicker").textContent = success ? (last ? "ALL ROUNDS COMPLETE" : "STAGE CLEAR") : failure === "time" ? "TIME OVER · HINT" : "STAGE RESULT";
  $("#resultTitle").textContent = success ? (last ? "세포의 균형을 되찾았어요" : "성공 조건을 모두 달성했어요") : `${checks.length}개 중 ${passed}개 조건 달성`;
  $("#resultMessage").textContent = success ? (last ? `세 단계 완료! 총점은 ${state.score}점입니다.${loungeMessage}` : `남은 시간까지 반영해 ${state.stageScore}점을 받았습니다.`) : `${state.stageScore}점을 받았습니다. 아래 힌트를 확인한 뒤 재도전하거나 다음 단계로 이동할 수 있습니다.${loungeMessage}`;
  $("#resultFact").textContent = success ? currentStage().fact : currentStage().hint;
  document.querySelector(".score-row span").textContent = `총점 · 이번 단계 ${state.stageScore}/100`;
  const scoreCap = (state.stage + 1) * 100;
  $("#scoreValue").textContent = `${state.score}/${scoreCap}`;
  $("#nextButton").textContent = last ? "전체 결과 마치기" : `${state.stage + 2}단계로 이동`;
  $("#retryButton").hidden = success;
  $("#resultModal").classList.remove("hidden");
}

function nextAction() {
  $("#resultModal").classList.add("hidden");
  if (state.stage < stages.length - 1) state.stage += 1;
  else { state.stage = 0; state.score = 0; state.stageScores = [null, null, null]; }
  setupStage();
  showStageIntro();
}

function retryStage() {
  $("#resultModal").classList.add("hidden");
  setupStage();
  showStageIntro();
}

function resetPlacement() {
  state.placements = {}; state.selected = null;
  state.atpBindings = {};
  Object.keys(state.cycles).forEach(key => { state.cycles[key] = 0; });
  refreshPlacements();
  updateBudget();
  $$(".tool-card").forEach(card => card.classList.remove("selected"));
}

function showHint() {
  $("#hintText").hidden = false;
  $("#hintButton").disabled = true;
  state.hintUsed = true;
}

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function tone(frequency, duration) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = tone.context || (tone.context = new AudioContext());
    const oscillator = context.createOscillator(); const gain = context.createGain();
    oscillator.frequency.value = frequency; gain.gain.setValueAtTime(.04, context.currentTime); gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + duration);
    oscillator.connect(gain); gain.connect(context.destination); oscillator.start(); oscillator.stop(context.currentTime + duration);
  } catch (_) { /* 소리를 지원하지 않는 환경에서는 조용히 진행한다. */ }
}

$("#startButton").addEventListener("click", () => {
  $("#introModal").classList.add("hidden");
  showGoalPreview();
  clearTimeout(state.goalPreviewTimer);
  state.goalPreviewTimer = setTimeout(beginStageAfterPreview, 5000);
});
$("#runButton").addEventListener("click", runMembrane);
$("#resetButton").addEventListener("click", resetPlacement);
$("#hintButton").addEventListener("click", showHint);
$("#nextButton").addEventListener("click", nextAction);
$("#retryButton").addEventListener("click", retryStage);
$("#soundButton").addEventListener("click", () => {
  state.sound = !state.sound;
  $("#soundButton").textContent = state.sound ? "소리 켬" : "소리 끔";
  $("#soundButton").setAttribute("aria-pressed", String(state.sound));
  $("#soundButton").setAttribute("aria-label", state.sound ? "효과음 끄기" : "효과음 켜기");
  if (state.sound) tone(520, .06);
});

setupStage();
showStageIntro();
