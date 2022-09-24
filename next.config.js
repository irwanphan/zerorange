const withPWA = require('next-pwa')({
  dest: 'public'
})
const prod = process.env.NODE_ENV === 'production'
  
module.exports = withPWA({
  // next.js config
  pwa: {
    disable: prod ? false : true,
    dest: 'public'
  },
})