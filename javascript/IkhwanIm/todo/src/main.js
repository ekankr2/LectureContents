import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import cookies from "vue-cookies";

Vue.config.productionTip = false

Vue.use(cookies)

window.Kakao.init("c7fed513dbc0ff5f30f1e752cb5a2cee")
alert('Kakao 초기화 여부 : ' + window.Kakao.isInitialized())

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
