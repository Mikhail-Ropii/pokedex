export const capitalizeFirstLetter = (inputString: string): string => {
  const [firstLetter, ...rest] = inputString;
  return firstLetter.toUpperCase() + rest.join("");
};
