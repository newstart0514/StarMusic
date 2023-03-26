<template>
  <div>
    <Header/>
    <SingerBackground/>
    <SingerCardList/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SingerBackground from "@/components/background/singerBackground.vue";
import SingerCardList from "@/components/singerCardList.vue";

export default {
  name: "singerList",
  components: {SingerBackground, Header, SingerCardList}
}
</script>

<style scoped>

</style>