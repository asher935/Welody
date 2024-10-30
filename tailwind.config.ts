import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',]
    },
    extend: {
      colors: {
        'light': {
          'active': '#1A1A1A',
          'inactive': '#A0A5B0',
          'primary-back': '#FFFFFE',
          'secondary-back': '#F8F5F2',
          'accent-blue': '#519AF8',
          'accent-blue-hover': '#1864ab',
          'accent-red': '#EF4565',
          'accent-text': '#F6F7FA',
          'border': '#FBFCFF',
          'success': '#12b981'
        },
        'dark': {
          'active': '#F2F2F2',
          'inactive': '#CCC5C5',
          'primary-back': '#303030',
          'secondary-back': '#303030',
          'accent-blue': '#519AF8',
          'accent-blue-hover': '#1864ab',
          'accent-red': '#B22748',
          'accent-text': '#F6F7FA',
          'border': '#262626',
          'success': '#12b981'
        },
        'spindle': {
          '50': '#f0f7fe',
          '100': '#deecfb',
          '200': '#c4e1f9',
          '300': '#a7d3f6',
          '400': '#6cb1ee',
          '500': '#4993e8',
          '600': '#3477dc',
          '700': '#2b63ca',
          '800': '#2950a4',
          '900': '#264682',
          '950': '#1c2c4f',
        },
        'mine': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#303030',
        },
        'success': {
          '50': '#f0fdf1',
          '100': '#dcfce1',
          '200': '#bbf7c4',
          '300': '#86ef97',
          '400': '#4ade62',
          '500': '#26d944',
          '600': '#16a32e',
          '700': '#158028',
          '800': '#166524',
          '900': '#145320',
          '950': '#052e0e',
        },
        'error': {
          '50': '#fff1f1',
          '100': '#ffdfdf',
          '200': '#ffc5c6',
          '300': '#ff9d9f',
          '400': '#ff6567',
          '500': '#fe3538',
          '600': '#ee2b2e',
          '700': '#c70e11',
          '800': '#a41012',
          '900': '#881416',
          '950': '#4a0506',
        },
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

    },

  },
  plugins: [],
};
export default config;