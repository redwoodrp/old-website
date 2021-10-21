import Vue from 'vue';
import smoothscroll from 'smoothscroll-polyfill';
import App from './App.vue';
import './index.css';

smoothscroll.polyfill();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
