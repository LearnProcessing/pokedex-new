module.exports = {
  purge: [
    './src/components/HorizontalDetail.js',
    './src/components/VerticalDetail.js',
    './src/components/Navbar.js',
    './src/components/PokemonCatch.js',
    './src/components/PokemonCard.js',
    './src/pages/MyPokemonList.js',
    './src/pages/PokemonList.js',
    './src/pages/PokemonDetail.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'press-start' : ['"Press Start 2P"', 'cursive'],
    },
    extend: {
      spacing: {
        '102': '30rem',
        '108': '34rem',
        '114': '38rem',
        '120': '42rem'
      },
      maxWidth:{
        '8xl': '88rem',
        '9xl': '96rem'
      }
    }
  },
  variants: {
    extend: {
      height: ['group-hover']
    },
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [],
}
