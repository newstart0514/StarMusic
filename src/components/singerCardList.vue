<template>
  <div>
    <el-card class="box-card box1">
      <div slot="header" class="clearfix">
        <span>男歌手</span>
        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
      </div>
      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">
        <li v-for="item in singerLists">
          {{item[0].name}}
        </li>
      </ul>
    </el-card>
    <el-card class="box-card box2">
      <div slot="header" class="clearfix">
        <span>女歌手</span>
        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
      </div>
<!--      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">-->
<!--        <li v-for="item in rankingLists[1]">-->
<!--          <el-link :underline="false" type="info">{{ item.name }}——{{ item.ar[0].name }}</el-link>-->
<!--        </li>-->
<!--      </ul>-->
    </el-card>
    <el-card class="box-card box3">
      <div slot="header" class="clearfix">
        <span>乐团</span>
        <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
      </div>
<!--      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">-->
<!--        <li v-for="item in rankingLists[2]">-->
<!--          <el-link :underline="false" type="info">{{ item.name }}——{{ item.ar[0].name }}</el-link>-->
<!--        </li>-->
<!--      </ul>-->
    </el-card>
  </div>
</template>

<script>
export default {
  name: "singerCardList",
  data() {
    return {
      singerLists: []
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('singerAbout/getAllSinger')
      this.singerLists = this.$store.state.singerAbout.singerLists
    }catch (error) {
      this.$message({
        type: 'error',
        message: `发生错误！错误消息为：${error.message}`
      })
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 20vw;
  height: 80vh;
}

.box1 {
  position: absolute;
  top: 13vh;
  left: 15vw;
}

.box2 {
  position: absolute;
  top: 13vh;
  left: 40vw;
}

.box3 {
  position: absolute;
  top: 13vh;
  right: 15vw;
}

ul li::marker {
  /*font-size: 30px;*/
  content: url("@/assets/svg/music.svg");
}

li {
  padding-top: 4px;
  padding-bottom: 8px;
}
</style>