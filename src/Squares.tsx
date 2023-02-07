type squaresProps = {
    nSquares: number,
    selectedSquares: Array<number>,
    selectSquare: (square: number) => void,
}

export function Squares(props: squaresProps) {
	const squares = []
	for (let i = 0; i < props.nSquares; i++)
		squares.push(
            <div 
                key={i} 
                onClick={() => props.selectSquare(i)} 
                className={`square ${props.selectedSquares.includes(i) ? "selected" : "unselected"}`}>
            </div>
        )
	return <div id="squares">{squares}</div>
}
