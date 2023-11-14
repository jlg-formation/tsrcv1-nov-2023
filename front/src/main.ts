import { multiplicationFactor, samples, svgns } from "./constants.js";
import { getPointFromIndex } from "./math.js";
import "./style.scss";

console.log("coucou");

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

// on insert les droites
const gLines = document.querySelector("g.lines");
if (gLines === null) {
  throw new Error("oups");
}
for (let i = 0; i < samples; i++) {
  const p1 = getPointFromIndex(i, samples);
  const p2 = getPointFromIndex(i * multiplicationFactor, samples);
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");
  gLines.appendChild(line);
}
