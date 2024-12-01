import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.css";
import "./main.scss";
import VueFormulate from "@braid/vue-formulate";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'
var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;
Vue.use(VueFormulate);
Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
