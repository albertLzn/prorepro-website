import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: "#EDBBD0",
                secondary: "#3f51b5"
            },
      

        },
    },
}
export default new Vuetify(opts)