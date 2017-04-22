export default {
  changePlaylist(context, playlistIndex) {
    window
      .fetch(context.state.playlists[playlistIndex].src)
      // .fetch('static/data/' + context.state.playlists[playlistIndex].src)
      .then(response => response.json())
      .then(response => {
        context.commit('changePlaylist', response);
      });
  }
}
