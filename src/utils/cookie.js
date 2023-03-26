// 读取cookie
export const getCookie = () => {
    return localStorage.getItem('xingchen_cookie')
}
// 设置cookie
export const setCookie = (cookie) => {
    localStorage.setItem('xingchen_cookie',cookie)
}
// 删除cookie
export const deleteCookie = () => {
    localStorage.removeItem('xingchen_cookie')
}