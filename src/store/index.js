import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: null,
    playlists: [],
    songs: [],
    currentPlaylist: {},
    currentSong: {},
    progress: 0.25,
    paused: true,
    muted: false,
    currentVolume: Number(localStorage.getItem('volume')) || 0.7,
    shuffle: localStorage.getItem('shuffle') === 'true',
    repeat: false
  },
  getters,
  mutations,
  actions
});
