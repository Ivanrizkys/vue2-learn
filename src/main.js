import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // data: {test: "test dulu gan"},
  render: h => h(App),
}).$mount('#app')
