(() => {
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const KW = new Set("int float char double void return if else for while do switch case break default const sizeof".split(" "));
const TOK = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(^#\w+)|(\b\d+\.?\d*f?\b)|(\b[A-Za-z_]\w*\b)/gm;
const hl = code => { let o = "", i = 0, m; TOK.lastIndex = 0;
  while ((m = TOK.exec(code))) { o += esc(code.slice(i, m.index)); i = TOK.lastIndex; const t = esc(m[0]);
    o += m[1] ? `<span class="c">${t}</span>` : m[2] ? `<span class="s">${t}</span>` : m[3] ? `<span class="p">${t}</span>` : m[4] ? `<span class="n">${t}</span>` : (m[5] && KW.has(m[5])) ? `<span class="k">${t}</span>` : t; }
  return o + esc(code.slice(i)); };
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
const root = document.documentElement, LS = window.LECTURES, nav = $("#nav"), app = $("#app");
let lang = store.get("lang", "both"), P = store.get("prog", {}), cur = 0, timers = [];
const clearTimers = () => { timers.forEach(clearInterval); timers = []; };
const th = store.get("theme", null); if (th) root.dataset.theme = th;
$("#theme").onclick = () => { const d = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches; root.dataset.theme = d ? "light" : "dark"; store.set("theme", root.dataset.theme); };

/* bilingual text helper: en/ar/both */
const T = (en, ar) => lang === "en" || !ar ? `<span class="en">${esc(en)}</span>` : lang === "ar" ? `<span class="ar">${esc(ar)}</span>` : `<span class="en">${esc(en)}</span><span class="ar">${esc(ar)}</span>`;
const U = { concept: ["Concept", "المفهوم"], analogy: ["Analogy", "تشبيه"], theory: ["Theory & history (exam material)", "النظري والتاريخي (مادة الامتحان)"], viewer: ["Interactive code viewer", "عارض الكود التفاعلي"], tr: ["Memory tracer", "تتبع الذاكرة"], quiz: ["Quick quiz", "اختبار سريع"], pit: ["Pitfalls & pro-tips", "الأخطاء الشائعة والنصائح"], code: ["Code", "الكود"], exp: ["Explanation", "الشرح"], out: ["Output", "الناتج"], run: ["▶ Run (simulate)", "▶ شغّل (محاكاة)"], next: ["Next ▶", "التالي ▶"], prev: ["◀ Prev", "◀ السابق"], play: ["⏵ Auto-play", "⏵ تشغيل تلقائي"], reset: ["↺ Reset", "↺ إعادة"], step: ["Step", "الخطوة"], copy: ["Copy code", "انسخ الكود"], online: ["Run for real online ↗", "شغّله فعلياً أونلاين ↗"], read: ["✓ I studied this", "✓ ذاكرت هذا"], ok: ["Correct! ", "صح! "], no: ["Not quite. ", "ليس تماماً. "], again: ["Try again", "حاول مرة أخرى"], score: ["Score", "النتيجة"], tip: ["Pro-tip", "نصيحة"], warn: ["Pitfall", "تنبيه"], input: ["Input", "المدخل"], tasks: ["Your progress in this lecture", "تقدمك في هذه المحاضرة"] };
const u = k => T(...U[k]);
const tn = (l, i) => lang === "ar" && l.ar ? l.ar.title : l.title;

function stat() { const d = LS.filter(l => P[l.n] && P[l.n].t && P[l.n].r && P[l.n].q).length;
  $("#pbar").style.width = d / LS.length * 100 + "%"; $("#ptxt").textContent = `${d}/${LS.length} ✓`;
  [...nav.children].forEach((b, i) => b.classList.toggle("done", !!(P[LS[i].n] && P[LS[i].n].t && P[LS[i].n].r && P[LS[i].n].q))); }
function mark(n, k) { P[n] = P[n] || {}; if (!P[n][k]) { P[n][k] = 1; store.set("prog", P); stat(); const c = $("#check"); if (c) c.innerHTML = checklist(n); } }
const checklist = n => { const p = P[n] || {}, f = (k, en, ar) => `<span class="${p[k] ? "ok" : ""}">${p[k] ? "✓" : "○"} ${lang === "en" ? en : lang === "ar" ? ar : en + " | " + ar}</span>`;
  return f("t", "Study", "ذاكر") + f("r", "Trace", "تتبع") + f("q", "Quiz ≥ 2/3", "اختبار ≥ 2/3"); };

function renderNav() { nav.innerHTML = ""; LS.forEach((l, i) => { const b = document.createElement("button"); b.textContent = `${l.n}. ${tn(l).split(/[&(]|\sو/)[0].trim()}`; b.onclick = () => show(i); nav.appendChild(b); }); stat(); }
function renderLangs() { const o = $("#langs"); o.innerHTML = ""; [["ar", "عربي"], ["both", "عربي + EN"], ["en", "EN"]].forEach(([k, t]) => { const b = document.createElement("button"); b.textContent = t; b.setAttribute("aria-pressed", k === lang); b.onclick = () => { lang = k; store.set("lang", k); renderLangs(); renderNav(); show(cur); }; o.appendChild(b); }); }

function show(i) {
  clearTimers(); cur = i; const l = LS[i], a = l.ar || {};
  [...nav.children].forEach((b, j) => b.setAttribute("aria-current", j === i)); history.replaceState(null, "", "#" + l.n);
  app.innerHTML = `
  <section class="card"><div class="kicker">${l.n} / ${LS.length}</div><h2>${l.icon} ${esc(lang === "ar" ? a.title : l.title)}${lang === "both" && a.title ? `<span class="ar">${esc(a.title)}</span>` : ""}</h2>
    <p>${T(l.concept, a.concept)}</p><div class="analogy"><b>${u("analogy")}:</b> ${T(l.analogy, a.analogy)}</div>
    <div class="check" id="check" style="margin-top:12px">${checklist(l.n)}</div></section>
  ${l.theory ? `<section class="card"><h3>${u("theory")}</h3><ol class="theory">${l.theory.map(t => `<li>${T(t[0], t[1])}</li>`).join("")}</ol><div class="row"><button class="btn" id="studied">${u("read")}</button></div></section>` : ""}
  <section class="card"><h3>${u("viewer")}</h3><div class="tabs" role="tablist">${["code", "exp", "out"].map((k, j) => `<button role="tab" data-t="${k}" aria-selected="${j === 0}">${u(k)}</button>`).join("")}</div><div id="pane"></div></section>
  <section class="card"><h3>${u("tr")}</h3><div id="tracer"></div></section>
  <section class="card"><h3>${u("quiz")}</h3><div id="quiz"></div></section>
  <section class="card"><h3>${u("pit")}</h3>${l.pitfalls.map((p, j) => `<div class="alert w"><b>${u("warn")}:</b> ${T(p, a.pitfalls && a.pitfalls[j])}</div>`).join("")}${l.tips.map((p, j) => `<div class="alert t"><b>${u("tip")}:</b> ${T(p, a.tips && a.tips[j])}</div>`).join("")}</section>`;
  const s = $("#studied"); if (s) s.onclick = () => { mark(l.n, "t"); s.disabled = true; s.textContent = "✓"; }; else mark(l.n, "t");
  if (P[l.n] && P[l.n].t && s) { s.disabled = true; s.textContent = "✓"; }
  tabs(l, a); tracer(l, a); quiz(l, a);
}

function tabs(l, a) {
  const pane = $("#pane");
  const views = {
    code: () => `<pre class="code" tabindex="0" dir="ltr">${hl(l.code)}</pre><div class="row"><button class="btn alt" id="cp">${u("copy")}</button><a class="btn" target="_blank" rel="noopener" href="https://www.onlinegdb.com/online_c_compiler">${u("online")}</a></div>`,
    exp: () => `<div class="chips">${l.syntax.map((s, j) => `<div class="chip"><code dir="ltr">${esc(s.c)}</code><span>${T(s.m, a.syntax && a.syntax[j])}</span></div>`).join("")}</div><ul>${l.explain.map((e, j) => `<li>${T(e, a.explain && a.explain[j])}</li>`).join("")}</ul>`,
    out: () => `<div class="row"><button class="btn" id="run">${u("run")}</button>${l.stdin ? `<span>${u("input")}: <code class="stdin">${esc(l.stdin.trim().replace(/\n/g, " "))}</code></span>` : ""}</div><div class="term" id="term" dir="ltr" aria-live="polite"></div>`
  };
  const set = k => { clearTimers(); pane.innerHTML = views[k](); document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.t === k));
    if (k === "code") $("#cp").onclick = e => { try { navigator.clipboard.writeText(l.code); e.target.textContent = "✓"; } catch (x) {} };
    if (k === "out") $("#run").onclick = () => { const t = $("#term"); let n = 0; t.textContent = ""; clearTimers(); timers.push(setInterval(() => { t.textContent = l.out.slice(0, ++n); if (n >= l.out.length) clearTimers(); }, 18)); }; };
  document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => set(b.dataset.t)); set("code");
}

function tracer(l, a) {
  const el = $("#tracer"), Tr = l.trace; let s = 0, hi = null, name = "";
  const cell = (v, h, idx) => `<div class="cell${h ? " hi" : ""}"><small>${idx}</small>${esc(v)}</div>`;
  const draw = v => Array.isArray(v) ? (Array.isArray(v[0]) ? v.map((r, ri) => `<div class="cells" dir="ltr">${r.map((c, ci) => cell(c, hi && hi[0] === name && hi[1][0] === ri && hi[1][1] === ci, `[${ri}][${ci}]`)).join("")}</div>`).join("") : `<div class="cells" dir="ltr">${v.map((c, i) => cell(c, hi && hi[0] === name && hi[1] === i, i)).join("")}</div>`) : `<span class="val">${esc(v)}</span>`;
  const render = () => { const st = Tr[s], prev = s ? Tr[s - 1].mem : {}; hi = st.hi;
    el.innerHTML = `<div class="row"><button class="btn alt" id="pv">${u("prev")}</button><button class="btn" id="nx">${u("next")}</button><button class="btn alt" id="pl">${u("play")}</button><button class="btn alt" id="rs">${u("reset")}</button><span>${u("step")} <b>${s + 1}</b>/${Tr.length}</span></div><div class="bar"><i style="width:${(s + 1) / Tr.length * 100}%"></i></div><div class="tracemsg" aria-live="polite">${T(st.t, a.trace && a.trace[s])}</div><div class="mem" dir="ltr">${Object.entries(st.mem).map(([k, v]) => { name = k; return `<div class="var${JSON.stringify(prev[k]) !== JSON.stringify(v) ? " changed" : ""}"><b>${esc(k)}</b>${draw(v)}</div>`; }).join("")}</div>`;
    $("#pv").disabled = !s; $("#nx").disabled = s === Tr.length - 1; if (s === Tr.length - 1) mark(l.n, "r");
    $("#pv").onclick = () => { clearTimers(); s--; render(); }; $("#nx").onclick = () => { clearTimers(); s++; render(); }; $("#rs").onclick = () => { clearTimers(); s = 0; render(); };
    $("#pl").onclick = () => { clearTimers(); if (s === Tr.length - 1) s = 0; render(); timers.push(setInterval(() => { if (s < Tr.length - 1) { s++; render(); } else clearTimers(); }, 1200)); }; };
  render();
}

function quiz(l, a) {
  const el = $("#quiz"), Q = l.quiz; let i = 0, sc = 0;
  const render = () => {
    if (i >= Q.length) { if (sc >= 2) mark(l.n, "q"); el.innerHTML = `<p class="val">${u("score")}: ${sc}/${Q.length} ${sc === Q.length ? "🎉" : ""}</p><button class="btn" id="again">${u("again")}</button>`; $("#again").onclick = () => { i = 0; sc = 0; render(); }; return; }
    const q = Q[i], qa = a.quiz && a.quiz[i] || {};
    el.innerHTML = `<div class="bar"><i style="width:${i / Q.length * 100}%"></i></div><p><b>${i + 1}.</b> ${T(q.q, qa.q)}</p>${q.o.map((o, j) => `<button class="opt" dir="auto" data-j="${j}">${esc(o)}</button>`).join("")}<div class="fb" id="fb" aria-live="polite"></div><button class="btn" id="nq" hidden>${u("next")}</button>`;
    el.querySelectorAll(".opt").forEach(b => b.onclick = () => { const j = +b.dataset.j, ok = j === q.a; if (ok) sc++;
      el.querySelectorAll(".opt").forEach((x, k) => { x.disabled = true; if (k === q.a) x.classList.add("right"); else if (k === j) x.classList.add("wrong"); });
      $("#fb").innerHTML = (ok ? u("ok") : u("no")) + T(q.w, qa.w); $("#nq").hidden = false; $("#nq").onclick = () => { i++; render(); }; });
  };
  render();
}

renderLangs(); renderNav(); show(Math.max(0, LS.findIndex(l => "#" + l.n === location.hash)));
})();
