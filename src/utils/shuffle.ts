export function shuffle(arr: string[]) {
  let newArr = arr;
  let aux, ran;
  for (let index = 0; index < newArr.length; index++) {
    ran = Math.floor(Math.random() * newArr.length);
    aux = newArr[index];
    newArr[index] = newArr[ran];
    newArr[ran] = aux;
  }
  return arr;
}
