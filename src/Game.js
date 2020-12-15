import React, { useEffect, useState } from 'react';
import game from './Game.css';

const Game = () => {
  // Initialising states with default values
  const [word, setWord] = useState('');
  const [value, setValue] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState('');

  // Starts generating words as soon as
  // the component is placed in the DOM Tree
  useEffect(() => {
    wordGenerate();
  }, []);

  // Defining questions with their
  // corresponding answers
  const QUESTION = [
    'Greatest Computer Science portal for geeks',
    'Full form of DSA',
    'Most Used Web Framework',
    'Founder of GeeksForGeeks',
    'Who Created Facebook',
    'CEO of Tesla and SpaceX',
    'When 5G going to launch in India',
  ];

  const ANSWERS = [
    'GeeksForGeeks',
    'Data Structures and algorithms',
    'React',
    'Sandeep Jain',
    'Mark Zuckerberg',
    'Elon Musk',
    '2021',
  ];

  // Generating Random questions and storing
  // their answers in the state variable
  const wordGenerate = () => {
    const randomNumber = Math.floor(Math.random() * ANSWERS.length);
    setWord(ANSWERS[randomNumber]);
    setQuestion(QUESTION[randomNumber]);
  };

  // checking if the typed answer is correct or not
  const check = () => {
    if (value) {
      if (value.toLowerCase() === word.toLowerCase()) {
        setValue('');
        setErr(null);
        setSuccess('Correct Answer');
        setScore((prevScore) => prevScore + 1);
        wordGenerate();
      } else {
        setSuccess(null);
        setErr('Wrong Answer');
        setScore((prevScore) => prevScore - 1);
        setValue('');
        wordGenerate();
      }
    } else {
      setSuccess(null);
      setErr('Please enter the value!');
    }
  };

  // defining function to skip
  // to another question
  const reset = () => {
    setValue(null);
    setSuccess(null);
    setErr(null);
    wordGenerate();
  };

  // Writing the JSX Code
  return (
    <div>
      <p className={game.Game__score}>SCORE : {score}</p>
      {question ? (
        <p className={game.Game__question}>Question: {question}</p>
      ) : null}

      {err ? <p className={game.Game__error}>{err}</p> : null}

      {success ? <p className={game.Game__success}>{success}</p> : null}

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Answer Here!"
        className={game.Game__input_answer}
      />

      <button onClick={reset} className={game.Game__start}>
        Reset
      </button>
      <button onClick={check} className={game.Game__submit}>
        Enter
      </button>
    </div>
  );
};

export default Game;
