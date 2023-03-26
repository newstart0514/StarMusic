<template>
  <div>
    <Header/>
    <img src="../assets/logo.png">
    <HomeBackgroundVideo/>
    <Search/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import HomeBackgroundVideo from "@/components/background/homeBackground.vue";
import Search from "@/components/search.vue";

export default {
  name: "Home",
  components: {Search, HomeBackgroundVideo, Header}
}
</script>

<style scoped>
img {
  position: relative;
  top: 10vh;
  left: 40%;
  width: 20%;
  height: 20%;
}
</style>