<template>
  <div class="boxPlayer">
    <div class="amplitude-prev" id="previous"></div>
    <div :class="playAndPauseClass" id="play-pause"></div>
    <div class="amplitude-next" id="next"></div>
    <div class="songsInfo">
      <p style="margin-bottom: 8px;margin-top: 8px;">
        <span data-amplitude-song-info="name"></span>-<span data-amplitude-song-info="artist"></span>
      </p>
    </div>
    <img data-amplitude-song-info="cover_art_url" class="songsImg">
  </div>
</template>

<script>
// 引入Amplitude.js
import Amplitude from 'amplitudejs/dist/amplitude.min'

export default {
  name: "boxPlayer",
  data() {
    return {
      playing: false,
    }
  },
  computed: {
    playAndPauseClass() {
      return this.playing ? 'amplitude-play-pause amplitude-playing' : 'amplitude-play-pause amplitude-paused'
    }
  },
  mounted() {
    Amplitude.bindNewElements()
    let playingState = Amplitude.getPlayerState()
    if(playingState === 'playing') this.playing = true
  }
}
</script>

<style scoped>
.boxPlayer {
  display: flex;
  z-index: 1;
  object-fit: cover;
  position: absolute ;
  top: 0;
  left: 1vw;
  height: 38px;
  width: 20vw;
  margin-top: 10px;
  margin-bottom: 10px;
  /* 玻璃拟态 */
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  -webkit-box-shadow: rgba(142, 142, 142, 0.19) 0px 6px 15px 0px;
  border-radius: 25px;
  -webkit-border-radius: 25px;
  color: rgba(255, 255, 255, 0.75);
}
#previous {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 3px;
  left: 0 ;
  cursor: pointer;
  background: url("@/assets/svg/shangyishou.svg");
}
#play-pause {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 3px;
  left: 32px;
  cursor: pointer;
}
.amplitude-playing {
  background: url("@/assets/svg/zanting.svg");
}
.amplitude-paused {
  background: url("@/assets/svg/bofang.svg");
}
#next {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 3px;
  left: 64px;
  cursor: pointer;
  background: url("@/assets/svg/xiayishou.svg");
}
.songsInfo {
  width: auto;
  height: 38px;
  position: absolute;
  top: 0;
  left: 102px;
  overflow: hidden;
}
.songsImg {
  width: 38px;
  height: 38px;
  position: absolute;
  top: 0;
  right: 0;
}
img {
  width: 38px;
  height: 38px;
  border-radius: 25px;
  /*border: 1px solid black;*/
}
</style>