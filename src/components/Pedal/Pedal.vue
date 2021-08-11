<template>
  <div
    ref="pedal"
    class="pedal-wrapper"
    :style="wrapperStyles"
    :class="{[pedal.rotate]: !!pedal.rotate}"
    @click="selectPedal"
    @mousedown="startMoving"
    @mouseup="endMoving">
    <div
      :class="classes"
      :style="{ backgroundImage: 'url(' + require(`@/assets/${pedal.pedal_id}.png`) + ')', ...pedalStyles }"
    />
  </div>
</template>

<script>
import PedalModel from '@/models/PedalModel'
export default {
  props: {
    pedal: {
      type: Object
    }
  },
  data() {
    return {
      canDrag: false,
      shiftX: null,
      shiftY: null,
      left: null,
      top: null
    }
  },
  mounted() {
    this.$refs.pedal.ondragstart = function() {
      return false;
    };
    document.addEventListener('mousemove', this.updateCoords)
  },
  computed: {
    width() {
      return `${this.pedal.width * 25}px`
    },
    height() {
      return `${this.pedal.height * 25}px`
    },
    classes() {
      if (this.rotate) {
        return `pedal ${this.rotate}`
      }
      return 'pedal'
    },
    wrapperStyles() {
      return {
        top: `${this.pedal.top}px`,
        left: `${this.pedal.left}px`,
        zIndex: 1,
      }
    },
    pedalStyles() {
      return {
        width: this.width,
        height: this.height
      }
    },
    getCoords() {
      return {
        top: this.pedal.top + window.pageYOffset,
        left: this.pedal.left + window.pageXOffset
      }
    }
  },
  methods: {
    selectPedal() {},
    startMoving(e) {
      this.canDrag = true
      this.shiftX = e.pageX - this.getCoords.left
      this.shiftY = e.pageY - this.getCoords.top
    },
    endMoving() {
      this.canDrag = false
    },
    updateCoords(e) {
      if (this.canDrag) {
        const top = e.pageY - this.shiftY
        const left = e.pageX - this.shiftX
        this.pedal.setCoords({ top, left })
      }
    }
  }
}
</script>

<style lang="scss">
.pedal-wrapper {
  cursor: pointer;
  position: absolute;
  padding: 10px;
  transform: rotate(0);
  transition: transform 0.25s ease-in-out;

  &.right {
    transform: rotate(90deg);
  }

  &.bottom {
    transform: rotate(180deg);
  }

  &.left {
    transform: rotate(270deg);
  }
}

.pedal {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
</style>
