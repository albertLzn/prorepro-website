import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi'  // Ajouter cette configuration
    },
    theme: {
        themes: {
            light: {
                primary: "#EDBBD0",
                secondary: "#3f51b5"
            }
        }
    }
}

export default new Vuetify(opts)