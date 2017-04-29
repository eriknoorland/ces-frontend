<template>
  <table class="song__list" v-if="songs.length > 0">
    <thead>
      <tr>
        <td>Title</td>
        <td>Artist</td>
        <td>Album</td>
        <td>Time</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <song 
        v-for="(song, index) in songs"
        :key="index"
        :song="song"
        :index="index" />
    </tbody>
  </table>
</template>

<script>
  import Song from './Song'

  export default {
    name: 'playlist',
    computed: {
      songs() {
        return this.$store.state.songs;
      }
    },
    components: {
      Song
    }
  }
</script>

<style>
  .song__list {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    font-size: 11px;
    text-transform: uppercase;
    color: #666;
  }

  tr {
    border-bottom: 1px solid #222;
  }
</style>
