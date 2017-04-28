<template>
  <ul class="playlists">
    <li class="playlist" v-for="(playlist, index) in playlists">
      <a href="#" class="playlist__link" v-on:click.prevent="onPlaylistClick(index)">
        {{playlist.name}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'playlists',
    computed: {
      playlists() {
        return this.$store.state.playlists;
      }
    },
    methods: {
      onPlaylistClick: function(index) {
        this.$store.dispatch('changePlaylist', index);
      }
    },
    mounted() {
      window
        .fetch(process.env.API_URL + '/playlists/')
        .then(response => response.json())
        .then(response => {
          this.$store.state.playlists = response;
        });
    }
  }
</script>

<style>
  .playlists {
    margin: 0;
    padding: 0;
  }
</style>
