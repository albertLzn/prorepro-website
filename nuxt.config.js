export default {
  head: {
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
  name: 'prorepro',
  title: 'Photocopie reprographie imprimerie paris voltaire',
  templateTitle: '%name% - %title%',
  description: '128 Boulevard Voltaire, 75011',
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