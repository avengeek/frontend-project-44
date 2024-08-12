#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('What number is missing in the progression?');

let answersCount = 0;

while (answersCount < 3) {
  const startNumber = getRandomNumber(10);
  const step = getRandomNumber(10);
  const xPosition = getRandomNumber(9);
  const col = [startNumber];
  for (let i = 1; i < 10; i += 1) {
    col.push(startNumber + (step * i));
  }

  const rightAnswer = col[xPosition];
  col[xPosition] = '..';
  const colText = col.join(' ');

  console.log(`Question: ${colText}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === +playerAnswer) {
    console.log('Correct!');
    answersCount += 1;
    if (answersCount === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}' \nLet's try again, ${playerName}!`);
    break;
  }
}
