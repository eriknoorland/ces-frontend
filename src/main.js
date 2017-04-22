  // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App class="wrapper" v-cloak/>',
  components: { App },
  mounted() {
    this.$store.state.player = document.getElementById('player');
    this.$store.state.player.volume = this.$store.state.currentVolume;

    window
      .fetch('/playlists')
      .then(response => response.json())
      .then(response => {
        this.$store.state.playlists = response;
      });
  }
})
