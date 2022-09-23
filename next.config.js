const withPWA = require('next-pwa')({
  dest: 'public'
})
  
module.exports = withPWA({
  // next.js config
  pwa: {
    disable: prod ? false : true,
    dest: 'public'
  }
})