<template>
  <table class="song__list" v-if="items.length > 0">
    <thead>
      <tr>
        <td>Title</td>
        <td>Artist</td>
        <td>Album</td>
        <td>Time</td>
      </tr>
    </thead>
    <tbody>
      <tr class="song" v-for="(song, index) in items" :key="index" :song="song" v-on:click.prevent="onSongClick(index)">
        <td class="song__title">{{song.title}}</td>
        <td class="song__artist">{{song.artist}}</td>
        <td class="song__album">{{song.album}}</td>
        <td class="song__time">{{song.time}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'playlist',
    computed: {
      items() {
        return this.$store.state.songs;
      }
    },
    methods: {
      onSongClick: function(index) {
        this.$store.commit('changeSong', index);

        if(!this.$store.state.paused) {
          this.$store.commit('togglePlayPause');
        }
      }
    }
  }
</script>

<style>
  .song__list {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    font-weight: bold;
  }

  thead tr {
    border-bottom: 1px solid #f2f2f2;
  }

  .song:nth-child(odd) {
    background-color: #f2f2f2;
  }
</style>
