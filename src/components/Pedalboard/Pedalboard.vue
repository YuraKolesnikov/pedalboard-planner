<template>
  <div class="pedalboard" />
</template>

<script>
export default {

}
</script>

<style lang="scss">
.pedalboard {
  width: 650px;
  height: 450px;
  border: 12.5px solid #ddd;
  border-top-color: #ccc;
  border-bottom-color: #ccc;
  background: #222;

  &.classic_1 {
    width: 550px;
    height: 312.5px;
    background-image: url("../../assets/classic1.png");
  }

  &.classic_3 {
    width: 600px;
    height: 400px;
    background-image: url("../../assets/classic3.png");
  }
}
</style>
