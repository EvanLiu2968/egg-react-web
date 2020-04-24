import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { userStore } from './userStore'
import { actionStore } from './actionStore'
import configureStore from '@/store/configureStore'

export const rootReducer = combineReducers({
  router: routerReducer,
  userStore,
  actionStore
})

let initialstate = {
  actionStore: {
    collapsed: false,
    theme: 'dark'
  },
  userStore: {
    isLogined: false,
    userinfo: null
  }
}; // 同构应用则需要在此注入服务端的初始状态

export const Store = configureStore(rootReducer, initialstate)