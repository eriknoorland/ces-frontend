export default {
  totalTime(state) {
    let totalSeconds = state.totalTime;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let secondsPrefix = seconds < 10 ? '0' : '';

    return `${minutes}:${secondsPrefix}${seconds}`;
  },

  currentTime(state) {
    let totalSeconds = state.currentTime;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let secondsPrefix = seconds < 10 ? '0' : '';

    return `${minutes}:${secondsPrefix}${seconds}`;
  },

  progress(state) {
    return state.currentTime / state.totalTime;
  }
}
