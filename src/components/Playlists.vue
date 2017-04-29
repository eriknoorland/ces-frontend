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
    margin: 0 10px;
    padding: 0;
    list-style-type: none;
  }

  .playlist {
    color: #999;
  }

  .playlist__link {
    display: block;
    padding: 5px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-decoration: none;
  }
</style>
