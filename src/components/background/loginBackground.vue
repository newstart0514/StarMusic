<template>
  <div ref="globe" class="canvas-background"></div>
</template>

<script>
import BIDRS from 'vanta/dist/vanta.globe.min'
export default {
  name: "loginBackground",
  mounted() {
    this.vantaEffect = BIDRS({
      el: this.$refs.globe,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fddff,
      color2: 0xd9f21d,
      backgroundColor: 0x0
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