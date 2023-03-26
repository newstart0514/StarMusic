<template>
  <div class="right">
    <div class="song-to-add" v-for="i in songsToAdd.length" :song-to-add="i-1">
      <el-tooltip
          class="item"
          effect="dark"
          :content="`📀${songsToAdd[i-1].name}-${songsToAdd[i-1].artist}`"
          placement="top"
      >
        <img :src="songsToAdd[i-1].cover_art_url"/>
      </el-tooltip>
      <a class="add-to-playlist-button" :song-to-add="i-1" @click="addSongsToList(i-1)">+添加到列表</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "songRecommendation",
  data() {
    return {
      // 歌曲推荐的歌曲详细信息
      songsToAdd: [
        {
          "name": "在你的身边",
          "artist": "盛哲",
          "album": "在你的身边",
          "url": "https://music.163.com/song/media/outer/url?id=475479888.mp3",
          "cover_art_url": "https://p2.music.126.net/AYNBdRxJ8EdZo4xFjp7b4Q==/109951163191178425.jpg"
        },
        {
          "name": "Vorel",
          "artist": "Russian Circles",
          "album": "Guidance",
          "url": "https://521dimensions.com/songs/Vorel-RussianCircles.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg"
        },
        {
          "name": "Intro / Sweet Glory",
          "artist": "Jimkata",
          "album": "Die Digital",
          "url": "https://521dimensions.com/songs/IntroSweetGlory-Jimkata.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg"
        },
        {
          "name": "Offcut #6",
          "artist": "Little People",
          "album": "We Are But Hunks of Wood Remixes",
          "url": "https://521dimensions.com/songs/Offcut6-LittlePeople.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg"
        },
        {
          "name": "Dusk To Dawn",
          "artist": "Emancipator",
          "album": "Dusk To Dawn",
          "url": "https://521dimensions.com/songs/DuskToDawn-Emancipator.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg"
        },
        {
          "name": "Anthem",
          "artist": "Emancipator",
          "album": "Soon It Will Be Cold Enough",
          "url": "https://521dimensions.com/songs/Anthem-Emancipator.mp3",
          "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
        }
      ]
    }
  },
  methods: {
    addSongsToList(i) {
      // 将需要添加的歌曲数据提交到全局事件总线
      this.$bus.$emit('addSong',this._data.songsToAdd[i])
      // 利用splice方法将添加的歌曲删除
      this._data.songsToAdd.splice(i,1)
    }
  }
}
</script>

<style scoped>

</style>