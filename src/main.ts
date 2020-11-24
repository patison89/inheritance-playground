import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDna } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import EventBus from 'vue-bus-ts';


Vue.use(BootstrapVue);
library.add(faDna);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(EventBus);
const bus = new EventBus.Bus();
Vue.config.productionTip = false;

new Vue({
  bus,
  render: h => h(App)
}).$mount("#app");
