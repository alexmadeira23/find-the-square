type Phase = "selection" | "play" | "over"

export type Square = {
    row: number,
    column: number
}

export type State = {
	phase: Phase,
	sideSize?: number,
	selectedSquares?: Array<Square>,
	correctSquare?: Square
}