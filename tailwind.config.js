const { fontFamily, colors } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			full: "1920px",
			desktop: "1025px",
			tabletMax: "941px",
			tablet: "769px",
			mobileMax: "491px",
			mobile: "376px",
		},
		extend: {
			fontFamily: {
				title: ["var(--font-inter)"],
				text: ["var(--font-roboto-mono)"],
			},
			colors: {
				black: "#000000",
				white: "#ffffff",
				gray: "#e9e9e9",
				darkBlue: "#1b2f52",
				heavyDark: "#1b1f20",
				lightDark: "#2e3536",
				peach: "#e77c58",
				darkPeach: "#f76435",
				placeholder: "rgba(0, 0, 0, 0.3)",
			},
			scale: {
				99: "0.99",
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				".linkHeader": {
					fontFamily: theme("fontFamily.title"),
					fontWeight: 700,
					color: theme("colors.white"),
					borderBottomWidth: 3,
					borderStyle: "solid",
					borderColor: "transparent",
					willChange: "transform",
					"&:active": {
						transform: "scale(0.99)",
					},
					"@media (min-width: 769px)": {
						"&:hover": {
							borderColor: theme("colors.peach"),
							color: theme("colors.peach"),
						},
					},
				},
				".linkHeaderActive": {
					fontFamily: theme("fontFamily.title"),
					fontWeight: 700,
					color: theme("colors.peach"),
					borderBottomWidth: 3,
					borderStyle: "solid",
					willChange: "transform",
					borderColor: theme("colors.peach"),
				},
			});
			addUtilities({
				".transitionColor": {
					transition: "color 0.3s ease-in-out",
				},
				".transitionIcon": {
					transition: "fill 0.3s, transform 0.1s ease-in-out",
				},
				".transitionBorder": {
					transition: "border 0.3s ease-in-out",
				},
				".transitionAll": {
					transition: "transform 0.1s, color 0.3s, border 0.3s ease-in-out",
				},
			});
		}),
	],
};
