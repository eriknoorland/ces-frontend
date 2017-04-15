export default {
  changePlaylist(context, playlistIndex) {
    window
      .fetch('static/data/' + context.state.playlists[playlistIndex].src)
      .then(response => response.json())
      .then(response => {
        context.commit('changePlaylist', response);
      });
  }
}
