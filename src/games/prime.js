import runEngine from '../index.js';
import getRandomRange from '../getRandomNumber.js';
import isPrime from '../isprime.js';

const generateRound = () => {
  const question = getRandomRange(1, 100);
  const answer = (isPrime(question)) ? 'yes' : 'no';

  return [question, answer];
};

export default function runPrimeGame() {
  runEngine('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}
