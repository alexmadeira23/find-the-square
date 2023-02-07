import React, { useState } from 'react';
import './App.css';
import { Square, Squares } from './Squares';
import { deepEqual, randomNumber } from './utils';

type Phase = "selection" | "play" | "over"

function App() {

	const [phase, setPhase] = useState<Phase>("selection")

	const [sideSize, setSideSize] = useState<number>(0)

	const [selectedSquares, setSelectedSquares] = useState(new Array<Square>())

	const [correctSquare, setCorrectSquare] = useState<Square>({ row: 0,column: 0 })

	if (phase === "selection")
		return (
			<div className="App">
				<h2>Select side size</h2>
				<div id="types">
					{[7, 8, 9, 10].map(i => 
						<div 
							key={i} 
							onClick={() => {
								setSideSize(i)
								setCorrectSquare({
									row: randomNumber(1, i),
									column: randomNumber(1, i)
								})
								setPhase("play")
							}} 
							className="type">{i}
						</div>
					)}
				</div>
			</div>
		)

	return (
		<div className="App">
			<h2>{phase === "over" ? `Won in ${selectedSquares.length} tries!` : selectedSquares.length}</h2>
			<Squares
				selectedSquares={selectedSquares}
				selectSquare={(square: Square) => {
					if (deepEqual(square, correctSquare))
						setPhase("over")
					setSelectedSquares((old) => old.concat([square]))
				}}
				sideSize={sideSize}
				correctSquare={correctSquare}
				over={phase === "over"}
			/>
		</div>
	)
}

export default App;
