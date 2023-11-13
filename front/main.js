console.log("coucou");

const svgns = "http://www.w3.org/2000/svg";

// boucle qui genere du SVG et qui l'insert au bon endroit
const gSample = document.querySelector("g.samples");
if (gSample === null) {
  throw new Error("oups");
}
for (let i = 0; i < 10; i++) {
  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", "34");
  circle.setAttributeNS(null, "cy", "52");
  circle.setAttributeNS(null, "r", "1");
  gSample.appendChild(circle);
}
