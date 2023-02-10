import { Square, State } from "./Types"
import { deepEqual, contains } from "./utils"

export function Squares(props: { state: State, selectSquare: (square: Square) => void }) {
    const squares = []
    const over = props.state.phase === "over"
    for (let row = 1; row <= props.state.sideSize!; row++) {
        for (let column = 1; column <= props.state.sideSize!; column++) {
            const square: Square = { row, column }
            squares.push(
                <div
                    key={`${row}x${column}`}
                    onClick={() => {
                        if (!over && !contains(props.state.selectedSquares!, square))
                            props.selectSquare(square)
                    }}
                    className={`square ${contains(props.state.selectedSquares!, square) ? 
                        getSquareType(props.state.correctSquare!, square) : over ? "unselected-over" : "unselected"}`}>
                </div>
            )
        }
    }
    return <div style={squaresStyle(props.state.sideSize!)}>{squares}</div>
}

function squaresStyle(sideSize: number): React.CSSProperties {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${sideSize}, 1fr)`,
        gridTemplateRows: `repeat(${sideSize}, 1fr)`,
        gap: "5px"
    }
}

function getSquareType(correctSquare: Square, square: Square): string {
    if (deepEqual(square, correctSquare))
        return "correct"
    if (getDistance(square.column, correctSquare.column) <= 3 && getDistance(square.row, correctSquare.row) <= 3)
        return "close"
    return "far"
}

function getDistance(a: number, b: number): number {
    return Math.abs(a - b)
}
