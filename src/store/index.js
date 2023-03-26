import Vue from "vue";
import Vuex from 'vuex'
import {loginAbout, rankingAbout, searchAbout, singerAbout} from "@/store/store";

Vue.use(Vuex)

export default new Vuex.Store({
    // 模块化管理数据
    modules: {
        loginAbout,
        searchAbout,
        rankingAbout,
        singerAbout,
    }
})