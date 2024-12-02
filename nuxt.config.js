export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'author', name: 'author', content: 'Prorepro' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Prorepro' },
      { property: 'og:image', content: 'URL-de-votre-image' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
      }
    ]
  },
  build: {
    publicPath: 'https://prorepro.fr'
  },
  modules: [
    'nuxt-seo',
    'vue-scrollto/nuxt'
  ],
  seo: {
    // Module options
    baseUrl: 'http://www.prorepro.fr/',
    name: 'Prorepro',
    title: 'Photocopie reprographie imprimerie paris voltaire',
    templateTitle: '%name% - %title%',
    description: '128 Boulevard Voltaire, 75011 Paris',
    language: 'French'
    //...
  },
  vuetify: {
    treeShake: true
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
}