<template>
  <div ref='trunk' class="canvas-background"></div>
</template>

<script>
import BIRDS from 'vanta/dist/vanta.trunk.min'
export default {
  name: "RankingListBackground",
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.trunk,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x87fc,
      backgroundColor: 0xe0e0e0,
      spacing: 2.00,
      chaos: 2.00
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style scoped>

</style>