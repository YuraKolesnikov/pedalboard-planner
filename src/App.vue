<template>
  <div>
    <v-sidebar @addPedal="addPedal" />
    <div class="canvas">
      <v-pedal v-for="pedal in setup" :pedal="pedal" :key="`pedal_key_${pedal.id}`" />
    </div>
    <!-- <div class="pedals">
      
    </div>
    <PedalBoard /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VSidebar from '@/components/Sidebar/Sidebar'
import VPedal from '@/components/Pedal/Pedal'
import VPedalBoard from '@/components/Pedalboard/Pedalboard'

import PedalModel from '@/models/PedalModel'
export default {
  components: {
    VSidebar,
    VPedal,
    VPedalBoard
  },
  computed: {
    ...mapState(['pedals', 'setup'])
  },
  methods: {
    ...mapMutations(['addPedalToSetup']),
    addPedal(pedal) {
      const payload = new PedalModel(pedal)
      this.addPedalToSetup(payload)
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
