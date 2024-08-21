import runEngine from '../index.js';
import getRandomRange from '../getRandomNumber.js';

const generateRound = () => {
  const startNumber = getRandomRange(1, 10);
  const step = getRandomRange(1, 10);
  const xPosition = getRandomRange(1, 9);
  const col = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    col.push(startNumber + (step * i));
  }

  const answer = col[xPosition];
  col[xPosition] = '..';
  const question = col.join(' ');

  return [question, String(answer)];
};

export default function runEvenGame() {
  runEngine('What number is missing in the progression?', generateRound);
}
