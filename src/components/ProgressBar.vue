<template>
  <div class="progress">
    <div class="progress__bar" :style="styleObject"></div>
  </div>
</template>

<script>
  export default {
    name: 'progress-bar',
    props: ['progress'],
    computed: {
      styleObject() {
        return {
          width: (this.progress * 100) + '%'
        }
      }
    }
  }
</script>

<style>
  .progress {
    width: 100%;
    height: 4px;
    background: #111;
  }

  .progress__bar {
    width: 0;
    height: 100%;
    background: #999;
  }
</style>
