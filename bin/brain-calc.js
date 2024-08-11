#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../src/cli.js';
import { getRandomNumber } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const playerName = hello();
console.log('What is the result of the expression?');

let answersCount = 0;

while (answersCount < 3) {
  const numberA = getRandomNumber(10);
  const numberB = getRandomNumber(10);
  const sign = getRandomNumber(3);
  const operations = ['+', '-', '*'];
  let rightAnswer;

  switch (operations[sign - 1]) {
    case '+':
      rightAnswer = (numberA + numberB);
      break;
    case '-':
      rightAnswer = (numberA - numberB);
      break;
    case '*':
      rightAnswer = (numberA * numberB);
      break;
    default:
      console.log('Error!!!');
  }

  console.log('Question:', numberA, operations[sign - 1], numberB);
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
