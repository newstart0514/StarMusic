<template>
  <div>
    <LoginBackground/>
    <LoginBox/>
  </div>
</template>

<script>
import LoginBackground from "@/components/background/loginBackground.vue";
import LoginBox from "@/components/loginBox.vue";

export default {
  name: "Login",
  components: {LoginBox, LoginBackground}
}
</script>

<style scoped>

</style>