import { connect } from 'react-redux'
import merge from 'lodash/merge'
import { login } from '@/api/auth'
import { setToken, removeToken } from '@/libs//auth'
import { history } from '../routes'

export const userStore = (state, action) => {
  if(action.type === 'UPDATE_USERINFO') {
    return merge({}, state, {
      isLogined: true,
      userinfo: action.userinfo
    })
  }
  else if(action.type === 'LOGIN') {
    return merge({}, state, {
      isLogined: true,
      userinfo: action.userinfo
    })
  }
  else if(action.type === 'LOGOUT') {
    return merge({}, state, {
      isLogined: false,
      userinfo: null
    })
  }
  return state || null
}

const mapStateToProps = (state) => {
  return {
    userStore: state.userStore
  }
}

/**
 * 为避免props命名冲突，将store相关方法加上 _ 前缀
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    _updateUserinfo: (userinfo) => {
      dispatch({
        type: 'UPDATE_USERINFO',
        userinfo
      })
    },
    _login: (logininfo) => {
      login(logininfo).then(res => {
        setToken(res.data)
        history.push('/')
      })
    },
    _logout: () => {
      removeToken()
      dispatch({
        type: 'UPDATE_USERINFO'
      })
      history.push('/login')
    }
  }
}

export const userConnect = (App) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}
