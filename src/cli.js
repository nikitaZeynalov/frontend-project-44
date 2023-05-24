import readlineWSync from 'readline-sync';

const sayGreetings = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineWSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
};

export default sayGreetings;


