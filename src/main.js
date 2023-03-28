import Vue from 'vue';
import App from './App.vue';

import { message } from './utils';
import {sms, day} from './constants';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(message);
// alert(sms, day);
