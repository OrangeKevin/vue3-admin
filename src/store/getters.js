import variables from '@/styles/variables.scss'
const getters = {
  token: state => state.user.token,
  hasUserInfo: state => {
    /**
     * return true 表示用户信息已存在
     */
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo,
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened
}
export default getters
