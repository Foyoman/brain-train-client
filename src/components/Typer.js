import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import _ from 'lodash';
import '../styles.css';
import { db } from '../firebase'
import { collection, getDocs, addDoc } from "firebase/firestore";

const Typer = () => {
	const scoresCollectionRef = collection(db, "scores")

	const [quote, setQuote] = useState('');
	const [input, setInput] = useState('');
	const [result, setResult] = useState('');
	const [score, setScore] = useState(0);
	const [style, setStyle] = useState('');
	const [time, setTime] = useState(15);
	const [timer, setTimer] = useState(15); // default timer 
	const [chars, setChars] = useState(0); // sets total amount of characters a user has typed
	const [wpm, setWpm] = useState(0); // wpm = (chars / 5) * 60 / time
	const [running, setRunning] = useState(false);
	const [highScore, setHighScore] = useState(0);

	const postScore = async () => {
		// game, timer, score, user
		await addDoc(scoresCollectionRef, { game: "proto-type", timer: timer, score: wpm, user: "test" });
	}

	useEffect(() => {
		let interval;
		if (running) { // if the running state is true, start the timer
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000); // the time state increments by 1 every second
		} else if (!running) {
			clearInterval(interval); // stop the interval if running is false
		}
		return () => clearInterval(interval);
	}, [running]);

	const calculateWPM = () => {
		setWpm(Math.floor((chars / 5) * 60 / (15 - time)) || 0); // words per minute is the total characters typed correctly divided by 5 times 60 divided by the total seconds elapsed
	}

	const fetchQuote = () => {
		axios("https://api.kanye.rest/").then((response) => { // a quote by kanye west
				setQuote(response.data.quote.toLowerCase());
		});
	}

	const _handleSubmit = (e) => {
		e.preventDefault();
		setRunning(false); // stops the timer 
		if (input === quote) { // adds score as the length of characters in the quote if correct
				setScore(score + quote.length)
		} else {
				setScore(score)
		}
		setInput(''); // clears input
		fetchQuote();
	}

	if (input === quote && input.length > 0) { // auto submits if the input matches the entire quote
		setRunning(false);
		setScore(score + quote.length);
		setInput('');
		fetchQuote();
	}  

	const _handleInput = (e) => {
		const quoteByChar = quote.split('').slice(0, e.target.value.length).join(''); // slices the quote to the current length of the input
		if (e.target.value === quoteByChar) { // to be compared with the input
			setChars(chars + 1); // only add to the char count on a correct keystroke
			setResult('nice')
			setStyle('green')
		} else {
			setResult('nahh')
			setStyle('red')
		}
		calculateWPM(); 
		setRunning(true); // starts the timer when a user starts typing
		setInput(e.target.value); // asynchronous
	}

	const reset = () => {
		fetchQuote();
		setInput('');
		setResult('');
		setScore(0);
		setStyle('');
		setTime(15);
		setChars(0);
		setWpm(0);
		setRunning(false);
	}

	if (time === 0) {
		const finalWpm = Math.floor((chars / 5) * 60 / (15 - time)) || 0
		if (finalWpm > highScore) {
			setHighScore(finalWpm)
		}
		reset();
		postScore();
	}

	useEffect(fetchQuote, []); // load one quote at page load(en)

	useEffect(() => {
		axios("https://random-word-api.herokuapp.com/all").then((response) => {
				let array = []
				array = _.sample(response.data, 5); // this should give me an array of 5 random words but it don't
				console.log(array)
		});
	}, [])

	return (
		<Container className="mt-4">
				<div>
						<h3 className={ style }>{quote}</h3>
						<div className="stats">
								<h3>time (seconds): { time }</h3>
								<h3>wpm: { wpm }</h3>
								<h3>high score: { highScore }</h3>
						</div>
						<form onSubmit={ _handleSubmit }>
								<input type="text" autoFocus onChange={ _handleInput } value={ input } />
						</form>
						<h3>{ result }</h3>
						<button onClick={ reset }>reset</button>
				</div>
				<div className="score-card">
						
				</div>
		</Container>
	);
};

export default Typer;