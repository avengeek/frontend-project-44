const getRandomNumber = (max = 100) => {
  const randomNumber = Math.floor(Math.random() * max) + 1;
  return randomNumber;
};

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const divisors = (number) => {
  const col = [];
  for (let j = 1; j <= (number); j += 1) {
    if (number % j === 0) {
      col.push(j);
    }
  }
  return col;
};

export { getRandomNumber, divisors, isPrime };
