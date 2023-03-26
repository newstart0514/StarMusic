import axios from "axios";
import nprogress from 'nprogress'
// 引入进度条相应样式文件
import "nprogress/nprogress.css"

const requests = axios.create({
    // 配置api路径
    baseURL: 'http://localhost:3000',
    // 配置超时时间
    timeout: 5000
})

// 设置请求拦截器，可以配置请求头
requests.interceptors.request.use((config) => {
    // 配置请求头
    // 进度条开始进行
    nprogress.start();
    return config
})

// 设置响应拦截器，可以对响应数据进行处理
requests.interceptors.response.use((res) => {
    // 响应成功回调
        // 进度条结束
        nprogress.done()
        return res.data
    },
    () => {
        // 响应失败回调
        return Promise.reject(new Error('Fail'))
    }
)

export default requests