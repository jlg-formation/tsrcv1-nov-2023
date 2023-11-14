/**
 * Get a random number
 *
 * @param {number} min
 * @param {number} max
 * @param {number} [decimal=0]
 * @return {*}  {number}
 */
export const random = (min: number, max: number, decimal = 0): number => {
  return +(Math.random() * (max - min) + min).toFixed(decimal);
};
