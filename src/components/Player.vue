<template>
  <audio :src="this.$store.state.currentSong.link"></audio>
</template>

<script>
  export default {
    name: 'player',
    mounted() {
      this.$store.state.player = this.$el;
      this.$store.state.player.volume = this.$store.state.currentVolume;

      this.$el.addEventListener('canplay', event => {
        this.$store.commit('updateTotalTime', event.target.duration);
      });

      this.$el.addEventListener('timeupdate', event => {
        this.$store.commit('updateCurrentTime', event.target.currentTime);
      });

      this.$el.addEventListener('ended', event => {
        console.log('ended', event);
      });
    }
  }
</script>
