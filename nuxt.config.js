const getPaths = require('./utils/getPaths.js')
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
  generate: {
    /*
    ** Generate routes from 'linkTo' in project data file
    */
    routes: function () {
      const fs = require('./data/filesystem/main.json')
      var routesArray = getPaths(fs)
      return routesArray
    }
  },
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

      if (ctx.dev) {
        vueLoader.options.cssModules = {
          localIdentName: '[name]__[local]__[hash:3]'
        }
      } else {
        vueLoader.options.cssModules = {
          localIdentName: '[hash:8]'
        }
      }

      if (ctx.isServer) {
        /** Dunno why but this allows vue-awesome icons to be rendered server-side */
        config.externals = [
          nodeExternals({
            whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/, /es6-promise/]
          })
        ]
      }
      if (ctx.dev && ctx.isClient) {
        /*
        ** Run ESLint on save
        */
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isClient) {
        /** Remove sourcemap from es6-promise on client */
        config.module.rules.push({
          test: /\.js$/,
          include: /node_modules\/es6-promise/,
          loader: 'strip-sourcemap-loader'
        })
      }
    }
  }
}
