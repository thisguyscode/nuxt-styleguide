const nodeExternals = require('webpack-node-externals')

module.exports = {
  router: {
    base: '/nuxt-styleguide/'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-styleguide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experimental Nuxt starter with css-modules and styleguide' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    '~/plugins/vue-awesome.js'
  ],
  css: [
    '~assets/styles/global.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      /*
      ** Change localIdentName of css-module classes in vue components
      */
      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader')

      /*
      ** Temporary - should be different localIdentName for production as
      ** compared to development (see below)
      */
      vueLoader.options.cssModules = {
        localIdentName: '[name]__[local]__[hash:2]'
      }

      /*
      ** Commented out for debugging convenience
      */
      // if (ctx.dev) {
      //   vueLoader.options.cssModules = {
      //     localIdentName: '[name]__[local]'
      //   }
      // } else {
      //   vueLoader.options.cssModules = {
      //     localIdentName: '[hash:8]'
      //   }
      // }
      if (ctx.isServer) {
        /** Dunno why but this allows vue-awesome icons to be rendered server-side */
        config.externals = [
          nodeExternals({
            whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/, /es6-promise/]
          })
        ]
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
