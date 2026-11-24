from pathlib import Path

root = Path("publish")
candidates = list(root.rglob("index.html"))
if not candidates:
    raise SystemExit("Nie znaleziono index.html w katalogu publikacji.")
page = candidates[0]
html = page.read_text(encoding="utf-8")
if "rn-heart-layer" in html:
    print("Efekt serduszek jest już dodany.")
    raise SystemExit(0)

css = """
<style id="rn-heart-style">
.rn-heart-layer{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:80;contain:strict}
.rn-heart{position:absolute;bottom:-40px;color:#d69aff;opacity:0;filter:drop-shadow(0 0 8px rgba(191,112,255,.55));animation:rn-heart-rise var(--duration,12s) linear forwards}
@keyframes rn-heart-rise{0%{transform:translate3d(0,0,0) rotate(-12deg) scale(.65);opacity:0}12%{opacity:.28}80%{opacity:.2}100%{transform:translate3d(var(--drift,25px),-115vh,0) rotate(18deg) scale(1.12);opacity:0}}
@media(prefers-reduced-motion:reduce){.rn-heart-layer{display:none!important}}
</style>
"""
js = """
<script id="rn-heart-script">
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const layer=document.createElement('div');layer.className='rn-heart-layer';layer.setAttribute('aria-hidden','true');document.body.appendChild(layer);
  const spawn=()=>{if(document.hidden)return;const h=document.createElement('span');h.className='rn-heart';h.textContent=Math.random()>.5?'♥':'♡';h.style.left=(Math.random()*96+2)+'vw';h.style.fontSize=(12+Math.random()*15)+'px';h.style.setProperty('--duration',(10+Math.random()*7)+'s');h.style.setProperty('--drift',(-35+Math.random()*70)+'px');layer.appendChild(h);h.addEventListener('animationend',()=>h.remove(),{once:true});};
  let timer=setInterval(spawn,1900);document.addEventListener('visibilitychange',()=>{clearInterval(timer);if(!document.hidden)timer=setInterval(spawn,1900);});
})();
</script>
"""
html = html.replace("</head>", css + "\n</head>", 1)
html = html.replace("</body>", js + "\n</body>", 1)
page.write_text(html, encoding="utf-8")
print(f"Dodano subtelne animowane serca do {page}")
