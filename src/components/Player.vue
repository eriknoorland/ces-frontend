<template>
  <audio :src="this.$store.state.currentSong.link"></audio>
</template>

<script>
  export default {
    name: 'player',
    mounted() {
      this.$store.state.player = this.$el;
      this.$store.state.player.volume = this.$store.state.currentVolume;
    }
  }
</script>
