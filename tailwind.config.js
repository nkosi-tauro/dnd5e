module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'dnd-descent': "url('../assets/descent.png')",
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  