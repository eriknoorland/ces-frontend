<template>
  <div class="currentSong">
    <div class="currentSong__title">{{song.name}}</div>
    <div class="currentSong__artist">{{song.artist}}</div>
    <div class="currentSong__album">{{song.album}}</div>
  </div>
</template>

<script>
  export default {
    name: 'current-song',
    computed: {
      song() {
        return this.$store.state.currentSong;
      }
    }
  }
</script>
