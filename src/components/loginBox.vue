<template>
  <div class="loginBox">
    <img class="logo" src="@/assets/logo.png"/>
    <div class="loginBoxFrom">
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="注册" name="register">
          <div class="fromInput">
            <el-form :label-position="labelPosition" :model="boxForm" label-width="auto">
              <div class="inputGroup" style="padding-bottom: 5vh">
                <el-form-item label="昵称">
                  <el-input v-model="boxForm.userName" placeholder="请输入昵称"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="boxForm.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                  <el-input v-model="boxForm.captcha" placeholder="请输入验证码"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="boxForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <input type="checkbox" :checked="ischecked"/>我同意
                <a href="https://st.music.163.com/official-terms/service">《服务条款》</a>和
                <a href="https://st.music.163.com/official-terms/privacy">《隐私政策》</a>
                <el-button type="primary" round style="width: 100%;margin-top: 1.5vh">注册</el-button>
              </div>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="登录" name="login">
          <div class="fromInput">
            <el-form label-position="top" :model="boxForm" label-width="auto">
              <div class="inputGroup">
                <el-form-item label="手机号">
                  <el-input v-model="boxForm.phone" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model="boxForm.password" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-link icon="el-icon-message" :underline="false" style="float: left">短信验证码登录</el-link>
                <el-link icon="el-icon-question" :underline="false" style="float: right">忘记密码</el-link>
                <el-button type="primary" round style="width: 100%;margin-top: 3vh" @click.prevent="login">登录</el-button>
                <el-popover placement="top" width="10vh" trigger="click">
                  <img class="QRcode" src="@/assets/logo.png" style="object-fit: fill;width: 10vw;height: 20vh"/>
                  <el-button slot="reference" round style="width: 100%;margin-top: 1.5vh;margin-bottom: 0.4vh">二维码扫描登录</el-button>
                </el-popover>
              </div>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-link
        icon="el-icon-back"
        :underline="false"
        style="position: absolute;bottom: 3vh;left: 2vw"
        @click="toBack"
    >
      返回
    </el-link>
  </div>
</template>

<script>
import {setAvatarUrl} from "@/utils/avatarUrl";

export default {
  name: "loginBox",
  data() {
    return {
      labelPosition: 'right',
      activeName: 'register',
      ischecked: false,
      boxForm: {
        userName: '',
        phone: '',
        password: '',
        captcha: ''
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toBack() {
      this.$router.back()
    },
    async login() {
      try {
        let {phone, password} = this._data.boxForm
        await this.$store.dispatch('loginAbout/phoneLogin', {phone, password})
        const {nickname, avatarUrl} = this.$store.state.loginAbout.userInfo
        setAvatarUrl(avatarUrl)
        this.$message({
          type: 'success',
          message: `登录成功！欢迎您归来~${nickname}`
        })
        // 返回首页
        this.$router.push('/home')
      } catch (error) {
        this.$message({
          type: 'error',
          message: `登录错误啦！错误消息为：${error.message}`
        })
      }
    }
  }
}
</script>

<style scoped>
.loginBox {
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  /*color: rgb(128, 128, 128);*/
  color: rgb(255, 255, 255);
  position: absolute;
  left: 10vw;
  top: 5vh;
  width: 30vw;
  height: 90vh;
  /*background-color: white;*/
}

.logo {
  width: 10vw;
  height: 20vh;
  position: relative;
  left: 10vw;
  
}

.loginBoxFrom {
  width: 20vw;
  position: relative;
  left: 5vw;
}

.fromInput {
  padding-top: 1vh;
  padding-bottom: 0;
}

.inputGroup {
  padding-left: 1.5vw;
  padding-right: 1.5vw;
}
</style>