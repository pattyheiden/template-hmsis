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
      }
    },
  },
  plugins: [],
}
export default config
