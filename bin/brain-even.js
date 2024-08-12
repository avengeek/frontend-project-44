#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let answersCount = 0;

while (answersCount < 3) {
  const randomNumber = getRandomNumber();
  const rightAnswer = (randomNumber % 2) ? 'no' : 'yes';

  console.log(`Question: ${randomNumber}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === playerAnswer) {
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
