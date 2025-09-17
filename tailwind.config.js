/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      `./app/components/**/*.{vue,js,ts}`,
      `./app/layouts/**/*.vue`,
      `./app/pages/**/*.vue`,
      `./app/content/**/*.md`
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
