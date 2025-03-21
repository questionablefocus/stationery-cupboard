import tailwindConfig from './tailwind.config.js';

export default {
  plugins: {
    '@tailwindcss/postcss': {
      config: tailwindConfig
    },
    autoprefixer: {},
  },
}
