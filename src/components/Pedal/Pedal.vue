<template>
  <div>
    <div class="pedal" :style="{ backgroundImage: 'url(' + require(`@/assets/${pedal.id}.png`) + ')', ...styles }" />
  </div>
</template>

<script>
export default {
  props: {
    pedal: {
      type: Object
    }
  },
  computed: {
    width() {
      return `${this.pedal.width * 25}px`
    },
    height() {
      return `${this.pedal.height * 25}px`
    },
    styles() {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style lang="scss">
.pedal {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
</style>
