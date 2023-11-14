export const querySelector = <T extends Element>(
  cssSelector: string,
  type?: new () => T
): T => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error(`Cannot find the selector: ${cssSelector}`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(
      `Found the selector ${cssSelector} but its type is not ${type.name}`
    );
  }
  return elt as T;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const keys = <T extends object>(o: T): (keyof T)[] => {
  return Object.keys(o) as (keyof T)[];
};
