import React, { useState, useEffect } from 'react';
import '../styles.css';
import { Card, Container, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles.css'

export default function Reactjsion() {
	const [time, setTime] = useState(0);
	const [runningA, setRunningA] = useState(false);
	const [runningB, setRunningB] = useState(false);
	const [gameState, setGameState] = useState('start');
	const [startTime, setStartTime] = useState(0)
	const [elapsed, setElapsed] = useState(0);
	const [goTime, setGoTime] = useState(Math.floor(Math.random() * 11) + 5)

	useEffect(() => {
		let interval;
		if (runningA) { // if the runningA state is true, start the timer
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000); // the time state increments by 1 every second
		} else if (!runningA) {
			clearInterval(interval); // stop the interval if runningA is false
		}
		return () => clearInterval(interval);
	}, [runningA]);

	useEffect(() => {
		let interval;
		if (runningB) {
			interval = setInterval(function() {
				let elapsedTime = Date.now() - startTime;
				setElapsed((elapsedTime / 1000).toFixed(3));
			}, 100);
		} else if (!runningB) {
			clearInterval(interval)
		}
		return () => clearInterval(interval);
	}, [runningB])

	const handleClick = () => {
		if (gameState === 'start') {
			setGameState('wait');
			setRunningA(true);
		}
		if (gameState === 'click') {
			setGameState('result');
			setRunningB(false)
		}
		if (gameState === 'result') {
			setGameState('start');
			setElapsed(0);
			setGoTime(Math.floor(Math.random() * 4) + 1);
		}
	}

	if (time === goTime) {
		setTime(0)
		setStartTime(Date.now())
		setGameState('click');
		setRunningA(false);
		setRunningB(true);
	}

	return (
		<Container 
				className="d-flex align-items-center justify-content-center"
				style={{ minHeight: "20vh", marginTop: "1em" }}
		>
			<div className='w-100' style={{ maxWidth: '550px' }}>
				<Card className='d-flex justify-content-center align-items-center'>
					<Card.Body>
						<h2 className="text-center mb-4">React(js)ion</h2>
						<Button
							className={`
								${gameState === "start" ? "btn-primary" : ""} 
								${gameState === "wait" ? "btn-dark" : ""} 
								${gameState === "click" ? "btn-success" : ""}
								${gameState === "result" ? "btn-info" : ""}
							`}
							style={{ height: '500px', width: '500px', margin: '0 auto', fontSize: '36px', transition: 'none'}}	
							onClick={ handleClick }
						>
							Start
						</Button>
						<p>{ elapsed }</p>
					</Card.Body>
				</Card>
			</div>
		</Container>
	)
}

// cycling through maybe 5 different buttons, users are prompted to click as soon as they see a certain symbol, let's call it 'react'
// click to start. setStart('true')
// cycle through the different buttons at random 2 seconds at a time
// maybe an easy mode that's just like human benchmark

// ${gameState === "click" ? "btn-success" : ""}

