module.exports = {
  content: ['public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1C1C5D',
        'texto': '#1C1C5D',
        'terciary' : '#C6DCE1',
        'cuarto': '#F2EEFE',
        'sexto': '#68B0C4'
      }),
      textColor: {
        'primary': '#1C1C5D',
        'secondary': '#1C1C5D',
        'terciary' : '#61AEC9',
        'cuarto': '#F2EEFE',
        'quinto' : '#C6DCE1',
      },
      fontFamily: {
        Montserrat:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
