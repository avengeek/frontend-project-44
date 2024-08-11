#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber, divisors } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('Find the greatest common divisor of given numbers.');

let answersCount = 0;

while (answersCount < 3) {
  const numberA = getRandomNumber(20);
  const numberB = getRandomNumber(20);
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

  answersCount += 1;

  console.log(`${answersCount} question: ${numberA}  ${numberB}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === +playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    break;
  }
  console.log(`Congratulations, ${playerName}`);
}
