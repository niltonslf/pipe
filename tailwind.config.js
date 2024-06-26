import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-out-sidebar': 'cubic-bezier(.6,.32,.21,.99)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(800%)',
            opacity: '0',
          },
          '100%': {transform: 'translateY(0%)', opacity: '1'},
        },
        fadeDown: {
          '0%': {transform: 'translateY(-100%)', opacity: '0'},
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        fadeDown: 'fadeDown 0.6s ease-in-out forwards',
      },
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        pipe: {
          'primary': '#00ff8c',

          'secondary': '#04a6df',

          'accent': '#38bdf8',

          'neutral': '#f4f5f9',

          'base-100': '#0c111c',
          'base-200': '#1c2842',
          'base-300': '#25365d',

          'info': '#67e8f9',

          'success': '#0cff96',

          'warning': '#ffc900',

          'error': '#ff3e6b',
        },
      },
    ],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
}
