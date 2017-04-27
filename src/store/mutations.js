export default {
  changePlaylist(state, playlist) {
    state.currentPlaylist = playlist;
    state.songs = state.currentPlaylist.songs;

    let songIndex = 0;
    if(state.shuffle) {
      songIndex = Math.floor(Math.random() * state.songs.length);
    }

    state.currentSong = state.songs[songIndex];
  },

  changeSong(state, songIndex) {
    state.currentSong = state.songs[songIndex];
  },

  toggleShuffle(state) {
    state.shuffle = !state.shuffle;
    localStorage.setItem('shuffle', state.shuffle);
  },

  togglePlayPause(state) {
    let exec = state.player.paused ? 'play' : 'pause';

    state.player[exec]();
    state.paused = state.player.paused;
  },

  updateTotalTime(state, duration) {
    state.totalTime = duration;
  },

  updateCurrentTime(state, currentTime) {
    state.currentTime = currentTime;
  },

  volumeStepDown(state) {
    if(state.currentVolume > 0) {
      state.currentVolume = Math.max(0, state.currentVolume - 0.05);
      state.player.volume = state.currentVolume;
      localStorage.setItem('volume', state.currentVolume);
    }
  },

  volumeStepUp(state) {
    if(state.currentVolume < 1) {
      state.currentVolume = Math.min(1, state.currentVolume + 0.05);
      state.player.volume = state.currentVolume;
      localStorage.setItem('volume', state.currentVolume);
    }
  },

  toggleAudio(state) {
    state.muted = !state.muted;
    state.player.muted = state.muted;
  }
}
