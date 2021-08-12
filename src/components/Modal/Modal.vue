<template>
  <div class="modal" :class="{'visible': visible}">
    <div class="name">
      {{ title }}
    </div>
    <button class="action" @click="$emit('rotate')">
      <span>Rotate</span>
      <i>R</i>
    </button>
    <button class="action" @click="$emit('front')">
      <span>Move Front</span>
      <i>]</i>
    </button>
    <button class="action" @click="$emit('back')">
      <span>Move Back</span>
      <i>[</i>
    </button>
    <button class="action" @click="$emit('delete')">
      <span>Delete</span>
      <i>D</i>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    visible: Boolean
  }
}
</script>
<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 10px;
  width: 200px;
  background-color: #282d30;
  border: 0;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.35s ease-in-out;

  &.visible {
    opacity: 1;
    z-index: 100;
  }
}

.name {
  color: #999;
  font-weight: 600;
  padding: 10px;
}

.action {
  user-select: none;
  border: 0;
  background-color: transparent;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, .2);
  padding: 10px;
  color: #8582ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  & i {
    font-style: normal;
    float: right;
    border-radius: 3px;
    padding: 1px 6px;
    position: relative;
    top: -2px;
    color: #ccc;
    font-weight: 700;
  }
}
</style>
