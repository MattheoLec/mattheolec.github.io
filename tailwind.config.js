import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				cursor: "cursor-blink 1.2s infinite",
			},
			keyframes: {
				"cursor-blink": {
					"0%, 40%": {
						opacity: 1,
					},
					"50%, 90%": {
						opacity: 0,
					},
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#3b82f6",
						},
						secondary: {
							DEFAULT: "#ea580c",
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: "#3730a3",
						},
					},
				},
			},
		}),
	],
};
