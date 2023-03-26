<template>
  <div ref="clouds" class="canvas-background"></div>
</template>

<script>
import BIRDS from 'vanta/dist/vanta.clouds.min'
export default {
  name: "homeBackgroundVideo",
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.clouds,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
    })
  },
  beforeDestroy() {
    if(this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style scoped>

</style>