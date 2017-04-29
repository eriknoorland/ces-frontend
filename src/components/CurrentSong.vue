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

<style>
  .currentSong {
    box-sizing: border-box;
    padding: 10px;
    line-height: 1.4;
  }

  .currentSong__title {
    margin: 0 0 3px 0;
  }

  .currentSong__artist,
  .currentSong__album {
    font-size: 11px;
    color: #666;
  }
</style>
