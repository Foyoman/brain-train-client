import React, { useState, useEffect } from 'react';
import '../styles.css';
import { Card, Container, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Reactjsion() {
	const [time, setTime] = useState(15);
	const [running, setRunning] = useState(false);

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

	const hello = () => {
		console.log('hello')
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
							style={{ height: '500px', width: '500px', margin: '0 auto', fontSize: '36px'}}	
						>
							Click!
						</Button>
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
