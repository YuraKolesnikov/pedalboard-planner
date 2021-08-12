<template>
  <div
    ref="pedal"
    class="pedal-wrapper"
    :style="wrapperStyles"
    :class="{[pedal.rotation]: !!pedal.rotation, 'selected': !!pedalSelected}"
    @click="selectPedal"
    @mousedown="startMoving"
    @mouseup="endMoving">
    <div
      class="pedal"
      :style="{ backgroundImage: 'url(' + require(`@/assets/${pedal.pedal_id}.png`) + ')', ...pedalStyles }"
    />
  </div>
</template>

<script>
import PedalModel from '@/models/PedalModel'
export default {
  props: {
    pedal: Object,
    pedalSelected: Boolean
  },
  data() {
    return {
      canDrag: false,
      shiftX: null,
      shiftY: null,
      left: null,
      top: null,
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
    wrapperStyles() {
      return {
        top: `${this.pedal.top}px`,
        left: `${this.pedal.left}px`,
        zIndex: this.pedal.z,
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
    selectPedal() {
      this.$emit('selectPedal', this.pedal)
    },
    unSelect() {
      this.$emit('selectPedal', null)
    },
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
        this.pedal.top = top
        this.pedal.left = left
      }
    }
  },
  beforeMount() {
    document.removeEventListener('mousemove', this.updateCoords)
  }
}
</script>

<style lang="scss">
.pedal-wrapper {
  cursor: pointer;
  position: absolute;
  padding: 10px;
  transform: rotate(0);
  border: 1px solid transparent;
  transition: transform 0.25s ease-in-out, border-color 0.25s ease-in-out;

  &.right {
    transform: rotate(90deg);
  }

  &.bottom {
    transform: rotate(180deg);
  }

  &.left {
    transform: rotate(270deg);
  }

  &.selected {
    border-color: #8582ff;
  }
}

.pedal {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
</style>
