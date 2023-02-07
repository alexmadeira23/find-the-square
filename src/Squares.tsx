import { deepEqual, contains } from "./utils"

export type Square = {
    row: number,
    column: number
}

function squaresStyle(sideSize: number): React.CSSProperties {
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${sideSize}, 1fr)`,
        gridTemplateRows: `repeat(${sideSize}, 1fr)`,
        gap: "5px"
    }
}

type squaresProps = {
    selectedSquares: Array<Square>,
    selectSquare: (square: Square) => void,
    sideSize: number,
    correctSquare: Square,
    over: boolean
}

export function Squares(props: squaresProps) {
    const squares = []
    for (let row = 1; row <= props.sideSize; row++) {
        for (let column = 1; column <= props.sideSize; column++) {
            const square: Square = { row, column }
            squares.push(
                <div
                    key={`${row}x${column}`}
                    onClick={() => {
                        if (!props.over && !contains(props.selectedSquares, square))
                            props.selectSquare(square)
                    }}
                    className={`square ${contains(props.selectedSquares, square) ? 
                        getSquareType(props.correctSquare, square) : props.over ? "unselected-over" : "unselected"}`}>
                </div>
            )
        }
    }
    return <div style={squaresStyle(props.sideSize)}>{squares}</div>
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
