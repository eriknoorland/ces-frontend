<template>
  <div class="controls">
    <button v-on:click="toggleShuffle()" :class="{active: $store.state.shuffle}">
      <i class="fa fa-random"></i>
    </button>

    <button class="" :disabled="$store.state.songs.length === 0">
      <i class="fa fa-step-backward"></i>
    </button>

    <button class="" v-on:click.prevent="togglePlayPause()" :disabled="$store.state.songs.length === 0">
      <i class="fa fa-play" v-show="$store.state.paused"></i>
      <i class="fa fa-pause" v-show="!$store.state.paused"></i>
    </button>

    <button class="" :disabled="$store.state.songs.length === 0">
      <i class="fa fa-step-forward"></i>
    </button>

    <button :class="{active: $store.state.repeat}">
      <i class="fa fa-repeat"></i>
    </button>

    <progress-bar :progress="$store.state.progress"></progress-bar>
  </div>
</template>

<script>
  import ProgressBar from './ProgressBar'
  
  export default {
    template: 'playlist-controls',
    computed: {
      shuffleEnabled() {
        return this.$store.state.shuffle;
      }
    },
    methods: {
      toggleShuffle() {
        this.$store.commit('toggleShuffle');
      },

      togglePlayPause: function() {
        this.$store.commit('togglePlayPause');
      }
    },
    components: {
      ProgressBar
    }
  }
</script>
