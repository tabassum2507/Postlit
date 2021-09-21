module.exports = {
    purge: ['./src/**/*.js', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {}
     },
     variants: {
      extend: {
        animation: ['motion-safe'],
      }
     },
     plugins: []
   }