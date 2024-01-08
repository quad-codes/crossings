import { View, Text, Pressable } from "react-native"

export const BACKSPACE = "⌫"

interface KeyboardProps {
	onKeyPress: (key: string) => void
}

export function Keyboard({ onKeyPress }: KeyboardProps) {
	return (
		<View className="w-full h-[180px] justify-around">
			<View className="flex-row justify-center px-4 gap-[4px]">
				{["ε", "ρ", "τ", "υ", "θ", "ι", "ο", "π"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
			</View>
			<View className="flex-row justify-center px-4 gap-[4px]">
				{["α", "σ", "δ", "φ", "γ", "η", "ξ", "κ", "λ"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
			</View>
			<View className="flex-row justify-center px-4 pr-0 gap-[4px]">
				{["ζ", "χ", "ψ", "ω", "β", "ν", "μ"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
				<View className="ml-2">
					<Key character={BACKSPACE} width="1.5u" onPress={() => onKeyPress(BACKSPACE)} />
				</View>
			</View>
		</View>
	)
}

interface KeyProps {
	character: string
	width?: "1u" | "1.5u"
	onPress: () => void
}

function Key({ character, width = "1u", onPress }: KeyProps) {
	const w = width === "1u" ? "w-[35px]" : "w-[50px]"
	return (
		<Pressable onPress={onPress}>
			<View className={`${w} h-[45px] border items-center justify-center rounded`}>
				<Text className="text-2xl">{character.toUpperCase()}</Text>
			</View>
		</Pressable>
	)
}

