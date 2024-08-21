export default function divisors(number) {
  const col = [];
  for (let j = 1; j <= (number); j += 1) {
    if (number % j === 0) {
      col.push(j);
    }
  }
  return col;
}
