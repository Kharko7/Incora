export const getArrayNumbersFromNumber = (number: number): number[] => {
  let arrayItems: number[] = [];
  for (let i = 1; i <= number; i++) {
    arrayItems.push(i)
  };
  return arrayItems;
};

export const splitItemsOnArraysInArray = (array: number[], size: number): number[][] => {
  const arr: number[] = [...array];
  const result: number[][] = [];

  while (arr.length) {
    result.push(arr.splice(0, size));
  };

  return result;
};
