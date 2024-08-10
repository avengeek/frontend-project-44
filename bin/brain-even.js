#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import getRandomNumber from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let answersCount = 0;

while (answersCount < 3) {
  const randomNumber = getRandomNumber();
  const rightAnswer = (randomNumber % 2) ? 'no' : 'yes';
  answersCount += 1;

  console.log(`${answersCount} question: ${randomNumber}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    break;
  }
  console.log(`Congratulations, ${playerName}`);
}
