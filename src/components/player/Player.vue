<template>
  <div class="left">
    <div id="white-player">
      <div class="white-player-top">
        <div>&nbsp;</div>
        <div class="center">
          <span class="now-playing">星晨音乐</span>
        </div>
        <div>
          <img
              src="https://521dimensions.com/img/open-source/amplitudejs/examples/dynamic-songs/show-playlist.svg"
              class="show-playlist"
              @click="showPlayList"
          />
        </div>
      </div>
      <div id="white-player-center">
        <img
            data-amplitude-song-info="cover_art_url"
            class="main-album-art"
        />
        
        <div class="song-meta-data">
          <span data-amplitude-song-info="name" class="song-name"></span>
          <span
              data-amplitude-song-info="artist"
              class="song-artist"
          ></span>
        </div>
        
        <div class="time-progress">
          <div id="progress-container">
            <input type="range" class="amplitude-song-slider"/>
            <progress
                id="song-played-progress"
                class="amplitude-song-played-progress"
            ></progress>
            <progress
                id="song-buffered-progress"
                class="amplitude-buffered-progress"
                value="0"
            ></progress>
          </div>
          
          <div class="time-container">
                <span class="current-time">
                  <span class="amplitude-current-minutes"></span>:<span
                    class="amplitude-current-seconds"
                ></span>
                </span>
            <span class="duration">
                  <span class="amplitude-duration-minutes"></span>:<span
                class="amplitude-duration-seconds"
            ></span>
                </span>
          </div>
        </div>
      </div>
      <div id="white-player-controls">
        <div class="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
        <div class="amplitude-prev" id="previous"></div>
        <div :class="playAndPauseClass" id="play-pause"></div>
        <div class="amplitude-next" id="next"></div>
        <div class="amplitude-repeat" id="repeat"></div>
      </div>
      <div id="white-player-playlist-container" :class="playlistDisplay" ref="playlist">
        <div class="white-player-playlist-top">
          <div></div>
          <div>
            <span class="queue">星晨音乐</span>
          </div>
          <div>
            <img
                src="https://521dimensions.com/img/open-source/amplitudejs/examples/dynamic-songs/close.svg"
                class="close-playlist"
                @click="closePlayList"
            />
          </div>
        </div>
        <div class="white-player-up-next">播放队列</div>
        <div class="white-player-playlist">
          <div
              class="white-player-playlist-song amplitude-song-container amplitude-play-pause"
              :data-amplitude-song-index="i-1"
              v-for="i in playlists.length"
          >
            <img :src="playlists[i-1].cover_art_url"/>
            <div class="playlist-song-meta">
              <span class="playlist-song-name">{{ playlists[i - 1].name }}</span>
              <span class="playlist-artist-album">{{ playlists[i - 1].album }}</span>
            </div>
          </div>
        </div>
        <div class="white-player-playlist-controls">
          <img data-amplitude-song-info="cover_art_url" class="playlist-album-art"/>
          <div class="playlist-controls">
            <div class="playlist-meta-data">
              <span data-amplitude-song-info="name" class="song-name"></span>
              <span data-amplitude-song-info="artist" class="song-artist"></span>
            </div>
            <div class="playlist-control-wrapper">
              <div class="amplitude-prev" id="playlist-previous"></div>
              <div :class="playAndPauseClass" id="playlist-play-pause"></div>
              <div class="amplitude-next" id="playlist-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入Amplitude.js
import Amplitude from 'amplitudejs/dist/amplitude.min'

export default {
  name: "Player",
  data() {
    return {
      // 歌曲播放状态
      playing: false,
      // 播放列表模式展开标志
      listShowFlag: false,
      // 播放列表
      playlists: [
        {
          "name": "我记得",
          "artist": "赵雷",
          "album": "署前街少年",
          "url": "https://music.163.com/song/media/outer/url?id=1974443814.mp3",
          "cover_art_url": "https://p1.music.126.net/FCWD6ibS2JK2B3QAnXuzwQ==/109951167805892385.jpg"
        },
        {
          "name": "把回忆拼好给你",
          "artist": "王贰浪",
          "album": "把回忆拼好给你",
          "url": "https://music.163.com/song/media/outer/url?id=1403318151.mp3",
          "cover_art_url": "https://p1.music.126.net/CBx2K_jEN3SNWwYztagPPw==/109951164485969446.jpg"
        },
        {
          "name": "若把你",
          "artist": "Kirsty刘瑾睿",
          "album": "若把你",
          "url": "https://music.163.com/song/media/outer/url?id=865632948.mp3",
          "cover_art_url": "https://p1.music.126.net/M877M2-VhWZiLPVFORf9iQ==/109951163401482434.jpg"
        }
      ]
    }
  },
  methods: {
    // 展开播放列表回调
    showPlayList() {
      this.listShowFlag = true
    },
    // 关闭播放列表回调
    closePlayList() {
      this.listShowFlag = false
    },
    // 将歌曲显示在播放列表页面上
    appendToSongDisplay(song) {
      this.playlists.push(song)
    }
  },
  computed: {
    // 以下两个设置样式的方法用来在切换组件时，不初始化播放器的情况下设置样式
    // 根据列表模式的标志位设置样式
    playlistDisplay() {
      return this.listShowFlag ? 'playerListShow slide-in-top' : 'playerListHidden slide-out-top'
    },
    // 根据播放状态来设置样式
    playAndPauseClass() {
      return this.playing ? 'amplitude-play-pause amplitude-playing' : 'amplitude-play-pause amplitude-paused'
    }
  },
  mounted() {
    // 获取播放器播放状态
    let state = Amplitude.getPlayerState()
    // 如果播放器播放状态为停止或者没有播放器
    if (state === 'stopped') {
      // 初始化播放器
      Amplitude.init({
        "songs": this.playlists
      });
    } else {
      // 播放器状态为播放时，设置播放状态为true
      if (state === 'playing') this.playing = true
      // 每当有新歌曲元素时，都应调用该绑定新元素函数添加到页面
      Amplitude.bindNewElements()
    }
    // 通过全局事件总线获取到添加歌曲的信息
    this.$bus.$on('addSong', (songs) => this.appendToSongDisplay(songs))
    // 通过全局事件总线获取到添加的歌曲的信息
    this.$bus.$on('addSongAndPlay',(songs) => console.log(songs))
  },
  updated() {
    // 每当有新歌曲元素时，都应调用该绑定新元素函数添加到页面
    Amplitude.bindNewElements()
  }
}
</script>

<style scoped>
img {
  margin-top: 30px;
}

.playerListShow {
  display: block;
}

.playerListHidden {
  display: none;
}
</style>