import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'

import './styles/quasar.styl'
import iconSet from 'quasar-framework/icons/fontawesome'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}, iconSet: iconSet
 })

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
