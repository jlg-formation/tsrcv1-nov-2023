import { cx0, r0, cy0 } from "./constants";

export const getPointFromIndex = (i: number, samples: number) => {
  const angle = ((2 * Math.PI) / samples) * i - Math.PI / 2;
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};
