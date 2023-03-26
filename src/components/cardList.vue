<template>
  <div>
    <el-card class="box-card box1">
      <div slot="header" class="clearfix">
        <span>飙升榜</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshSongLists(0)">刷新</el-button>
      </div>
      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">
        <li v-for="item in rankingLists[0]">
          <el-link :underline="false" type="info" @click="addSongs(item)">{{ item.name }}——{{ item.ar[0].name }}
          </el-link>
        </li>
      </ul>
    </el-card>
    <el-card class="box-card box2">
      <div slot="header" class="clearfix">
        <span>新歌榜</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshSongLists(1)">刷新</el-button>
      </div>
      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">
        <li v-for="item in rankingLists[1]">
          <el-link :underline="false" type="info">{{ item.name }}——{{ item.ar[0].name }}</el-link>
        </li>
      </ul>
    </el-card>
    <el-card class="box-card box3">
      <div slot="header" class="clearfix">
        <span>原创榜</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshSongLists(2)">刷新</el-button>
      </div>
      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">
        <li v-for="item in rankingLists[2]">
          <el-link :underline="false" type="info">{{ item.name }}——{{ item.ar[0].name }}</el-link>
        </li>
      </ul>
    </el-card>
    <el-card class="box-card box4">
      <div slot="header" class="clearfix">
        <span>热歌榜</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="refreshSongLists(3)">刷新</el-button>
      </div>
      <ul style="overflow:auto;height: 70vh;margin-bottom: 8px;margin-top: 8px">
        <li v-for="item in rankingLists[3]">
          <el-link :underline="false" type="info">{{ item.name }}——{{ item.ar[0].name }}</el-link>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "cardList",
  data() {
    return {
      count: 100,
      rankingLists: []
    }
  },
  methods: {
    addSongs(songsObj) {
      let {ar,name,al,id} = songsObj
      let newAr = ''
      for (let i = 0; i < ar.length; i++) {
        if (i === 0) newAr = ar[i].name
        else newAr = newAr + '/' + ar[i].name
      }
      let songs = {
        "name": name,
        "artist": newAr,
        "album": al.name,
        "url": `https://music.163.com/song/media/outer/url?id=${id}.mp3`,
        "cover_art_url": al.picUrl
      }
      this.$bus.$emit('addSongAndPlay',songs)
    },
    async refreshSongLists(i) {
      try {
        await this.$store.dispatch('rankingAbout/getRankingList', i)
        this.rankingLists = this.$store.state.rankingAbout.rankingList
      } catch (error) {
        this.$message({
          type: 'error',
          message: `刷新错误啦~。请重新尝试一下!错误原因：${error.message}`
        })
      }
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('rankingAbout/getAllRankingList')
      this.rankingLists = this.$store.state.rankingAbout.rankingList
    } catch (error) {
      this.$message({
        type: 'error',
        message: `发生错误啦~，错误原因为：${error.message}`
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
  left: 4vw;
}

.box2 {
  position: absolute;
  top: 13vh;
  left: 28vw;
}

.box3 {
  position: absolute;
  top: 13vh;
  right: 28vw;
}

.box4 {
  position: absolute;
  top: 13vh;
  right: 4vw;
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