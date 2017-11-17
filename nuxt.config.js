module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter-styleguide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Opinionated Nuxt starter with styleguide' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: [],
    extend (config, ctx) {
      /*
      ** Change localIdentName of css-module classes in vue components
      */
      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader')
      if (ctx.dev) {
        vueLoader.options.cssModules = {localIdentName: '[name]-[local]-[hash:3]'}
      } else {
        vueLoader.options.cssModules = {localIdentName: '[hash:7]'}
      }
      /*
      ** Run ESLint on save
      */
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
