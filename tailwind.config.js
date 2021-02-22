module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'dnd-descent': "url('../assets/descent.png')",
          'dnd-dragon': "url('../assets/dragon.png')",
          'dnd-beholder': "url('../assets/beholder.png')",
          'dnd-mindflayer': "url('../assets/mindflayer.png')",
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  