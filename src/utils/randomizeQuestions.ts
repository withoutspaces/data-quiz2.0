import type { Question } from "../types/questions";

export function randomizeQuestions(array: Question[]) {
  const selectedIndexes = new Set<number>();

  while (selectedIndexes.size < 10) {
    selectedIndexes.add(Math.floor(Math.random() * array.length));
  }

  const resultArray: Question[] = [];
  for (const index of selectedIndexes) {
    resultArray.push(array[index]);
  }
  return resultArray;
}
