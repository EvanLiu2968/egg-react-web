import { connect } from 'react-redux'

export const actionStore = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COLLAPSE':
      return Object.assign({
        ...state,
        collapsed: !state.collapsed
      })
    default:
      return state || null
  }
}

const mapStateToProps = (state) => {
  return {
    actionStore: state.actionStore
  }
}

/**
 * 为避免props命名冲突，将store相关方法加上 _ 前缀
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
  return {
    _toggleCollapse: () => {
      dispatch({type: 'TOGGLE_COLLAPSE'})
    }
  }
}

export const actionConnect = (App) => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
}