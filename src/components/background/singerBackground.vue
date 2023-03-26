<template>
  <!--<div ref="net" class="canvas-background"></div>-->
  <div class="canvas-background"/>
</template>

<script>
// import BIRDS from 'vanta/dist/vanta.net.min'
export default {
  name: "singerBackground",
  // mounted() {
  //   this.vantaEffect = BIRDS({
  //     el: this.$refs.net,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     color: 0xe1f0,
  //     backgroundColor: 0x404055,
  //     points: 10.00,
  //     maxDistance: 25.00
  //   })
  // },
  // beforeDestroy() {
  //   if(this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // }
}
</script>

<style scoped>
.canvas-background {
  background-image: linear-gradient(25deg, #8cda4f, #9dd68b, #a7d2c1, #a9cdf6)
}
</style>