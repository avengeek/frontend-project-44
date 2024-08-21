import runEngine from '../index.js';
import getRandomRange from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomRange(1, 100);

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default function runEvenGame() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
