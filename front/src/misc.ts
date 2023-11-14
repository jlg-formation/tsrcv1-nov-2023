export const querySelector = (cssSelector: string): Element => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error(`Cannot find the selector: ${cssSelector}`);
  }
  return elt;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};
