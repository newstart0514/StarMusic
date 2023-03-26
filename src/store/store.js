// 引入api
import {reqDefaultKeyword, reqLogin, reqRankingID, reqRankingList, reqSingerList} from "@/api";
// 引入工具
import {setToken} from "@/utils/token";
import {getCookie, setCookie} from "@/utils/cookie";

export const loginAbout = {
    namespaced: true,
    actions: {
        // 手机登录方法
        async phoneLogin({commit}, data) {
            const {phone, password} = data
            const result = await reqLogin(phone, password)
            if(result.code == 200) {
                setToken(result.token)
                setCookie(result.cookie)
                commit('LOGIN',result)
            }
        }
    },
    mutations: {
        // 设置个人信息
        LOGIN(state,data) {
            state.userInfo = data.profile
        }
    },
    state: {
        cookie: '',
        token: '',
        userInfo: {}
    }
}

export const searchAbout = {
    namespaced: true,
    actions: {
        // 获取默认关键词
        async getDefaultKeyword({commit}) {
            const result = await reqDefaultKeyword()
            if(result.code == 200) commit('DEFAULTKEYWORD',result.data.showKeyword)
        }
    },
    mutations: {
        // 存储关键词
        DEFAULTKEYWORD(state,keyword) {
            state.defaultKeyword = keyword
        }
    },
    state: {
        defaultKeyword: ''
    }
}

export const rankingAbout = {
    namespaced: true,
    actions: {
        // 获取所有排行榜的数据
        getAllRankingList({commit}) {
            for (let i = 0; i < 4; i++) {
                this.dispatch('rankingAbout/getRankingList', i)
            }
        },
        // 获取部分排行榜数据
        async getRankingList({commit}, i) {
            const result1 = await reqRankingID()
            if(result1.code == 200) {
                const result2 = await reqRankingList(result1.list[i].id)
                if(result2.code == 200) {
                    const result3 = result2.songs
                    commit('SETI', i)
                    commit('SETRANKINGLISTS',result3)
                }
            }
        }
    },
    mutations: {
        SETI(state,i) {
            state.i = i
        },
        SETRANKINGLISTS(state,songList) {
            state.rankingList[state.i] = songList
        }
    },
    state: {
        i: 0,
        rankingList: [
            [],
            [],
            [],
            []
        ]
    }
}

export const singerAbout = {
    namespaced: true,
    actions: {
        async getAllSinger({commit}) {
            for (let i = 0; i < 3; i++) {
                this.dispatch('singerAbout/getSingerList', {type: i+1, i})
            }
        },
        // 获取歌手列表
        async getSingerList({commit}, data) {
            const {type , i} = data
            const result1 = await reqSingerList(type)
            if(result1.code == 200) {
                commit('SETI', i)
                commit('SETSINGERLIST', result1.artists)
            }
        }
    },
    mutations: {
        SETI(state, i) {
            state.i = i
        },
        SETSINGERLIST(state, singerList) {
            state.singerLists[state.i] = singerList
        }
    },
    state: {
        i: 0,
        singerLists: [
            [],
            [],
            []
        ]
    }
}