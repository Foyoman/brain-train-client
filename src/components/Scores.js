import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

export default function Scores() {
	const [scores, setScores] = useState([])
	const [game, setGame] = useState('')
	const scoresCollectionRef = collection(db, "scores")


	useEffect(() => {
		// promise; async

		const getScores = async () => {
			const response = await getDocs(scoresCollectionRef);
			setScores(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// setScores(_(prescores).sortBy('scores'));
		};
		// currently trying to sort the scores by score
		
		getScores()
		// setGame( scores[0].game )
	}, [])

	// debugger
	return (
		<div>
			<Table>
				<thead>
					<tr>
						<th>💯</th>
						<th>Game</th>
						<th>Score</th>
						<th>Timer</th>
						<th>User</th>
					</tr>
				</thead>
				<tbody>
					{ scores.map((score, i) => { 
						return (
							<tr key={ score.id }>
								<td>{ i + 1 }</td>
								<td>{ score.game }</td>
								<td>{ score.score }</td>
								<td>{ score.timer }s</td>
								<td>{ score.user }</td>
							</tr>
						)
					}) }
				</tbody>
			</Table>
		</div>
	)
}


// { scores.map((score) => { return 
// 	<td>{ score.game }</td>
// 	<td>{ score.score }</td>
// 	<td>{ score.timer }</td>
// 	<td>{ score.user }</td>
// }) }

// const sortedUID = _(people).sortBy('uid');
