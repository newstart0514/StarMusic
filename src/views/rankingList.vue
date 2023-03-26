<template>
  <div>
    <Header/>
    <CardList/>
    <RankingListBackground/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import RankingListBackground from "@/components/background/RankingBackground.vue";
import CardList from "@/components/cardList.vue";

export default {
  name: "rankingList",
  components: {CardList, RankingListBackground, Header}
}
</script>

<style scoped>

</style>