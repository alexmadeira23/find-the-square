import { Play, Square } from "./Types"
import { deepEqual, contains } from "./utils"

export function Squares(props: { phase: Play, selectSquare: (square: Square) => void }) {
    const squares = []
    const over = props.phase.over
    for (let row = 1; row <= props.phase.sideSize; row++) {
        for (let column = 1; column <= props.phase.sideSize; column++) {
            const square: Square = { row, column }
            squares.push(
                <div
                    key={`${row}x${column}`}
                    onClick={() => {
                        if (!over && !contains(props.phase.selectedSquares, square))
                            props.selectSquare(square)
                    }}
                    style={squareStyle(props.phase.sideSize)}
                    className={contains(props.phase.selectedSquares, square) ? 
                        getSquareType(props.phase.correctSquare, square) : over ? "unselected-over" : "unselected"}>
                </div>
            )
        }
    }
    return <div style={squaresStyle(props.phase.sideSize)}>{squares}</div>
}

function squaresStyle(sideSize: number): React.CSSProperties {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${sideSize}, 1fr)`,
        gridTemplateRows: `repeat(${sideSize}, 1fr)`,
        gap: "5px"
    }
}

const SQUARE_SIZE_CONST = 390

function squareStyle(sideSize: number): React.CSSProperties {
    return {
        borderRadius: "5px",
        height: `${SQUARE_SIZE_CONST / sideSize}px`,
        width: `${SQUARE_SIZE_CONST / sideSize}px`
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
