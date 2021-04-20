module.exports = {
  purge: [
    './src/components/InfoCard.js',
    './src/components/Navbar.js',
    './src/components/PokemonCatch.js',
    './src/components/PokemonTable.js',
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
