/* eslint-disable import/no-unresolved */
import readlineSync from '../node_modules/lib/readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

export default sayGreetings;
