import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import RankingList from "@/views/rankingList.vue";
import SingerList from "@/views/singerList.vue";
import SongPlayer from "@/views/songPlayer.vue";
import User from "@/views/user.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/ranking',
        component: RankingList
    },
    {
        path: '/singer',
        component: SingerList
    },
    {
        path: '/songPlayer',
        component: SongPlayer
    },
    {
        path: '/user',
        component: User
    }
]

export default routes