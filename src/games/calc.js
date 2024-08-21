import runEngine from '../index.js';
import getRandomRange from '../getRandomNumber.js';

const generateRound = () => {
  const numberA = getRandomRange(0, 10);
  const numberB = getRandomRange(0, 10);
  const sign = getRandomRange(0, 3);
  const operations = ['+', '-', '*'];

  let answer;
  switch (operations[sign]) {
    case '+':
      answer = (numberA + numberB);
      break;
    case '-':
      answer = (numberA - numberB);
      break;
    default:
      answer = (numberA * numberB);
  }

  const question = `${numberA} ${operations[sign]} ${numberB}`;

  return [question, String(answer)];
};

export default function runCalcGame() {
  runEngine('What is the result of the expression?', generateRound);
}
