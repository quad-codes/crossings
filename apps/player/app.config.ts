import "ts-node/register" // this helps to import TypeScript files
import { ExpoConfig } from "expo/config"
import v from "./versions.json"

const config: ExpoConfig = {
	name: "Σταυρόλεξο Τώρα",
	slug: "crossings",
	scheme: "crossings",
	version: v.version,
	icon: "./assets/app-icon.png",
	ios: {
		bundleIdentifier: "codes.quad.crossings",
		buildNumber: String(v.build),
		config: { usesNonExemptEncryption: false },
	},
	android: {
		package: "com.bypavlos.crossings",
		versionCode: v.build,
	},
	userInterfaceStyle: "automatic",
	plugins: [["expo-router", { origin: "https://n" }]],

	extra: {
		eas: { projectId: "99375595-9000-4912-bb9a-1258a6ed9c0f" },
	},
}
export default config
