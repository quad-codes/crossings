// import { Direction, Letter } from "@/types"
// import { forEach, pickBy, range, reduce } from "lodash"

// export const prepLettersGrid = (crosser) => {
// 	const { size, spots, across, down } = crosser

// 	const letters: Record<string, Letter | "" | undefined> = {}
// 	const guesses: Record<string, Letter | "" | undefined> = {}

// 	range(size[0]).forEach((row) => {
// 		range(size[1]).forEach((col) => {
// 			letters[`${row}-${col}`] = undefined
// 			guesses[`${row}-${col}`] = undefined
// 		})
// 	})

// 	forEach(across, (value, key) => {
// 		const row = spots[key].row
// 		const startCol = spots[key].col
// 		const endCol = startCol + value.answer.length - 1

// 		range(startCol, endCol + 1).forEach((col, i) => {
// 			letters[`${row}-${col}`] = value.answer[i]
// 			guesses[`${row}-${col}`] = ""
// 		})
// 	})

// 	forEach(down, (value, key) => {
// 		const col = spots[key].col
// 		const startRow = spots[key].row
// 		const endRow = startRow + value.answer.length - 1

// 		range(startRow, endRow + 1).forEach((row, i) => {
// 			letters[`${row}-${col}`] = value.answer[i]
// 			guesses[`${row}-${col}`] = ""
// 		})
// 	})

// 	return { letters, guesses }
// }

// export const activeSpotForPosition = (
// 	crosser,
// 	row: number | null,
// 	col: number | null,
// 	direction: Direction,
// ): number | null => {
// 	if (row === null || col === null) {
// 		return null
// 	}

// 	const { spots } = crosser

// 	const directionSpots = pickBy(spots, (v, k) => crosser[direction][k] !== undefined)

// 	const flippedSpots = reduce(
// 		directionSpots,
// 		(acc, v, k) => ({ ...acc, [`${v.row}-${v.col}`]: k }),
// 		{},
// 	)

// 	if (direction === "across") {
// 		while (col >= 0) {
// 			if (flippedSpots[`${row}-${col}`]) {
// 				return flippedSpots[`${row}-${col}`]
// 			}
// 			col--
// 		}
// 	} else {
// 		while (row >= 0) {
// 			if (flippedSpots[`${row}-${col}`]) {
// 				return flippedSpots[`${row}-${col}`]
// 			}
// 			row--
// 		}
// 	}
// 	return null
// }
