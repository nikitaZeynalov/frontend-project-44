import { getRandomNumber } from '../utils.js';
import runGameLogic, { roundsNumber } from '../gameLogic.js';

const runEvenGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    rounds[i] = [question, correctAnswer];
  }
  return runGameLogic(rounds, 'Answer "yes" if the number is even, otherwise answer "no"');
};

export default runEvenGame;
