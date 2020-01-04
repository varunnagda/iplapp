import Vue from "vue";
import App from "./App.vue";
import jQuery from "jquery";
import "chart.js";
import "hchs-vue-charts";
window.$ = window.jQuery = jQuery;
import "bootstrap";
import "./assets/app.scss";
import "popper.js";
import './registerServiceWorker'
Vue.use(window.VueCharts);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
