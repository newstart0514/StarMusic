<template>
  <div ref="rings" class="canvas-background"></div>
</template>

<script>
import BIRDS from 'vanta/dist/vanta.rings.min'
export default {
  name: "songSheetBackground",
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.rings,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x404055,
      color: 0xfff0
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