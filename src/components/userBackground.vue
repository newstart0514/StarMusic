<template>
  <!--<div ref="birds" class="canvas-background"></div>-->
  <div class="canvas-background"></div>
</template>

<script>
// import BIRDS from 'vanta/dist/vanta.birds.min'
export default {
  name: "userBackground",
  // mounted() {
  //   this.vantaEffect = BIRDS({
  //     el: this.$refs.birds,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     backgroundColor: 0xe0e0e0,
  //     birdSize: 1.50,
  //     separation: 50.00,
  //     alignment: 50.00,
  //     cohesion: 50.00
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
  background-image: linear-gradient(25deg, #1b3fcf, #4669d9, #5c94e2, #69bfea)
}
</style>