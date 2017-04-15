<template>
  <div class="volume">
    <button class="" v-on:click.prevent="volumeStepDown()">
      <i class="fa fa-minus"></i>
    </button>

    <button class="" v-on:click.prevent="toggleMute()">
      <i class="fa fa-volume-up" v-show="$store.state.muted"></i>
      <i class="fa fa-volume-off" v-show="!$store.state.muted"></i>
    </button>

    <button class="" v-on:click.prevent="volumeStepUp()">
      <i class="fa fa-plus"></i>
    </button>

    <progress-bar :progress="$store.state.currentVolume"></progress-bar>
  </div>
</template>

<script>
  import ProgressBar from './ProgressBar'

  export default {
    name: 'audio-controls',
    props: ['volume'],
    methods: {
      volumeStepDown() {
        this.$store.commit('volumeStepDown');
      },

      toggleMute() {
        this.$store.commit('toggleAudio');
      },

      volumeStepUp() {
        this.$store.commit('volumeStepUp');
      }
    },
    components: {
      ProgressBar
    }
  }
</script>
