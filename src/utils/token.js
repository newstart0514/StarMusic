// 读取token
export const getToken = () => {
    return localStorage.getItem('xingchen_Token')
}
// 设置token
export const setToken = (token) => {
    localStorage.setItem('xingchen_Token',token)
}
// 删除token
export const deleteToken = () => {
    localStorage.removeItem('xingchen_Token')
}