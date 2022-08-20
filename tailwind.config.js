/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
        backgroundImage: theme => ({
         'calendar_blur': "url('../img/GCalendar_Blur.png')",
      })
    },
  },
  plugins: [],
}
