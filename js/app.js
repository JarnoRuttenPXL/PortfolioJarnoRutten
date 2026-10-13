const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const CATS = ["Alles", "UI/UX", "Graphic Design", "Web Development", "Andere projecten"];
const page = location.pathname.split("/").pop() || "index.html";
const hero = p => p.images[p.heroIndex || 0];

/* Header + footer (één plek voor alle pagina's) */
const links = [["index.html", "Home"], ["projecten.html", "Projecten"], ["index.html#over-mij", "Over mij"], ["index.html#contact", "Contact"]];
const cur = h => (h === page || (h === "projecten.html" && page === "project.html")) ? ' aria-current="page"' : "";
$("#site-header").innerHTML = `<div class="wrap bar"><a class="brand" href="index.html">Jarno Rutten</a>
<nav class="main" id="nav" aria-label="Hoofdmenu">${links.map(([h, t]) => `<a href="${h}"${cur(h)}>${t}</a>`).join("")}</nav>
<button class="icon-btn" id="theme" aria-label="Wissel tussen donker en licht thema">◐</button>
<button class="icon-btn menu-btn" id="menu" aria-expanded="false" aria-controls="nav" aria-label="Menu">☰</button></div>`;
$("#site-footer").innerHTML = `<div class="wrap foot"><p>© ${new Date().getFullYear()} Jarno Rutten · Digitale Vormgeving, PXL Hasselt</p><a href="eindreflectie.html">Eindreflectie WPL2</a></div>`;

/* Menu, thema, paginatransitie */
$("#menu").onclick = e => { const o = $("#nav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
document.addEventListener("keydown", e => { if (e.key === "Escape") { $("#nav").classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false"); } });
const root = document.documentElement;
try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
$("#theme").onclick = () => { const t = root.dataset.theme === "light" ? "dark" : "light"; root.dataset.theme = t; try { localStorage.setItem("theme", t); } catch (e) {} };
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || a.target || e.metaKey || e.ctrlKey || a.origin !== location.origin || a.pathname === location.pathname) return;
  e.preventDefault(); document.body.classList.add("leaving"); setTimeout(() => location.href = a.href, 200);
});
addEventListener("pageshow", () => document.body.classList.remove("leaving"));

/* Kaarten */
const card = p => `<a class="card reveal" href="project.html?p=${p.slug}"><div class="card-img"><img src="${p.thumbnail}" alt="${hero(p).alt}" loading="lazy" style="object-position:${p.thumbPos || "50% 50%"}"></div>
<h3>${p.title}</h3><p class="meta"><span>${p.course}</span>${p.year ? `<span>${p.year}</span>` : ""}<span>${p.category}</span></p><p class="muted">${p.shortDescription}</p></a>`;
const fill = (el, list) => { el.innerHTML = list.map(card).join(""); reveal(el); };

function reveal(scope = document) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  $$(".reveal:not(.in)", scope).forEach(el => io.observe(el));
}

/* Lightbox */
const lb = document.createElement("dialog");
lb.innerHTML = `<button class="icon-btn x" aria-label="Sluiten">✕</button><img alt="">`;
document.body.append(lb);
lb.addEventListener("click", () => lb.close());
document.addEventListener("click", e => { const z = e.target.closest("[data-src]"); if (z) { $("img", lb).src = z.dataset.src; $("img", lb).alt = z.dataset.alt; lb.showModal(); } });

/* Pagina's */
if ($("#featured")) fill($("#featured"), PROJECTS.filter(p => p.featured));
if ($("#all")) {
  const f = $("#filters"), show = c => { fill($("#all"), PROJECTS.filter(p => c === "Alles" || p.category === c)); $$(".chip", f).forEach(b => b.setAttribute("aria-pressed", b.textContent === c)); };
  f.innerHTML = CATS.map(c => `<button class="chip" aria-pressed="false">${c}</button>`).join("");
  f.onclick = e => e.target.matches(".chip") && show(e.target.textContent);
  show("Alles");
}
if ($("#project")) {
  const i = PROJECTS.findIndex(p => p.slug === new URLSearchParams(location.search).get("p")), p = PROJECTS[i];
  if (!p) $("#project").innerHTML = `<div class="wrap ph"><h1>Project niet gevonden</h1><p><a class="btn" href="projecten.html">Alle projecten</a></p></div>`;
  else {
    document.title = `${p.title} | Jarno Rutten`;
    $('meta[name="description"]').content = p.shortDescription;
    if (p.theme) { root.style.setProperty("--accent", p.theme.accent); root.style.setProperty("--a2", p.theme.accent2); }
    const zoom = (im, cls = "") => `<button class="zoom ${cls}" data-src="${im.src}" data-alt="${im.alt}" aria-label="Vergroot afbeelding: ${im.alt}"><img src="${im.src}" alt="${im.alt}" width="${im.w}" height="${im.h}" loading="lazy"></button>`;
    const facts = [["Vak", p.course], ["Jaar", p.year], ["Categorie", p.category], ["Oplevering", p.deliverables]].filter(x => x[1]);
    const sec = s => {
      if (s.type === "text") return `<section class="block wrap reveal"><h2>${s.title}</h2>${s.body.map(t => `<p>${t}</p>`).join("")}</section>`;
      if (s.type === "list") return `<section class="block wrap reveal"><h2>${s.title}</h2><ul>${s.items.map(t => `<li>${t}</li>`).join("")}</ul></section>`;
      if (s.type === "gallery") return `<section class="block wrap reveal"><h2>${s.title}</h2><div class="gallery">${p.images.map(im => `<div style="flex:${im.w / im.h} 1 0">${zoom(im)}</div>`).join("")}</div></section>`;
      const im = p.images[s.image], r = im.w / im.h, k = r < .7 ? "tall" : r < 1.2 ? "mid" : "wide";
      return `<section class="block wrap two ${k} reveal"><div class="fig">${zoom(im)}</div><div><h2>${s.title}</h2>${s.body.map(t => `<p>${t}</p>`).join("")}<p class="muted">Formaat ${im.w} × ${im.h} px</p></div></section>`;
    };
    const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
    $("#project").innerHTML = `<header class="ph wrap"><p><a href="projecten.html">← Alle projecten</a></p><h1>${p.title}</h1>
<dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl></header>
<div class="wrap">${zoom(hero(p), "hero-img")}</div>
<section class="wrap block intro"><h2>Over dit project</h2>${p.fullDescription.map(t => `<p>${t}</p>`).join("")}</section>
${p.sections.map(sec).join("")}
<nav class="pn" aria-label="Andere projecten"><a href="project.html?p=${prev.slug}"><small>Vorig project</small><strong>${prev.title}</strong></a><a href="project.html?p=${next.slug}"><small>Volgend project</small><strong>${next.title}</strong></a></nav>`;
    reveal();
  }
}
reveal();
