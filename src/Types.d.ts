export type Square = {
    row: number,
    column: number
}

export type Size = { name: "size" } 
export type Play = { name: "play", sideSize: number, selectedSquares: Array<Square>, correctSquare: Square, over: boolean }

export type Phase = Size | Play

export type State = {
	phase: Phase,
	help: boolean
}