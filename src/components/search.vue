<template>
  <div class="searchBox">
    <el-input :placeholder="defaultInput" v-model="input" class="input-with-select" style="width: 16.5vw"></el-input>
    <el-button icon="el-icon-search" round style="width: 3.5vw" type="primary" @click.prevent="search"></el-button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      input: '',
      defaultInput: ''
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('searchAbout/getDefaultKeyword')
      this.defaultInput = this.$store.state.searchAbout.defaultKeyword
    }catch (error) {
      this.$message({
        type: 'error',
        message: `出现错误啦！请检查一下具体原因~，错误信息为：${error.message}`
      })
    }
  },
  methods: {
    search(){
      let keywords = this._data.input || this._data.defaultInput
      window.location.href = `https://www.baidu.com/s?wd=${keywords}`
    }
  }
}
</script>

<style scoped>
.searchBox{
  width: 20vw;
  position: relative;
  top: 5vh;
  left: 40%;
}
</style>