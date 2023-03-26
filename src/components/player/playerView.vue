<template>
  <div class="example-container">
    <Player/>
    <SongRecommendation/>
  </div>
</template>

<script>
// 引入播放器页面自定义样式
import '@/assets/css/player.css'
// 引入组件
import Player from "@/components/player/Player.vue";
import SongRecommendation from "@/components/player/songRecommendation.vue";

export default {
  name: "playerView",
  components: {SongRecommendation, Player}
}
</script>

<style scoped>

</style>