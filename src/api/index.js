import requests from "@/api/request";

// 手机登录   /login/cellphone   例子：/login/cellphone?phone=xxx&password=yyy
export const reqLogin = (phone, password) => requests({url: `/login/cellphone?phone=${phone}&password=${password}`,method: 'get'})

// 获取默认搜索关键词  /search/default
export const reqDefaultKeyword = () => requests({url:'/search/default',method: 'get'})

// 获取排行榜榜单ID详情 榜单也是一种歌单  /toplist
export const reqRankingID = () => requests({url: '/toplist',method: 'get'})

// 获取榜单所有歌曲 /playlist/track/all?id=
export const reqRankingList = (id) => requests({url: `/playlist/track/all?id=${id}`,method: 'get'})

// 获取所有歌手信息 /artist/list?type=-1&area=-1&initial=-1
export const reqSingerList = (type) => requests({url: `/artist/list?type=${type}&area=-1&initial=-1`})