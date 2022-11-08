/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "../.storybook/**/*.{js,ts,jsx,tsx}",
  ],
	presets: [
		require("@brave/leo/build/tailwind")
	],
  theme: {
    extend: {},
  },
  plugins: [],
}
