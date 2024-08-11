#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber, divisors } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('Find the greatest common divisor of given numbers.');

let answersCount = 0;

while (answersCount < 3) {
  const numberA = getRandomNumber(100);
  const numberB = getRandomNumber(100);
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

  const rightAnswer = commonNumbers[commonNumbers.length - 1];

  console.log(`Question: ${numberA}  ${numberB}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === +playerAnswer) {
    console.log('Correct!');
    answersCount += 1;
    if (answersCount === 3) {
      console.log(`Congratulations, ${playerName}`);
    }
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    break;
  }
}
