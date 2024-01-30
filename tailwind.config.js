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
				typewriter: "typewriter 1.2s steps(10) forwards",
				cursor: "cursor-move 1.2s steps(10) forwards, cursor-blink 1.2s infinite",
				"slide-down": "slide-down 0.4s ease-in-out forwards",
				"slide-up": "slide-up 0.4s ease-in-out forwards",
			},
			keyframes: {
				typewriter: {
					to: {
						left: "100%",
					},
				},
				"cursor-move": {
					to: {
						left: "100%",
					},
				},
				"cursor-blink": {
					"0%, 40%": {
						opacity: 1,
					},
					"50%, 90%": {
						opacity: 0,
					},
				},
				"slide-down": {
					"0%": {
						transform: "translateY(-100%)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
				"slide-up": {
					"0%": {
						transform: "translateY(0)",
					},
					"100%": {
						transform: "translateY(-100%)",
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
