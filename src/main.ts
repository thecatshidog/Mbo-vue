import Vue from 'vue';
import App from './app.vue';
import setRem from './utils/rem';

setRem();

new Vue({
  el: '#app',
  components: {
    App,
  },
  render: h => h(App),
});
