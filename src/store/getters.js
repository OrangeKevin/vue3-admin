const getters = {
  token: state => state.user.token,
  hasUserInfo: state => {
    /**
     * return true 表示用户信息已存在
     */
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.token
}
export default getters
