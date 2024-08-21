import runEngine from '../index.js';
import getRandomRange from '../getRandomNumber.js';
import divisors from '../divisors.js';

const generateRound = () => {
  const numberA = getRandomRange(1, 100);
  const numberB = getRandomRange(1, 100);
  const divisorsA = divisors(numberA);
  const divisorsB = divisors(numberB);
  const commonNumbers = [];

  let i = 0;
  while (i < divisorsA.length) {
    if (divisorsB.includes(divisorsA[i])) {
      commonNumbers.push(divisorsA[i]);
    }
    i += 1;
  }

  const question = `${numberA} ${numberB}`;
  const answer = commonNumbers[commonNumbers.length - 1];
  return [question, String(answer)];
};

export default function runGcdGame() {
  runEngine('Find the greatest common divisor of given numbers.', generateRound);
}
