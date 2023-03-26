<template>
  <div>
    <Header/>
    <PlayerView/>
    <PlayerPageBackground/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PlayerView from "@/components/player/playerView.vue";
import PlayerPageBackground from "@/components/background/playerPageBackground.vue";

export default {
  name: "songSheet",
  components: {PlayerPageBackground, PlayerView, Header}
}
</script>

<style scoped>

</style>