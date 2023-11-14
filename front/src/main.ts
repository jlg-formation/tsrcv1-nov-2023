import { Board } from "./Board.js";
import { multiplicationFactor, samples, svgns } from "./constants.js";
import { getPointFromIndex } from "./math.js";
import { querySelector, setAttribute } from "./misc.js";
import "./style.scss";

console.log("coucou");

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
// board.render();

// boucle qui genere du SVG et qui l'insert au bon endroit
const gSample = querySelector("g.samples");
for (let i = 0; i < samples; i++) {
  const p = getPointFromIndex(i, samples);
  const circle = document.createElementNS(svgns, "circle");
  setAttribute(circle, "cx", p.x);
  setAttribute(circle, "cy", p.y);
  setAttribute(circle, "r", 1);
  gSample.appendChild(circle);
}

// on insert les droites
const gLines = querySelector("g.lines");
for (let i = 0; i < samples; i++) {
  const p1 = getPointFromIndex(i, samples);
  const p2 = getPointFromIndex(i * multiplicationFactor, samples);
  const line = document.createElementNS(svgns, "line");
  setAttribute(line, "x1", p1.x);
  setAttribute(line, "y1", p1.y);
  setAttribute(line, "x2", p2.x);
  setAttribute(line, "y2", p2.y);
  gLines.appendChild(line);
}
