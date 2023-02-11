import { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Help } from './Help';
import { Squares } from './Squares';
import { Square, State } from './Types';
import { deepEqual, randomNumber } from './utils';

function App() {
	const [state, setState] = useState<State>({ phase: "selection", help: false })

	if (state.phase === "selection")
		return (
			<div>
				<Help show={state.help} onClose={() => setState(oldState => ({...oldState, help: false}))}/>
				<Header 
					restart={() => setState({ phase: "selection", help: false })} 
					onHelp={() => { setState(oldState => ({...oldState, help: true})) }}
				/>
				<div className="game">
					<h3>Select side size</h3>
					<div id="types">
						{[7, 8, 9, 10].map(i => 
							<div 
								key={i} 
								onClick={() => {
									setState({
										phase: "play",
										help: false,
										sideSize: i,
										selectedSquares: [],
										correctSquare: {
											row: randomNumber(1, i),
											column: randomNumber(1, i)
										}
									})
								}} 
								className="type">{i}
							</div>
						)}
					</div>
				</div>
			</div>
		)

	return (
		<div>
			<Help show={state.help} onClose={() => setState(oldState => ({...oldState, help: false}))}/>
			<Header 
				restart={() => setState({ phase: "selection", help: false })} 
				onHelp={() => { setState(oldState => ({...oldState, help: true})) }}
			/>
			<div className="game">
				<h3>{state.phase === "over" ? `Won in ${state.selectedSquares!.length} tries!` : state.selectedSquares!.length}</h3>
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
		</div>
	)
}

export default App;
