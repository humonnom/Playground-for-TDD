export const isObject = (typeOfTarget) => {
  return typeOfTarget === "object";
};

export const isProperty = (key) => {
  return key !== "children";
};
