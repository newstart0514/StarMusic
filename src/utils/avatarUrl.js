// 将头像的url写入localStorage
// 从本地存储获取到url
export const getAvatar = () => {
    return localStorage.getItem('xingchenAvatar')
}
// 设置url到本地存储
export const setAvatarUrl = (url) => {
    localStorage.setItem('xingchenAvatar',url)
}

// 将url从本地存储中删除
export const deleteAvatarUrl = () => {
    localStorage.removeItem('xingchenAvatar')
}