module.exports = {
  router: {
    base: '/nuxt-styleguide/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-styleguide',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Opinionated Nuxt starter with styleguide' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/styles/global.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      //
      //
      /** Run .scss files through sass-vars-loader before anything else */
      // const scssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.scss$/')
      // scssLoader.use.splice(5, 0, sassVarsLoader)

      // /** Remove default image rule */
      // const imageRule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
      // config.module.rules.splice(config.module.rules.indexOf(imageRule), 1)

      // /** Push new image rule */
      // config.module.rules.push({
      //   test: /\.(png|jpe?g|gif|tiff|webp|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 1000,
      //         name: 'img/[name].[hash:4].[ext]'
      //       }
      //     }
      //   ]
      // })
      //
      //
      /*
      ** Change localIdentName of css-module classes in vue components
      */
      const vueLoader = config.module.rules.find(({loader}) => loader === 'vue-loader')
      vueLoader.options.cssModules = {
        modules: true,
        importLoaders: 1
      }
      if (ctx.dev) {
        vueLoader.options.cssModules = {
          localIdentName: '[name]-[local]-[hash:3]'
        }
      } else {
        vueLoader.options.cssModules = {
          localIdentName: '[hash:7]'
        }
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
