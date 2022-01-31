import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 2000,
});



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
