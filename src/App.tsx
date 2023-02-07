import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Squares } from './Squares';
import { randomNumberExclusive } from './utils';

const SQUARES = 100

function App() {

	const [selectedSquares, setSelectedSquares] = useState(new Array<number>())

	const randomSquare = useState(randomNumberExclusive(0, SQUARES))

	console.log(randomSquare)

	return (
		<div className="App">
			<header className="App-header">
				<Squares
					nSquares={SQUARES}
					selectedSquares={selectedSquares}
					selectSquare={(square: number) => {
						setSelectedSquares((old) => old.concat([square]))
					}}
				/>
			</header>
		</div>
	);
}

export default App;
