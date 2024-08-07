import { tw, tws } from "@/utils/twHelpers"
import { View, TouchableOpacity, ViewStyle } from "react-native"
import { Text } from "./Text"
import { PropsWithChildren } from "react"
import { router } from "expo-router"

interface ButtonProps {
	onPress?: () => void
	href?: string
	style?: ViewStyle
	small?: boolean
}

export function Button({ href, onPress, style, small, children }: PropsWithChildren<ButtonProps>) {
	return (
		<TouchableOpacity
			onPress={() => {
				if (href !== undefined) router.navigate(href)
				return onPress?.()
			}}
		>
			<View style={tws(`items-center rounded-lg bg-primary px-4 py-2`, style)}>
				<Text style={tws(`text-lg text-on-primary`, small && `text-sm`)}>{children}</Text>
			</View>
		</TouchableOpacity>
	)
}
