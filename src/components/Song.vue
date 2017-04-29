<template>
  <tr class="song" :class="{active}" v-on:click.prevent="onClick(index)">
    <td class="song__title">
      {{song.name}}
    </td>
    <td class="song__artist">
      {{song.artist}}
    </td>
    <td class="song__album">
      {{song.album}}
    </td>
    <td class="song__time">
      {{time}}
    </td>
    <td>
      <i class="fa fa-volume-up"></i>
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'song',
    props: ['song', 'index'],
    computed: {
      time() {
        let totalSeconds = this.song.total_time / 1000;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        return `${minutes}:${seconds}`
      },
      active() {
        return this.$store.state.currentSong.id === this.song.id && !this.$store.state.paused;
      }
    },
    methods: {
      onClick: function(index) {
        this.$store.commit('changeSong', index);

        if(!this.$store.state.paused) {
          this.$store.commit('togglePlayPause');
        }
      }
    }
  }
</script>

<style>
  .song__list td {
    padding: 10px;
  }

  .song .fa {
    visibility: hidden;
  }

  .song.active {
    color: #2f8;;
  }

  .song.active .fa {
    visibility: visible;
  }
</style>
