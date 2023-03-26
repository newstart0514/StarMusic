<template>
  <div>
    <Header/>
    <UserBackground/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import UserBackground from "@/components/userBackground.vue";

export default {
  name: "user",
  components: {UserBackground, Header}
}
</script>

<style scoped>

</style>