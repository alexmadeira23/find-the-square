import React, { useState } from 'react';
import './App.css';
import { SIDE_SIZE, Square, Squares } from './Squares';
import { deepEqual, randomNumber } from './utils';

function App() {

	const [selectedSquares, setSelectedSquares] = useState(new Array<Square>())

	const [correctSquare] = useState({
		row: randomNumber(1, SIDE_SIZE),
		column: randomNumber(1, SIDE_SIZE)
	})

	const [over, setOver] = useState(false)

	return (
		<div className="App">
			<h2>{selectedSquares.length}</h2>
			<Squares
				selectedSquares={selectedSquares}
				selectSquare={(square: Square) => {
					if (deepEqual(square, correctSquare))
						setOver(true)
					setSelectedSquares((old) => old.concat([square]))
				}}
				correctSquare={correctSquare}
				over={over}
			/>
		</div>
	);
}

export default App;
