<template>
  <div>
    <BoxPlayer/>
    <el-menu
        :default-active="pathToMenuActive"
        class="el-menu-demo"
        mode="horizontal"
        background-color="transparent"
        text-color="#000000"
        active-text-color="#93b5cf"
        @select="menuActive"
        router
    >
      <el-button type="primary" round v-show="!loginStatus" @click="toLogin">登录/注册</el-button>
      <el-avatar :src="avatarImgUrl" v-show="loginStatus"></el-avatar>
      <el-menu-item index="/user" v-show="loginStatus">用户中心</el-menu-item>
      <el-menu-item index="/songPlayer">正在播放</el-menu-item>
<!--      <el-menu-item index="/singer">歌手</el-menu-item>-->
      <el-menu-item index="/ranking">排行榜</el-menu-item>
      <el-menu-item index="/home">首页</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {getToken} from "@/utils/token";
import {getCookie} from "@/utils/cookie";
import {getAvatar} from "@/utils/avatarUrl";
import BoxPlayer from "@/components/player/boxPlayer.vue";

export default {
  name: "Header",
  components: {BoxPlayer},
  data() {
    return {
      loginStatus: false,
      avatarImgUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      activeIndex2: ''
    }
  },
  computed: {
    pathToMenuActive() {
      this.activeIndex2 = this.$route.path
      return this.$route.path
    }
  },
  methods: {
    toLogin() {
      // 跳转到/login
      this.$router.push({path: '/login'})
    },
    isLogin() {
      if(getToken() && getCookie()) {
        this.loginStatus = true
        this.avatarImgUrl = getAvatar()
      }
    },
    menuActive(index,path) {
      this.activeIndex2 = index
    }
  },
  mounted() {
    this.isLogin()
  }
}
</script>

<style scoped>
router-link {
  text-decoration: none;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu--horizontal>.el-menu-item {
  float: right;
  position: relative;
  right: 2vw;
}
.el-avatar--circle {
  float: right;
  position: relative;
  right: 1vw;
  top: 10px;
}
.el-button {
  float: right;
  position: relative;
  /*top: 1.5vh;*/
  top: 10px;
  right: 1vw;
}
</style>