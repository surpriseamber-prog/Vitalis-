

const COLORS = {
  bg: "#0a0f1e",
  surface: "#111827",
  card: "#162032",
  border: "#1e3a5f",
  accent: "#00d4ff",
  accentGlow: "rgba(0,212,255,0.15)",
  green: "#00e5a0",
  amber: "#f59e0b",
  red: "#f43f5e",
  purple: "#a855f7",
  text: "#e2f0ff",
  muted: "#6b8aaa",
};

const FONT = {
  display: "'Orbitron', monospace",
  body: "'DM Sans', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const FAMILY_MEMBERS = [
  { id: 1, name: "Dad", age: 52, avatar: "👨", color: "#00d4ff" },
  { id: 2, name: "Mom", age: 49, avatar: "👩", color: "#a855f7" },
  { id: 3, name: "Jake", age: 24, avatar: "🧑", color: "#00e5a0" },
  { id: 4, name: "Sara", age: 19, avatar: "👧", color: "#f59e0b" },
];

const METRICS = {
  1: {
    vitals: { hr: 68, bp: "122/78", spo2: 98, temp: 98.4, hrv: 52, rhr: 58 },
    vo2max: 44.2,
    weight: 185,
    bmi: 25.1,
    score: 78,
    trend: "+3",
    bloodwork: [
      { name: "Glucose", val: 94, unit: "mg/dL", range: [70, 99], status: "good" },
      { name: "Total Cholesterol", val: 198, unit: "mg/dL", range: [0, 200], status: "good" },
      { name: "HDL", val: 52, unit: "mg/dL", range: [40, 999], status: "good" },
      { name: "LDL", val: 128, unit: "mg/dL", range: [0, 130], status: "good" },
      { name: "Triglycerides", val: 145, unit: "mg/dL", range: [0, 150], status: "good" },
      { name: "Testosterone", val: 420, unit: "ng/dL", range: [300, 900], status: "good" },
      { name: "Vitamin D", val: 28, unit: "ng/mL", range: [30, 100], status: "low" },
      { name: "Ferritin", val: 42, unit: "ng/mL", range: [30, 400], status: "good" },
      { name: "TSH", val: 2.1, unit: "mIU/L", range: [0.4, 4.0], status: "good" },
      { name: "hsCRP", val: 1.8, unit: "mg/L", range: [0, 1.0], status: "elevated" },
    ],
    hormones: [
      { name: "Testosterone", val: 420, optimal: 700, unit: "ng/dL" },
      { name: "Cortisol (AM)", val: 18, optimal: 20, unit: "μg/dL" },
      { name: "Insulin", val: 8, optimal: 5, unit: "μIU/mL" },
      { name: "IGF-1", val: 140, optimal: 200, unit: "ng/mL" },
    ],
    supplements: [
      { name: "Vitamin D3", dose: "5000 IU", time: "Morning", status: "taken" },
      { name: "Omega-3", dose: "2g EPA/DHA", time: "Morning", status: "taken" },
      { name: "Magnesium Glycinate", dose: "400mg", time: "Evening", status: "pending" },
      { name: "Creatine", dose: "5g", time: "Pre-workout", status: "taken" },
      { name: "Zinc", dose: "30mg", time: "Evening", status: "pending" },
    ],
    workouts: [
      { day: "Mon", type: "Strength", duration: 62, calories: 380, completed: true },
      { day: "Tue", type: "Zone 2 Cardio", duration: 45, calories: 290, completed: true },
      { day: "Wed", type: "Rest", duration: 0, calories: 0, completed: true },
      { day: "Thu", type: "Strength", duration: 58, calories: 360, completed: true },
      { day: "Fri", type: "HIIT", duration: 35, calories: 420, completed: false },
      { day: "Sat", type: "Long Run", duration: 75, calories: 560, completed: false },
      { day: "Sun", type: "Rest", duration: 0, calories: 0, completed: false },
    ],
    meals: [
      { meal: "Breakfast", items: "Eggs (3), Oatmeal, Blueberries", cal: 480, protein: 32, carbs: 52, fat: 18 },
      { meal: "Lunch", items: "Grilled Salmon, Quinoa, Broccoli", cal: 620, protein: 48, carbs: 45, fat: 22 },
      { meal: "Snack", items: "Greek Yogurt, Almonds", cal: 280, protein: 18, carbs: 20, fat: 14 },
      { meal: "Dinner", items: "Chicken Thighs, Sweet Potato, Spinach", cal: 710, protein: 52, carbs: 58, fat: 24 },
    ],
    imaging: [
      { type: "Chest X-Ray", date: "2024-08", finding: "Clear, no abnormalities", status: "normal" },
      { type: "Coronary Calcium Score", date: "2024-03", finding: "CAC Score: 12 (low risk)", status: "normal" },
      { type: "Lumbar MRI", date: "2023-11", finding: "Mild L4-L5 disc bulge", status: "monitor" },
    ],
    genome: [
      { gene: "APOE", variant: "ε3/ε3", impact: "Average cardiovascular risk", status: "neutral" },
      { gene: "MTHFR", variant: "C677T het", impact: "Reduced folate metabolism", status: "caution" },
      { gene: "ACE", variant: "I/D", impact: "Moderate endurance advantage", status: "positive" },
      { gene: "ACTN3", variant: "R/X", impact: "Mixed power/endurance profile", status: "neutral" },
    ],
    recommendations: [
      { priority: "high", category: "Labs", text: "Vitamin D critically low — increase D3 to 8,000 IU/day, retest in 90 days" },
      { priority: "high", category: "Inflammation", text: "hsCRP elevated at 1.8 mg/L — reduce processed foods, consider fish oil increase" },
      { priority: "medium", category: "Hormones", text: "Testosterone at low-normal; consider sleep optimization and zinc supplementation" },
      { priority: "medium", category: "Training", text: "Increase Zone 2 cardio to 3x/week based on VO₂max of 44.2 (good, target 50+)" },
      { priority: "low", category: "Imaging", text: "Monitor L4-L5 disc — incorporate daily hip flexor mobility work" },
    ],
  },
};

// Fill other family members with simplified data
[2, 3, 4].forEach((id) => {
  METRICS[id] = {
    ...METRICS[1],
    vitals: { hr: 62 + id * 3, bp: "118/76", spo2: 99, temp: 98.2, hrv: 58 + id, rhr: 55 },
    score: 82 + id,
    trend: "+1",
    vo2max: 38 + id * 2,
    weight: 130 + id * 15,
  };
});

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: "◈" },
  { id: "vitals", label: "Vitals", icon: "♡" },
  { id: "bloodwork", label: "Blood Work", icon: "⬡" },
  { id: "hormones", label: "Hormones", icon: "⚗" },
  { id: "imaging", label: "Imaging", icon: "◉" },
  { id: "genome", label: "Genome", icon: "⟨⟩" },
  { id: "workouts", label: "Workouts", icon: "⚡" },
  { id: "nutrition", label: "Nutrition", icon: "◍" },
  { id: "supplements", label: "Supplements", icon: "✦" },
  { id: "insights", label: "AI Insights", icon: "◆" },
];

// ─── Micro Components ─────────────────────────────────────────────────────────

const StatusDot = ({ status }) => {
  const c = status === "good" || status === "normal" || status === "positive" ? COLORS.green
    : status === "low" || status === "elevated" || status === "caution" || status === "monitor" ? COLORS.amber
    : COLORS.red;
  return <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: c, marginRight: 6, boxShadow: `0 0 6px ${c}` }} />;
};

const Card = ({ children, style = {}, glow }) => (
  <div style={{
    background: COLORS.card,
    border: `1px solid ${glow ? COLORS.accent : COLORS.border}`,
    borderRadius: 16,
    padding: "20px 24px",
    boxShadow: glow ? `0 0 24px ${COLORS.accentGlow}` : "none",
    ...style,
  }}>{children}</div>
);

const Label = ({ children, color }) => (
  <span style={{
    fontFamily: FONT.mono, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
    textTransform: "uppercase", color: color || COLORS.accent,
    background: `${color || COLORS.accent}18`, padding: "2px 8px", borderRadius: 4,
  }}>{children}</span>
);

const HealthScore = ({ score, trend, size = 120 }) => {
  const r = (size / 2) - 10;
  const circ = 2 * Math.PI * r;
  const pct = score / 100;
  const color = score >= 80 ? COLORS.green : score >= 60 ? COLORS.amber : COLORS.red;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={COLORS.border} strokeWidth={8} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={8}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
          strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontFamily: FONT.display, fontSize: size === 120 ? 28 : 20, fontWeight: 700, color, lineHeight: 1 }}>{score}</div>
        <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.green, marginTop: 2 }}>{trend}</div>
      </div>
    </div>
  );
};

const MiniBar = ({ val, min, max, color, label, unit }) => {
  const pct = Math.min(100, Math.max(0, ((val - min) / (max - min)) * 100));
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontFamily: FONT.body, fontSize: 13, color: COLORS.text }}>{label}</span>
        <span style={{ fontFamily: FONT.mono, fontSize: 13, color }}>
          {val} <span style={{ color: COLORS.muted, fontSize: 11 }}>{unit}</span>
        </span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: COLORS.border, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 3, background: color, boxShadow: `0 0 8px ${color}` }} />
      </div>
    </div>
  );
};

// ─── Tab Panels ───────────────────────────────────────────────────────────────

function Dashboard({ member, metrics }) {
  const m = metrics;
  const { vitals } = m;
  const totalCal = m.meals?.reduce((a, b) => a + b.cal, 0) || 0;
  const totalProtein = m.meals?.reduce((a, b) => a + b.protein, 0) || 0;

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* Hero Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        <Card glow style={{ gridColumn: "1 / 2" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <HealthScore score={m.score} trend={m.trend} size={110} />
            <div>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Health Score</div>
              <div style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text, lineHeight: 1.6 }}>
                VO₂ Max: <b style={{ color: COLORS.accent }}>{m.vo2max}</b><br/>
                Weight: <b style={{ color: COLORS.accent }}>{m.weight} lbs</b><br/>
                BMI: <b style={{ color: COLORS.green }}>{m.bmi}</b>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Live Vitals</div>
          {[
            { label: "Heart Rate", val: `${vitals.hr} bpm`, color: COLORS.red },
            { label: "Blood Pressure", val: vitals.bp, color: COLORS.accent },
            { label: "SpO₂", val: `${vitals.spo2}%`, color: COLORS.green },
            { label: "HRV", val: `${vitals.hrv} ms`, color: COLORS.purple },
            { label: "Resting HR", val: `${vitals.rhr} bpm`, color: COLORS.amber },
          ].map(v => (
            <div key={v.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontFamily: FONT.body, fontSize: 13, color: COLORS.muted }}>{v.label}</span>
              <span style={{ fontFamily: FONT.mono, fontSize: 13, color: v.color, fontWeight: 600 }}>{v.val}</span>
            </div>
          ))}
        </Card>

        <Card>
          <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Today's Nutrition</div>
          <div style={{ fontFamily: FONT.display, fontSize: 32, color: COLORS.accent, marginBottom: 4 }}>{totalCal}</div>
          <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, marginBottom: 16 }}>CALORIES</div>
          <MiniBar val={totalProtein} min={0} max={200} color={COLORS.green} label="Protein" unit="g" />
          <MiniBar val={totalCal * 0.45 / 4} min={0} max={300} color={COLORS.amber} label="Carbs" unit="g" />
          <MiniBar val={totalCal * 0.30 / 9} min={0} max={100} color={COLORS.purple} label="Fat" unit="g" />
        </Card>
      </div>

      {/* Recommendations preview */}
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
          ◆ AI Priority Recommendations
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {m.recommendations?.slice(0, 4).map((r, i) => (
            <div key={i} style={{
              background: COLORS.surface, borderRadius: 10, padding: "12px 14px",
              borderLeft: `3px solid ${r.priority === "high" ? COLORS.red : r.priority === "medium" ? COLORS.amber : COLORS.green}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <Label color={r.priority === "high" ? COLORS.red : r.priority === "medium" ? COLORS.amber : COLORS.green}>{r.priority}</Label>
                <Label>{r.category}</Label>
              </div>
              <div style={{ fontFamily: FONT.body, fontSize: 12, color: COLORS.text, lineHeight: 1.5 }}>{r.text}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly workout summary */}
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Weekly Training</div>
        <div style={{ display: "flex", gap: 8 }}>
          {m.workouts?.map((w, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center" }}>
              <div style={{
                height: 60, borderRadius: 8,
                background: w.completed ? (w.type === "Rest" ? COLORS.border : COLORS.accent + "22") : COLORS.surface,
                border: `1px solid ${w.completed ? COLORS.accent : COLORS.border}`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                marginBottom: 6,
              }}>
                {w.type !== "Rest" && w.duration > 0 && (
                  <div style={{ fontFamily: FONT.mono, fontSize: 11, color: w.completed ? COLORS.accent : COLORS.muted }}>{w.duration}m</div>
                )}
                {w.type === "Rest" && <div style={{ fontSize: 16 }}>—</div>}
              </div>
              <div style={{ fontFamily: FONT.mono, fontSize: 9, color: COLORS.muted }}>{w.day}</div>
              <div style={{ fontFamily: FONT.body, fontSize: 9, color: COLORS.text, marginTop: 2 }}>{w.type.split(" ")[0]}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Vitals({ metrics }) {
  const { vitals, vo2max, weight, bmi } = metrics;
  const pulse = useRef(null);

  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t++;
      if (pulse.current) {
        pulse.current.style.opacity = Math.sin(t * 0.3) > 0.5 ? "1" : "0.3";
      }
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { label: "Heart Rate", val: vitals.hr, unit: "BPM", icon: "♡", color: COLORS.red, note: "Normal resting" },
          { label: "Blood Pressure", val: vitals.bp, unit: "mmHg", icon: "⟳", color: COLORS.accent, note: "Optimal" },
          { label: "SpO₂", val: `${vitals.spo2}%`, unit: "Saturation", icon: "◎", color: COLORS.green, note: "Excellent" },
          { label: "HRV", val: `${vitals.hrv}ms`, unit: "Heart Rate Variability", icon: "⌇", color: COLORS.purple, note: "Good recovery" },
          { label: "Resting HR", val: `${vitals.rhr}`, unit: "BPM at rest", icon: "◈", color: COLORS.amber, note: "Athletic range" },
          { label: "Body Temp", val: `${vitals.temp}°F`, unit: "Fahrenheit", icon: "◉", color: COLORS.accent, note: "Normal" },
        ].map(v => (
          <Card key={v.label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span style={{ fontSize: 22, color: v.color }}>{v.icon}</span>
              <Label color={v.color}>Live</Label>
            </div>
            <div style={{ fontFamily: FONT.display, fontSize: 32, color: v.color, margin: "10px 0 4px", lineHeight: 1 }}>{v.val}</div>
            <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>{v.unit}</div>
            <div style={{ fontFamily: FONT.body, fontSize: 12, color: COLORS.text, marginTop: 8 }}>{v.note}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Card>
          <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>VO₂ Max</div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
            <div style={{ fontFamily: FONT.display, fontSize: 52, color: COLORS.green, lineHeight: 1 }}>{vo2max}</div>
            <div style={{ fontFamily: FONT.mono, fontSize: 12, color: COLORS.muted, marginBottom: 8 }}>mL/kg/min</div>
          </div>
          <div style={{ marginTop: 16 }}>
            {[
              { label: "Poor", range: "< 35", active: false },
              { label: "Fair", range: "35–41", active: false },
              { label: "Good", range: "42–48", active: true },
              { label: "Excellent", range: "49–56", active: false },
              { label: "Elite", range: "57+", active: false },
            ].map(b => (
              <div key={b.label} style={{
                display: "inline-flex", flexDirection: "column", alignItems: "center",
                padding: "6px 14px", marginRight: 6, borderRadius: 8,
                background: b.active ? COLORS.green + "22" : COLORS.surface,
                border: `1px solid ${b.active ? COLORS.green : COLORS.border}`,
              }}>
                <span style={{ fontFamily: FONT.body, fontSize: 11, color: b.active ? COLORS.green : COLORS.muted }}>{b.label}</span>
                <span style={{ fontFamily: FONT.mono, fontSize: 9, color: COLORS.muted }}>{b.range}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Body Composition</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <div style={{ fontFamily: FONT.display, fontSize: 40, color: COLORS.accent }}>{weight}</div>
              <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted }}>POUNDS</div>
            </div>
            <div>
              <div style={{ fontFamily: FONT.display, fontSize: 40, color: bmi > 24.9 ? COLORS.amber : COLORS.green }}>{bmi}</div>
              <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted }}>BMI</div>
            </div>
          </div>
          <div style={{ marginTop: 16, fontFamily: FONT.body, fontSize: 12, color: COLORS.muted, lineHeight: 1.6 }}>
            Next measurement: DEXA scan scheduled for advanced body composition analysis including visceral fat and bone density.
          </div>
        </Card>
      </div>
    </div>
  );
}

function BloodWork({ metrics }) {
  const bw = metrics.bloodwork || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Blood Panel Results</div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Marker", "Result", "Range", "Status", "Trend"].map(h => (
                <th key={h} style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted, textAlign: "left", padding: "0 16px 12px 0", letterSpacing: "0.08em", borderBottom: `1px solid ${COLORS.border}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bw.map((b, i) => {
              const color = b.status === "good" ? COLORS.green : b.status === "elevated" ? COLORS.amber : COLORS.red;
              const rangeStr = b.range[0] === 0 ? `< ${b.range[1]}` : `${b.range[0]}–${b.range[1]}`;
              return (
                <tr key={i} style={{ borderBottom: `1px solid ${COLORS.border}22` }}>
                  <td style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text, padding: "12px 16px 12px 0" }}>{b.name}</td>
                  <td style={{ fontFamily: FONT.mono, fontSize: 14, color, padding: "12px 16px 12px 0", fontWeight: 600 }}>
                    {b.val} <span style={{ fontSize: 10, color: COLORS.muted }}>{b.unit}</span>
                  </td>
                  <td style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, padding: "12px 16px 12px 0" }}>{rangeStr}</td>
                  <td style={{ padding: "12px 16px 12px 0" }}>
                    <StatusDot status={b.status} />
                    <span style={{ fontFamily: FONT.mono, fontSize: 11, color }}>{b.status}</span>
                  </td>
                  <td style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, padding: "12px 0" }}>—</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function Hormones({ metrics }) {
  const h = metrics.hormones || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>Hormone Panel</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {h.map((hr, i) => {
            const pct = Math.min(100, (hr.val / (hr.optimal * 1.5)) * 100);
            const optPct = (hr.optimal / (hr.optimal * 1.5)) * 100;
            const color = Math.abs(hr.val - hr.optimal) / hr.optimal < 0.2 ? COLORS.green : COLORS.amber;
            return (
              <Card key={i} style={{ background: COLORS.surface }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text, fontWeight: 600 }}>{hr.name}</span>
                  <span style={{ fontFamily: FONT.mono, fontSize: 13, color }}>{hr.val} <span style={{ color: COLORS.muted, fontSize: 10 }}>{hr.unit}</span></span>
                </div>
                <div style={{ position: "relative", height: 10, background: COLORS.border, borderRadius: 5, overflow: "visible", marginBottom: 8 }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 5, boxShadow: `0 0 8px ${color}` }} />
                  <div style={{ position: "absolute", top: -3, left: `${optPct}%`, width: 2, height: 16, background: COLORS.accent, borderRadius: 1 }} />
                </div>
                <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted }}>Optimal: {hr.optimal} {hr.unit}</div>
              </Card>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function Imaging({ metrics }) {
  const imgs = metrics.imaging || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {imgs.map((img, i) => (
        <Card key={i}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
            <div style={{
              width: 80, height: 80, borderRadius: 12, background: COLORS.surface,
              border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 32, flexShrink: 0,
            }}>
              {img.type.includes("X-Ray") ? "⚕" : img.type.includes("MRI") ? "⊛" : "◉"}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontFamily: FONT.body, fontSize: 16, color: COLORS.text, fontWeight: 600 }}>{img.type}</span>
                <StatusDot status={img.status} />
                <Label color={img.status === "normal" ? COLORS.green : COLORS.amber}>{img.status}</Label>
              </div>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, marginBottom: 8 }}>DATE: {img.date}</div>
              <div style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text }}>{img.finding}</div>
            </div>
          </div>
        </Card>
      ))}
      <Card style={{ borderStyle: "dashed", borderColor: COLORS.border, textAlign: "center", padding: 40 }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>+</div>
        <div style={{ fontFamily: FONT.mono, fontSize: 12, color: COLORS.muted }}>Upload new imaging results</div>
        <div style={{ fontFamily: FONT.body, fontSize: 12, color: COLORS.muted, marginTop: 4 }}>DICOM, PDF, or image files</div>
      </Card>
    </div>
  );
}

function Genome({ metrics }) {
  const g = metrics.genome || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Genomic Variants</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {g.map((gene, i) => {
            const color = gene.status === "positive" ? COLORS.green : gene.status === "neutral" ? COLORS.accent : COLORS.amber;
            return (
              <div key={i} style={{
                background: COLORS.surface, borderRadius: 12, padding: 16,
                border: `1px solid ${color}33`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: FONT.display, fontSize: 16, color }}>{gene.gene}</span>
                  <Label color={color}>{gene.status}</Label>
                </div>
                <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, marginBottom: 8 }}>Variant: {gene.variant}</div>
                <div style={{ fontFamily: FONT.body, fontSize: 13, color: COLORS.text }}>{gene.impact}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function Workouts({ metrics }) {
  const w = metrics.workouts || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Weekly Training Plan</div>
        <div style={{ display: "grid", gap: 10 }}>
          {w.map((day, i) => {
            const isToday = i === new Date().getDay() - 1;
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16, padding: "14px 16px",
                borderRadius: 10, background: isToday ? COLORS.accent + "11" : COLORS.surface,
                border: `1px solid ${isToday ? COLORS.accent : day.completed ? COLORS.green + "44" : COLORS.border}`,
              }}>
                <div style={{ fontFamily: FONT.display, fontSize: 14, color: isToday ? COLORS.accent : COLORS.muted, width: 32 }}>{day.day}</div>
                <div style={{ flex: 1, fontFamily: FONT.body, fontSize: 14, color: COLORS.text }}>{day.type}</div>
                {day.duration > 0 && (
                  <>
                    <div style={{ fontFamily: FONT.mono, fontSize: 12, color: COLORS.muted }}>{day.duration} min</div>
                    <div style={{ fontFamily: FONT.mono, fontSize: 12, color: COLORS.amber }}>{day.calories} kcal</div>
                  </>
                )}
                <div style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: day.completed ? COLORS.green : "transparent",
                  border: `2px solid ${day.completed ? COLORS.green : COLORS.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#000", fontSize: 12,
                }}>
                  {day.completed && "✓"}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function Nutrition({ metrics }) {
  const meals = metrics.meals || [];
  const totals = meals.reduce((a, m) => ({
    cal: a.cal + m.cal, protein: a.protein + m.protein,
    carbs: a.carbs + m.carbs, fat: a.fat + m.fat,
  }), { cal: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          { label: "Calories", val: totals.cal, unit: "kcal", color: COLORS.accent },
          { label: "Protein", val: totals.protein, unit: "g", color: COLORS.green },
          { label: "Carbs", val: Math.round(totals.carbs), unit: "g", color: COLORS.amber },
          { label: "Fat", val: totals.fat, unit: "g", color: COLORS.purple },
        ].map(t => (
          <Card key={t.label}>
            <div style={{ fontFamily: FONT.display, fontSize: 30, color: t.color }}>{t.val}</div>
            <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted, letterSpacing: "0.1em" }}>{t.unit} {t.label}</div>
          </Card>
        ))}
      </div>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Meal Log</div>
        <div style={{ display: "grid", gap: 10 }}>
          {meals.map((m, i) => (
            <div key={i} style={{
              background: COLORS.surface, borderRadius: 10, padding: "14px 16px",
              border: `1px solid ${COLORS.border}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text, fontWeight: 600 }}>{m.meal}</span>
                <span style={{ fontFamily: FONT.mono, fontSize: 13, color: COLORS.accent }}>{m.cal} kcal</span>
              </div>
              <div style={{ fontFamily: FONT.body, fontSize: 12, color: COLORS.muted, marginBottom: 8 }}>{m.items}</div>
              <div style={{ display: "flex", gap: 12 }}>
                <span style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.green }}>{m.protein}g protein</span>
                <span style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.amber }}>{m.carbs}g carbs</span>
                <span style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.purple }}>{m.fat}g fat</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Supplements({ metrics }) {
  const sups = metrics.supplements || [];
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Daily Supplement Protocol</div>
        <div style={{ display: "grid", gap: 10 }}>
          {sups.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 16, padding: "14px 16px",
              borderRadius: 10, background: COLORS.surface,
              border: `1px solid ${s.status === "taken" ? COLORS.green + "44" : COLORS.border}`,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8, background: s.status === "taken" ? COLORS.green + "22" : COLORS.border,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
              }}>✦</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT.body, fontSize: 14, color: COLORS.text, fontWeight: 600 }}>{s.name}</div>
                <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted }}>{s.dose} · {s.time}</div>
              </div>
              <Label color={s.status === "taken" ? COLORS.green : COLORS.amber}>{s.status}</Label>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function AIInsights({ metrics, member, onAsk }) {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const recs = metrics.recommendations || [];

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    await onAsk(query, (chunk) => setResponse(prev => prev + chunk));
    setLoading(false);
  };

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Card glow>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>◆ AI Health Advisor</div>
        <div style={{ fontFamily: FONT.body, fontSize: 13, color: COLORS.muted, marginBottom: 16 }}>
          Ask about {member.name}'s health data, get personalized recommendations, or explore what-if scenarios.
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleAsk()}
            placeholder={`Ask about ${member.name}'s health...`}
            style={{
              flex: 1, background: COLORS.surface, border: `1px solid ${COLORS.border}`,
              borderRadius: 10, padding: "12px 16px", fontFamily: FONT.body, fontSize: 14,
              color: COLORS.text, outline: "none",
            }}
          />
          <button onClick={handleAsk} disabled={loading} style={{
            background: COLORS.accent, color: "#000", border: "none", borderRadius: 10,
            padding: "12px 24px", fontFamily: FONT.mono, fontSize: 13, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.08em",
          }}>
            {loading ? "..." : "ASK"}
          </button>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {[
            "What's my biggest health risk?",
            "Optimize my supplement stack",
            "Improve VO₂ max faster",
            "Reduce inflammation naturally",
          ].map(q => (
            <button key={q} onClick={() => { setQuery(q); }} style={{
              background: COLORS.surface, border: `1px solid ${COLORS.border}`,
              borderRadius: 8, padding: "6px 12px", fontFamily: FONT.body, fontSize: 12,
              color: COLORS.muted, cursor: "pointer",
            }}>{q}</button>
          ))}
        </div>
        {(response || loading) && (
          <div style={{
            marginTop: 16, padding: 16, background: COLORS.surface, borderRadius: 10,
            border: `1px solid ${COLORS.accent}44`, fontFamily: FONT.body, fontSize: 14,
            color: COLORS.text, lineHeight: 1.7,
          }}>
            {loading && !response ? "Analyzing your health data..." : response}
            {loading && <span style={{ color: COLORS.accent }}>▋</span>}
          </div>
        )}
      </Card>

      <Card>
        <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Prioritized Action Plan</div>
        <div style={{ display: "grid", gap: 10 }}>
          {recs.map((r, i) => {
            const color = r.priority === "high" ? COLORS.red : r.priority === "medium" ? COLORS.amber : COLORS.green;
            return (
              <div key={i} style={{
                display: "flex", gap: 14, padding: "14px 16px",
                borderRadius: 10, background: COLORS.surface,
                borderLeft: `4px solid ${color}`,
              }}>
                <div style={{ fontFamily: FONT.display, fontSize: 20, color, minWidth: 28 }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                    <Label color={color}>{r.priority} priority</Label>
                    <Label>{r.category}</Label>
                  </div>
                  <div style={{ fontFamily: FONT.body, fontSize: 13, color: COLORS.text, lineHeight: 1.5 }}>{r.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

function HealthPlatform() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeMember, setActiveMember] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const member = FAMILY_MEMBERS.find(m => m.id === activeMember);
  const metrics = METRICS[activeMember] || METRICS[1];

  const handleAsk = async (query, onChunk) => {
    const context = `
You are a precision health advisor. Here is the patient's data:
- Name: ${member.name}, Age: ${member.age}
- Health Score: ${metrics.score}
- VO₂ Max: ${metrics.vo2max} mL/kg/min
- Vitals: HR ${metrics.vitals.hr} bpm, BP ${metrics.vitals.bp}, HRV ${metrics.vitals.hrv}ms
- Key bloodwork issues: ${metrics.bloodwork?.filter(b => b.status !== "good").map(b => `${b.name}: ${b.val} ${b.unit} (${b.status})`).join(", ")}
- Current supplements: ${metrics.supplements?.map(s => s.name).join(", ")}
- Genomic variants: ${metrics.genome?.map(g => `${g.gene} ${g.variant}`).join(", ")}
Answer concisely and practically in 3-5 sentences. Be specific to the data.
    `;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: context,
          messages: [{ role: "user", content: query }],
          stream: true,
        }),
      });
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value).split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.type === "content_block_delta" && data.delta?.text) {
                onChunk(data.delta.text);
              }
            } catch {}
          }
        }
      }
    } catch (e) {
      onChunk("Unable to reach AI advisor. Please check your connection.");
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard": return <Dashboard member={member} metrics={metrics} />;
      case "vitals": return <Vitals metrics={metrics} />;
      case "bloodwork": return <BloodWork metrics={metrics} />;
      case "hormones": return <Hormones metrics={metrics} />;
      case "imaging": return <Imaging metrics={metrics} />;
      case "genome": return <Genome metrics={metrics} />;
      case "workouts": return <Workouts metrics={metrics} />;
      case "nutrition": return <Nutrition metrics={metrics} />;
      case "supplements": return <Supplements metrics={metrics} />;
      case "insights": return <AIInsights metrics={metrics} member={member} onAsk={handleAsk} />;
      default: return <Dashboard member={member} metrics={metrics} />;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.bg}; color: ${COLORS.text}; font-family: ${FONT.body}; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 2px; }
        input::placeholder { color: ${COLORS.muted}; }
      `}</style>

      <div style={{ display: "flex", minHeight: "100vh", background: COLORS.bg }}>
        {/* Sidebar */}
        <div style={{
          width: sidebarOpen ? 220 : 64, flexShrink: 0,
          background: COLORS.surface, borderRight: `1px solid ${COLORS.border}`,
          display: "flex", flexDirection: "column",
          transition: "width 0.3s ease",
        }}>
          {/* Logo */}
          <div style={{ padding: "20px 16px", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8, background: COLORS.accent + "22",
              border: `1px solid ${COLORS.accent}`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: FONT.display, fontSize: 14, color: COLORS.accent, flexShrink: 0,
            }}>⬡</div>
            {sidebarOpen && <div style={{ fontFamily: FONT.display, fontSize: 13, color: COLORS.accent, letterSpacing: "0.05em" }}>VITALIS</div>}
          </div>

          {/* Family Members */}
          <div style={{ padding: "12px 10px", borderBottom: `1px solid ${COLORS.border}` }}>
            {FAMILY_MEMBERS.map(m => (
              <button key={m.id} onClick={() => setActiveMember(m.id)} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "8px 6px",
                borderRadius: 8, border: "none", cursor: "pointer", marginBottom: 4,
                background: activeMember === m.id ? m.color + "22" : "transparent",
                outline: activeMember === m.id ? `1px solid ${m.color}44` : "none",
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", background: m.color + "22",
                  border: `2px solid ${activeMember === m.id ? m.color : COLORS.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0,
                }}>{m.avatar}</div>
                {sidebarOpen && (
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: FONT.body, fontSize: 13, color: activeMember === m.id ? m.color : COLORS.text, fontWeight: 600 }}>{m.name}</div>
                    <div style={{ fontFamily: FONT.mono, fontSize: 10, color: COLORS.muted }}>Age {m.age}</div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: "8px 10px", overflowY: "auto" }}>
            {TABS.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                width: "100%", display: "flex", alignItems: "center", gap: 10,
                padding: "9px 8px", borderRadius: 8, border: "none", cursor: "pointer",
                marginBottom: 2, background: activeTab === tab.id ? COLORS.accent + "18" : "transparent",
                outline: activeTab === tab.id ? `1px solid ${COLORS.accent}44` : "none",
              }}>
                <span style={{ fontSize: 14, color: activeTab === tab.id ? COLORS.accent : COLORS.muted, flexShrink: 0, width: 20, textAlign: "center" }}>{tab.icon}</span>
                {sidebarOpen && <span style={{ fontFamily: FONT.body, fontSize: 13, color: activeTab === tab.id ? COLORS.text : COLORS.muted }}>{tab.label}</span>}
              </button>
            ))}
          </nav>

          {/* Toggle */}
          <button onClick={() => setSidebarOpen(p => !p)} style={{
            margin: 10, padding: 10, borderRadius: 8, border: `1px solid ${COLORS.border}`,
            background: "transparent", color: COLORS.muted, cursor: "pointer", fontSize: 14,
          }}>{sidebarOpen ? "◁" : "▷"}</button>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Header */}
          <div style={{
            padding: "16px 28px", borderBottom: `1px solid ${COLORS.border}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: COLORS.surface,
          }}>
            <div>
              <div style={{ fontFamily: FONT.display, fontSize: 18, color: COLORS.text, letterSpacing: "0.05em" }}>
                {TABS.find(t => t.id === activeTab)?.icon} {TABS.find(t => t.id === activeTab)?.label}
              </div>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted, marginTop: 2 }}>
                {member.avatar} {member.name} · {member.age} years old
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontFamily: FONT.mono, fontSize: 11, color: COLORS.muted }}>
                {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
              </div>
              <div style={{
                padding: "6px 14px", borderRadius: 20, background: COLORS.green + "18",
                border: `1px solid ${COLORS.green}44`, fontFamily: FONT.mono, fontSize: 11,
                color: COLORS.green, display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: COLORS.green, boxShadow: `0 0 8px ${COLORS.green}` }} />
                LIVE
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: 24 }}>
            {renderTab()}
          </div>
        </div>
      </div>
    </>
  );
}

const { useState, useEffect, useRef } = React;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(HealthPlatform));
