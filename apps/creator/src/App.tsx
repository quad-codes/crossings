import { range } from "lodash"
import { useState } from "react"
import { Checkbox } from "./components/ui/checkbox"
import { Label } from "./components/ui/label"
import clsx from "clsx"
import { spotsCalc } from "./cw-logic"
import { Input } from "./components/ui/input"

export function App() {
	const [nRows, setNRows] = useState(5)
	const [nCols, setNCols] = useState(5)
	const [blackMode, setBlackMode] = useState(false)
	const [debug, setDebug] = useState(false)
	const [deads, setDeads] = useState([])

	const [selectedCell, setSelectedCell] = useState("0-0")
	const [selectedDirection, setSelectedDirection] = useState("across")

	const spots = spotsCalc(nRows, nCols, deads)

	function Tile({ cell, dead, spot }) {
		return (
			<div
				onClick={() => {
					if (!blackMode) return

					console.log("will black", cell)
					if (dead) {
						setDeads(deads.filter((d) => d !== cell))
					} else {
						setDeads([...deads, cell].sort())
					}
				}}
				className={clsx("size-12 border-2 border-black", dead && "bg-black")}
			>
				{spot}
			</div>
		)
	}

	return (
		<>
			<h1>Creator</h1>
			<div>
				<div className="flex">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="rows">Rows</Label>
						<Input
							type="number"
							id="rows"
							placeholder="Rows"
							value={nRows}
							onChange={(e) => setNRows(e.nativeEvent.target.value)}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="cols">Cols</Label>
						<Input
							type="number"
							id="cols"
							placeholder="Cols"
							value={nCols}
							onChange={(e) => setNCols(e.nativeEvent.target.value)}
						/>
					</div>
				</div>

				<div className="flex items-center  space-x-2">
					<Checkbox checked={blackMode} onCheckedChange={(v) => setBlackMode(!!v)} />
					<Label>black mode</Label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox checked={debug} onCheckedChange={(v) => setDebug(!!v)} id="debug" />
					<Label htmlFor="debug">debug</Label>
				</div>
			</div>

			<div className="flex-col flex">
				{range(nRows).map((i) => (
					<div className="flex flex-row">
						{range(nCols).map((j) => (
							<Tile
								key={`${i}-${j}`}
								cell={`${i}-${j}`}
								dead={deads.includes(`${i}-${j}`)}
								spot={spots[`${i}-${j}`]}
							/>
						))}
					</div>
				))}
			</div>

			{debug && (
				<div className="flex flex-col">
					<code>
						size: {nRows}x{nCols}
					</code>
					<code>dead: {deads.join(", ")}</code>
				</div>
			)}
		</>
	)
}

// flow of creator:
// set grid size
// set blacks
// select lines and type clues and answers
// display all the clues and answers on the right
// maybe display all possible "spots", and allow for clue entereing on the sidebar
