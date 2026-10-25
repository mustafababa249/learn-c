(() => {
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const KW = new Set("int float char double void return if else for while do switch case break default const sizeof".split(" "));
const TOK = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(^#\w+)|(\b\d+\.?\d*f?\b)|(\b[A-Za-z_]\w*\b)/gm;
const hl = code => { let o = "", i = 0, m; TOK.lastIndex = 0;
  while ((m = TOK.exec(code))) { o += esc(code.slice(i, m.index)); i = TOK.lastIndex; const t = esc(m[0]);
    o += m[1] ? `<span class="c">${t}</span>` : m[2] ? `<span class="s">${t}</span>` : m[3] ? `<span class="p">${t}</span>` : m[4] ? `<span class="n">${t}</span>` : (m[5] && KW.has(m[5])) ? `<span class="k">${t}</span>` : t; }
  return o + esc(code.slice(i)); };

/* theme (storage wrapped in try/catch) */
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("#theme").onclick = () => { const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme = dark ? "light" : "dark"; try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {} };

const LS = window.LECTURES, nav = $("#nav"), app = $("#app");
let timers = [];
const clearTimers = () => { timers.forEach(clearInterval); timers = []; };

function show(i) {
  clearTimers();
  const l = LS[i];
  [...nav.children].forEach((b, j) => b.setAttribute("aria-current", j === i));
  history.replaceState(null, "", "#" + l.n);
  app.innerHTML = `
  <section class="card"><div class="kicker">Lecture ${l.n} of ${LS.length}</div><h2>${l.icon} ${esc(l.title)}</h2>
    <p>${esc(l.concept)}</p><div class="analogy"><b>Analogy:</b> ${esc(l.analogy)}</div></section>
  <section class="card"><h3>Interactive code viewer</h3>
    <div class="tabs" role="tablist"><button role="tab" data-t="code" aria-selected="true">Code</button><button role="tab" data-t="exp" aria-selected="false">Explanation</button><button role="tab" data-t="out" aria-selected="false">Output simulation</button></div>
    <div id="pane"></div></section>
  <section class="card"><h3>Memory tracer</h3><div id="tracer"></div></section>
  <section class="card"><h3>Quick quiz</h3><div id="quiz"></div></section>
  <section class="card"><h3>Pitfalls &amp; pro-tips</h3>${l.pitfalls.map(p => `<div class="alert w"><b>Pitfall:</b> ${esc(p)}</div>`).join("")}${l.tips.map(p => `<div class="alert t"><b>Pro-tip:</b> ${esc(p)}</div>`).join("")}</section>`;
  tabs(l); tracer(l); quiz(l);
}

function tabs(l) {
  const pane = $("#pane");
  const views = {
    code: () => `<pre class="code" tabindex="0">${hl(l.code)}</pre>`,
    exp: () => `<div class="chips">${l.syntax.map(s => `<div class="chip"><code>${esc(s.c)}</code><span>${esc(s.m)}</span></div>`).join("")}</div><ul>${l.explain.map(e => `<li>${esc(e)}</li>`).join("")}</ul>`,
    out: () => `<div class="row"><button class="btn" id="run">▶ Run program</button>${l.stdin ? `<span>Input: <code class="stdin">${esc(l.stdin.trim().replace(/\n/g, " "))}</code></span>` : ""}</div><div class="term" id="term" aria-live="polite">Press Run to simulate the program.</div>`
  };
  const set = k => { clearTimers(); pane.innerHTML = views[k]();
    document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.t === k));
    if (k === "out") $("#run").onclick = () => { const t = $("#term"), out = l.out; t.textContent = ""; let n = 0; clearTimers();
      timers.push(setInterval(() => { t.textContent = out.slice(0, ++n); if (n >= out.length) clearTimers(); }, 18)); }; };
  document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => set(b.dataset.t));
  set("code");
}

function tracer(l) {
  const el = $("#tracer"), T = l.trace; let s = 0;
  const cell = (v, hi, idx) => `<div class="cell${hi ? " hi" : ""}"><small>${idx}</small>${esc(v)}</div>`;
  const draw = v => Array.isArray(v) ? (Array.isArray(v[0]) ? v.map((r, ri) => `<div class="cells">${r.map((c, ci) => cell(c, st.hi && st.hi[1] && st.hi[1][0] === ri && st.hi[1][1] === ci && st.k === cur, `[${ri}][${ci}]`)).join("")}</div>`).join("")
    : `<div class="cells">${v.map((c, i) => cell(c, st.hi && st.hi[1] === i && st.k === cur, i)).join("")}</div>`) : `<span class="val">${esc(v)}</span>`;
  let st = {}, cur = "";
  function render() {
    const step = T[s], prev = s ? T[s - 1].mem : {};
    el.innerHTML = `<div class="row"><button class="btn alt" id="pv">◀ Prev</button><button class="btn" id="nx">Next ▶</button><button class="btn alt" id="pl">⏵ Auto-play</button><button class="btn alt" id="rs">↺ Reset</button><span>Step <b>${s + 1}</b> / ${T.length}</span></div>
      <div class="bar"><i style="width:${(s + 1) / T.length * 100}%"></i></div>
      <p class="tracemsg" aria-live="polite">${esc(step.t)}</p><div class="mem" id="mem"></div>`;
    $("#mem").innerHTML = Object.entries(step.mem).map(([k, v]) => { st = { hi: step.hi, k }; cur = step.hi ? step.hi[0] : "";
      const changed = JSON.stringify(prev[k]) !== JSON.stringify(v); return `<div class="var${changed ? " changed" : ""}"><b>${esc(k)}</b>${draw(v)}</div>`; }).join("");
    $("#pv").disabled = s === 0; $("#nx").disabled = s === T.length - 1;
    $("#pv").onclick = () => { stop(); s--; render(); }; $("#nx").onclick = () => { stop(); s++; render(); };
    $("#rs").onclick = () => { stop(); s = 0; render(); };
    $("#pl").onclick = () => { stop(); if (s === T.length - 1) s = 0; render(); timers.push(setInterval(() => { if (s < T.length - 1) { s++; render(); } else stop(); }, 1100)); };
  }
  const stop = clearTimers; render();
}

function quiz(l) {
  const el = $("#quiz"), Q = l.quiz; let i = 0, score = 0;
  function render() {
    if (i >= Q.length) { el.innerHTML = `<p class="val">Score: ${score} / ${Q.length} ${score === Q.length ? "🎉" : ""}</p><p>${score === Q.length ? "Perfect! Move on to the next lecture." : "Review the explanation tab and try again."}</p><button class="btn" id="again">Try again</button>`;
      $("#again").onclick = () => { i = 0; score = 0; render(); }; return; }
    const q = Q[i];
    el.innerHTML = `<div class="bar"><i style="width:${i / Q.length * 100}%"></i></div><p><b>Q${i + 1}.</b> ${esc(q.q)}</p>${q.o.map((o, j) => `<button class="opt" data-j="${j}">${esc(o)}</button>`).join("")}<p class="fb" id="fb" aria-live="polite"></p><button class="btn" id="nx" hidden>Next ▶</button>`;
    el.querySelectorAll(".opt").forEach(b => b.onclick = () => { const j = +b.dataset.j, ok = j === q.a; if (ok) score++;
      el.querySelectorAll(".opt").forEach((x, k) => { x.disabled = true; if (k === q.a) x.classList.add("right"); else if (k === j) x.classList.add("wrong"); });
      $("#fb").textContent = (ok ? "Correct! " : "Not quite. ") + q.w; $("#nx").hidden = false; $("#nx").onclick = () => { i++; render(); }; });
  }
  render();
}

LS.forEach((l, i) => { const b = document.createElement("button"); b.textContent = `${l.n}. ${l.title.split(/[&(]/)[0].trim()}`; b.onclick = () => show(i); nav.appendChild(b); });
const start = Math.max(0, LS.findIndex(l => "#" + l.n === location.hash)); show(start);
})();
