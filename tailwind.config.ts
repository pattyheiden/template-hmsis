import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue':'#5CB6E5',
      },
      transitionDuration: {
        '3s': '3s'
      },
      backgroundImage: {
        'image': "url('/assets/bg.png')",        
      },
      height: {
        '75': '4.688rem',
      },
      spacing: {
        "30": "1.875rem",
        "155":"9.625rem",
      },
      rotate: {
        '38': '35deg',
      },
      translate: {
        '18': '1.125rem',
      },
    },
  },
  plugins: [],
}
export default config
