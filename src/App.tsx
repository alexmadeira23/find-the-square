import { useState } from 'react';
import './App.css';
import { Squares } from './Squares';
import { Square, State } from './Types';
import { deepEqual, randomNumber } from './utils';

function App() {
	const [state, setState] = useState<State>({ phase: "selection" })

	if (state.phase === "selection")
		return (
			<div className="App">
				<h2>Select side size</h2>
				<div id="types">
					{[7, 8, 9, 10].map(i => 
						<div 
							key={i} 
							onClick={() => {
								setState(() => ({
									phase: "play",
									sideSize: i,
									selectedSquares: [],
									correctSquare: {
										row: randomNumber(1, i),
										column: randomNumber(1, i)
									}
								}))
							}} 
							className="type">{i}
						</div>
					)}
				</div>
			</div>
		)

	return (
		<div className="App">
			<h2>{state.phase === "over" ? `Won in ${state.selectedSquares!.length} tries!` : state.selectedSquares!.length}</h2>
			<Squares
			 	state={state}
				selectSquare={(square: Square) => {
					setState(oldState => ({
						...oldState,
						phase: deepEqual(square, state.correctSquare) ? "over" : oldState.phase,
						selectedSquares: oldState.selectedSquares!.concat([square])
					}))
				}}
			/>
		</div>
	)
}

export default App;
