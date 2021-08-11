<template>
  <div>
    <v-sidebar @addPedal="addPedal" />
    <div class="canvas">
      <v-pedal 
        v-for="pedal in setup" 
        :pedal="pedal" 
        :key="`pedal_key_${pedal.id}`" 
        @selectPedal="selectPedal"
      />
    </div>
    <!-- <div class="pedals">
      
    </div>
    <PedalBoard /> -->
    <v-modal
      v-if="selectedPedal && !!selectedPedal.pedal_id"
      :title="selectedPedal && selectedPedal.title"
      :id="selectedPedal && selectedPedal.id"
      @rotate="rotate"
      @delete="removePedal"
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
  computed: {
    ...mapState(['pedals', 'setup']),
  },
  methods: {
    ...mapMutations(['addPedalToSetup', 'removePedalFromSetup']),
    addPedal(pedal) {
      const payload = new PedalModel(pedal)
      this.addPedalToSetup(payload)
    },
    selectPedal(pedal) {
      this.selectedPedal = pedal
    },
    rotate(id) {
      const pedal = this.setup.find(pedal => pedal.id === id)
      pedal.rotate()
    },
    removePedal(id) {
      this.removePedalFromSetup(id)
      this.selectedPedal = null
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

.pedals {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: gray;
}
</style>
