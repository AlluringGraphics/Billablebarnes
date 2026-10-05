const PRICE = 6.99; // Placeholder. Set once the print partner's cost is known.
const BAG_KEY = "rtc-bag";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let occasion = "all";
let vibe = "all";
let current = null;

function loadBag() {
  try { return JSON.parse(localStorage.getItem(BAG_KEY)) || []; } catch { return []; }
}
function saveBag(bag) {
  try { localStorage.setItem(BAG_KEY, JSON.stringify(bag)); } catch {}
  $("#bagCount").textContent = bag.reduce((n, l) => n + l.qty, 0);
}
let bag = loadBag();

function coverHTML(card) {
  return `<div class="cover ${card.vibe}">
    <span class="occ">${esc(card.occasion)}</span>
    <span class="words">${esc(card.front)}</span>
    <span class="brand">REAL TALK CARDS · ${VIBES[card.vibe].name.toUpperCase()}</span>
  </div>`;
}
function insideHTML(card, p = {}) {
  const lines = [p.to && `To ${p.to}`, p.note, p.from && `From ${p.from}`].filter(Boolean).map(esc).join("\n");
  return `<div class="cover inside-face">
    <span class="words">${esc(card.inside)}</span>
    ${lines ? `<span class="personal">${lines}</span>` : ""}
  </div>`;
}

function renderFilters() {
  const sel = $("#occasionSelect");
  sel.innerHTML = `<option value="all">All occasions</option>` +
    OCCASIONS.map((o) => `<option>${esc(o)}</option>`).join("");
  sel.onchange = () => { occasion = sel.value; renderChips(); renderGrid(); };
  renderChips();
}

function renderChips() {
  const available = new Set(CARDS.filter((c) => occasion === "all" || c.occasion === occasion).map((c) => c.vibe));
  if (vibe !== "all" && !available.has(vibe)) vibe = "all";
  const keys = ["all", ...Object.keys(VIBES).filter((k) => available.has(k))];
  $("#vibeChips").innerHTML = keys.map((k) =>
    `<button class="chip" data-vibe="${k}" aria-pressed="${k === vibe}">${k === "all" ? "All vibes" : VIBES[k].name}</button>`
  ).join("");
  $("#vibeChips").querySelectorAll(".chip").forEach((b) =>
    b.onclick = () => { vibe = b.dataset.vibe; renderChips(); renderGrid(); });
}

function renderGrid() {
  const list = CARDS.filter((c) => (occasion === "all" || c.occasion === occasion) && (vibe === "all" || c.vibe === vibe));
  $("#resultCount").textContent = `${list.length} card${list.length === 1 ? "" : "s"}`;
  $("#grid").innerHTML = list.map((c) =>
    `<button class="tile" data-id="${c.id}" aria-label="${esc(c.occasion)}, ${VIBES[c.vibe].name}: ${esc(c.front)}">
      ${coverHTML(c)}
      <span class="meta"><span>${esc(c.occasion)}</span><span>${VIBES[c.vibe].name}</span></span>
    </button>`
  ).join("");
  $("#grid").querySelectorAll(".tile").forEach((t) => t.onclick = () => openCard(+t.dataset.id));
}

function personalization() {
  const f = $("#personalize");
  return { to: f.to.value.trim(), from: f.from.value.trim(), note: f.note.value.trim() };
}

function showFace(inside) {
  $("#detailFront").classList.toggle("show", !inside);
  $("#detailInside").classList.toggle("show", inside);
  $("#flipBtn").textContent = inside ? "See front" : "See inside";
  $("#flipBtn").dataset.inside = inside ? "1" : "";
}

function openCard(id) {
  current = CARDS.find((c) => c.id === id);
  $("#personalize").reset();
  $("#detailFront").innerHTML = coverHTML(current);
  $("#detailInside").innerHTML = insideHTML(current);
  $("#detailPrice").textContent = PRICE.toFixed(2);
  showFace(false);
  $("#cardDialog").showModal();
}

$("#flipBtn").onclick = () => showFace(!$("#flipBtn").dataset.inside);
$("#personalize").oninput = () => {
  $("#detailInside").innerHTML = insideHTML(current, personalization());
  showFace(true);
};
$("#personalize").onsubmit = (e) => {
  e.preventDefault();
  const qty = Math.min(50, Math.max(1, parseInt(e.target.qty.value, 10) || 1));
  bag.push({ id: current.id, qty, ...personalization() });
  saveBag(bag);
  $("#cardDialog").close();
  openBag();
};

function openBag() {
  if (!bag.length) {
    $("#bagItems").innerHTML = `<p>Your bag is empty.</p>`;
    $("#bagFooter").innerHTML = "";
  } else {
    $("#bagItems").innerHTML = bag.map((l, i) => {
      const c = CARDS.find((x) => x.id === l.id);
      const who = [l.to && `To ${l.to}`, l.from && `From ${l.from}`].filter(Boolean).join(" · ");
      return `<div class="bag-line">${coverHTML(c)}
        <div><strong>${esc(c.occasion)} · ${VIBES[c.vibe].name}</strong>
          <small>${esc(c.front)}</small>${who ? `<small>${esc(who)}</small>` : ""}
          <small>Qty ${l.qty}</small></div>
        <button class="remove" data-i="${i}">Remove</button></div>`;
    }).join("");
    const total = bag.reduce((s, l) => s + l.qty * PRICE, 0);
    $("#bagFooter").innerHTML = `<div class="total"><span>Subtotal</span><span>$${total.toFixed(2)}</span></div>
      <button class="cta full" id="checkoutBtn">Checkout</button>
      <p class="notice" id="checkoutNote" hidden>Checkout is not live yet. Orders will go to our print-on-demand partner once it's connected. Your bag is saved on this device.</p>`;
    $("#checkoutBtn").onclick = () => { $("#checkoutNote").hidden = false; };
    $("#bagItems").querySelectorAll(".remove").forEach((b) => b.onclick = () => {
      bag.splice(+b.dataset.i, 1); saveBag(bag); openBag();
    });
  }
  if (!$("#bagDialog").open) $("#bagDialog").showModal();
}

$("#bagBtn").onclick = openBag;
document.querySelectorAll("[data-close]").forEach((b) => b.onclick = () => b.closest("dialog").close());
document.querySelectorAll("dialog").forEach((d) => d.onclick = (e) => { if (e.target === d) d.close(); });

renderFilters();
renderGrid();
saveBag(bag);
