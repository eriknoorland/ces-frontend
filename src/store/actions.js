export default {
  changePlaylist(context, playlistIndex) {
    window
      .fetch(process.env.API_URL + '/playlists/' + context.state.playlists[playlistIndex].id)
      .then(response => response.json())
      .then(response => {
        context.commit('changePlaylist', response);
      });
  }
}
