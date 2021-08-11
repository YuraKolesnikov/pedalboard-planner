<template>
  <aside class="sidebar">
    <section class="section">
      <h4 for="pedal" class="label">
        Add a Pedalboard
      </h4>
      <select name="pedal" id="pedal" class="select">
        <option value="" selected disabled>Select a pedalboard</option>
      </select>
      <button class="button">
        Add Pedalboard
      </button>
    </section>
    <section class="section">
      <h4 for="pedal" class="label">
        Add a Pedal
      </h4>
      <select name="pedal" id="pedal" class="select" v-model="pedal">
        <option value="" selected disabled>Select a pedal</option>
        <option 
          v-for="pedal in pedals" 
          :key="`add_pedal_dropdown_item_${pedal.pedal_id}`" 
          :value="pedal.pedal_id"
          :disabled="!!pedal.separator">
          {{ pedal.title }}
        </option>
      </select>
      <button class="button" @click="addPedal">
        Add Pedal
      </button>
    </section>
  </aside>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      pedal: ''
    }
  },
  computed: {
    ...mapState(['pedals']),
    selectedPedal() {
      if (!!this.pedals && Array.isArray(this.pedals) && !!this.pedal) {
        return this.pedals.find(p => p.pedal_id === this.pedal)
      }
    }
  },
  methods: {
    addPedal() {
      this.$emit('addPedal', this.selectedPedal)
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  background-color: #282d30;
  max-width: 290px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .16);
  display: flex;
  flex-flow: column;
  position: fixed;
  z-index: 1000;
  height: 100vh;
}

.section {
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, .2);

  &:first-child {
    border-top: 0;
  }
}

.label {
  margin: 0 0 14px;
  color: rgb(178, 172, 191);
}

.select {
  width: 100%;
  border-radius: 4px;
  color: #b2acbf;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #2e3337;
  border: 1px solid rgba(255, 255, 255, .1);
}

.button {
  cursor: pointer;
  margin-top: 10px;
  background-color: #8582ff;
  display: block;
  width: 100%;
  border: 0;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #534fff;
  }
}
</style>