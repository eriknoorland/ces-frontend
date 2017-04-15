<template>
  <div id="app">
    <section class="playlistsContainer">
      <span class="container__title">
        Playlists
      </span>
      <playlists />
    </section>

    <section class="playlistContainer">
      <span v-if="$store.state.songs.length === 0">
        Select a playlist
      </span>
      <playlist v-if="$store.state.songs.length > 0" />
    </section>

    <section class="controlsContainer">
      <current-song />
      <audio id="player" :src="$store.state.currentSong.src"></audio>
      <playlist-controls />
      <audio-controls :volume="$store.state.currentVolume" />
    </section>
  </div>
</template>

<script>
  import Playlists from './components/Playlists'
  import Playlist from './components/Playlist'
  import CurrentSong from './components/CurrentSong'
  import PlaylistControls from './components/PlaylistControls'
  import AudioControls from './components/AudioControls'

  export default {
    name: 'app',
    components: {
      Playlists,
      Playlist,
      CurrentSong,
      PlaylistControls,
      AudioControls
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }

  html, body {
    font-family: sans-serif;
  }

  html, body, .wrapper {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wrapper {
    font-size: 0;
  }
  .playlistsContainer,
  .playlistContainer,
  .controlsContainer {
    box-sizing: border-box;
    padding: 10px;
    font-size: 13px;
  }

  .playlistsContainer {
    display: inline-block;
    width: 20%;
    height: calc(100% - 100px);
    vertical-align: top;
    overflow-y: auto;
    border-right: 1px solid #f2f2f2;
  }

  .playlistContainer {
    display: inline-block;
    width: 80%;
    height: calc(100% - 100px);
    overflow-y: auto;
  }

  .controlsContainer {
    height: 100px;
    display: flex;
    border-top: 1px solid #f2f2f2;
  }

  .container__title {
    font-weight: bold;
  }

  .currentSong {
    flex-basis: 200px;
  }

  .controls {
    flex-basis: 50%;
    text-align: center;
  }

  .volume {
    flex-basis: 25%;
    text-align: center;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    font-size: 20px;
    background: none;
  }

  button.active {
    color: blue;
  }
</style>
