import React, { useEffect, useState } from 'react';
import './Game.css';

const Game = () => {
  const [word, setWord] = useState('');
  const [value, setValue] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');
  const [score, setScore] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');

  useEffect(() => {
    wordGenerate();
  }, []);

  const WORDS = [
    'GeeksForGeeks',
    'Data Structures and algorithms',
    'React',
    'Sandeep Jain',
  ];

  const SCRAMBLED = [
    'Greatest Computer Science portal for geeks',
    'Full form of DSA',
    'Most Used Web Framework',
    'Founder of GeeksForGeeks',
  ];

  const wordGenerate = () => {
    const randomNumber = Math.floor(Math.random() * WORDS.length);
    setWord(WORDS[randomNumber]);
    setScrambledWord(SCRAMBLED[randomNumber]);
  };

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
      }
    } else {
      setSuccess(null);
      setErr('Please enter the value!');
    }
  };

  const reset = () => {
    setValue(null);
    setSuccess(null);
    setErr(null);
    wordGenerate();
  };

  return (
    <div>
      <p className="Game__score">SCORE : {score}</p>

      {scrambledWord ? (
        <p className="Game__scrambled_word">Word: {scrambledWord}</p>
      ) : null}

      {err ? <p className="Game__error">{err}</p> : null}

      {success ? <p className="Game__success">{success}</p> : null}

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Answer Here!"
        className="Game__answer"
      />

      <button onClick={reset} className="Game__start">
        Reset
      </button>
      <button onClick={check} className="Game__submit">
        Enter
      </button>
    </div>
  );
};

export default Game;
