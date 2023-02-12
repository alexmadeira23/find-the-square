import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Help } from './Help'
import { Sizes } from './Sizes'
import { Squares } from './Squares'
import { Square, State } from './Types'
import { deepEqual, randomNumber } from './utils'

function App() {
	const [state, setState] = useState<State>({ phase: { name: "size" }, help: false })

	const handleHelpClose = () => {
		setState((oldState) => ({
			...oldState,
			help: false,
		}))
	}

	const handleRestart = () => {
		setState({ phase: { name: "size" }, help: false })
	}

	const handleHelpOpen = () => {
		setState((oldState) => ({
			...oldState,
			help: true,
		}))
	}

	const handleSideSizeSelection = (size: number) => {
		return () => setState({
			phase: {
				name: "play",
				sideSize: size,
				selectedSquares: [],
				correctSquare: {
					row: randomNumber(1, size),
					column: randomNumber(1, size),
				},
				over: false,
			},
			help: false,
		})
	}

	const handleSquareSelection = (square: Square) => {
		setState((oldState) => {
			const { phase } = oldState
			if (phase.name === "play") {
				return {
					phase: {
						...phase,
						selectedSquares: phase.selectedSquares.concat([square]),
						over: deepEqual(square, phase.correctSquare),
					},
					help: false,
				}
			}
			return {
				phase: {
					name: "size",
				},
				help: false,
			}
		})
	}

	return (
		<div>
			<Help show={state.help} onClose={handleHelpClose} />
			<Header restart={handleRestart} onHelp={handleHelpOpen} />
			{state.phase.name === "size" ? (
				<div className="game">
					<h3>Select side size</h3>
					<Sizes onSizeSelection={handleSideSizeSelection} />
				</div>
			) : (
				<div className="game">
					<h3>{state.phase.over ? `Won in ${state.phase.selectedSquares.length} tries!` : state.phase.selectedSquares.length}</h3>
					<Squares phase={state.phase} selectSquare={handleSquareSelection} />
				</div>
			)}
		</div>
	)
}

export default App
