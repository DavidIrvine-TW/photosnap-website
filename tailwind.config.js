/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : 'hsl(0, 0%, 0%)',
        'overlay': 'hsla(0, 0%, 0%, 0.5)',
        'white' : 'hsl(0, 0%, 100%)',
        'gray' : 'hsl(0, 0%, 87%)',
        'gradient1' : 'hsl(28, 100%, 79%)',
        'gradient2' : 'hsl(329, 36%, 59%)',
        'gradient3' : 'hsl(229, 100%, 67%)'
      },
      screens : {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
      fontFamily : {
        dm : ['DM Sans', 'sans-serif'],
      },
      fontSize : {

        'body': ['0.9375rem', {
          lineHeight: '1.5625rem',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'h1': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '4.17px',
          fontWeight: '700',
        }],
        'h2': ['1.5rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'h3': ['1.125rem', {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
          fontWeight: '700',
        }],
        'h4': ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '2px',
          fontWeight: '700',
        }],
        'h1-mb': ['2rem', {
          lineHeight: '2.5rem',
          letterSpacing: '3.333px',
          fontWeight: '500',
        }],
      },
      fontWeight : {
        reg : '400',
        bold : '700'
      }

    },
  },
  plugins: [],
}



