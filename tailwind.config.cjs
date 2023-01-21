/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: "'Helvetica Now Display', sans-serif"
			},
			letterSpacing: {
        normal: '.03em',
      },
			boxShadow: {
        'flat': '6px 6px 0px 0px rgb(0 0 0 / 0.25)',
      }
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
