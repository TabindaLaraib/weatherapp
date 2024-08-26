/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',           // Include HTML files in the root directory
    './js/**/*.js',        // Include all JS files in the 'js' directory and its subdirectories
    './components/**/*.js' 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

