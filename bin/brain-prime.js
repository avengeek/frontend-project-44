#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber, isPrime } from '../src/index.js';

console.log('Welcome to the Brain Games!');

const playerName = hello();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let answersCount = 0;

while (answersCount < 3) {
  const number = getRandomNumber();
  const rightAnswer = (isPrime(number)) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  const playerAnswer = readlineSync.question('Your answer: ');

  if (rightAnswer === playerAnswer) {
    console.log('Correct!');
    answersCount += 1;
    if (answersCount === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    break;
  }
}
