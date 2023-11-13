console.log("coucou");

const svgns = "http://www.w3.org/2000/svg";
const samples = 10;

const r0 = 45;
const cx0 = 50;
const cy0 = 50;

const getPointFromIndex = (i, samples) => {
  const angle = ((2 * Math.PI) / samples) * i;
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};

// boucle qui genere du SVG et qui l'insert au bon endroit
const gSample = document.querySelector("g.samples");
if (gSample === null) {
  throw new Error("oups");
}
for (let i = 0; i < samples; i++) {
  const p = getPointFromIndex(i, samples);
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", p.x + "");
  circle.setAttributeNS(null, "cy", p.y + "");
  circle.setAttributeNS(null, "r", "1");
  gSample.appendChild(circle);
}
