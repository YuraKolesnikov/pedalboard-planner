<template>
  <div>
    <v-sidebar @addPedal="addPedal" />
    <div class="canvas" @click.self="unSelect">
      <v-pedal
        v-for="pedal in setup"
        :pedal="pedal"
        :key="`pedal_key_${pedal.id}`"
        @selectPedal="selectPedal"
        :pedal-selected="selectedPedal && selectedPedal.pedal_id === pedal.pedal_id"
      />
    </div>
    <v-modal
      :visible="selectedPedal && !!selectedPedal.pedal_id"
      :title="selectedPedal && selectedPedal.title"
      :id="selectedPedal && selectedPedal.id"
      @rotate="rotate"
      @delete="removePedal"
      @front="moveFront"
      @back="moveBack"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VSidebar from '@/components/Sidebar/Sidebar'
import VModal from '@/components/Modal/Modal'
import VPedal from '@/components/Pedal/Pedal'
import VPedalBoard from '@/components/Pedalboard/Pedalboard'

import PedalModel from '@/models/PedalModel'
export default {
  components: {
    VSidebar,
    VModal,
    VPedal,
    VPedalBoard
  },
  data() {
    return {
      selectedPedal: null
    }
  },
  created() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  computed: {
    ...mapState(['pedals', 'setup']),
  },
  methods: {
    ...mapMutations(['addPedalToSetup', 'removePedalFromSetup']),
    addPedal(pedal) {
      const payload = new PedalModel(pedal)
      this.addPedalToSetup(payload)
    },
    unSelect() {
      this.selectPedal(null)
    },
    selectPedal(pedal) {
      this.selectedPedal = pedal
    },
    rotate(id) {
      const pedal = this.setup.find(pedal => pedal.id === id)
      pedal.rotate()
    },
    moveFront() {
      this.selectedPedal.front()
    },
    moveBack() {
      this.selectedPedal.back()
    },
    removePedal() {
      this.removePedalFromSetup(this.selectedPedal.id)
      this.selectedPedal = null
    },
    handleKeyDown(e) {
      const allowedKeys = ['r', '[', ']', 'd']
      if (allowedKeys.includes(e.key) && this.selectedPedal !== null) {
        switch (e.key) {
          case 'r':
            this.rotate()
            break
          case '[':
            this.moveBack()
            break
          case ']':
            this.moveFront()
            break
          case 'd':
            this.removePedal()
            break
          default:
            console.log('YEET')
        }
      }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.canvas {
  position: relative;
  background-color: #2e3337;
  background-size: 25px;
  background-image: url('./assets/background.svg');
  width: calc(100% - 290px);
  transform: translateX(290px);
  height: 100vh;
}
</style>
