import React from 'react'
import { Store } from '@admin/store'
import { getUserinfo } from '@/api/auth'
import { Redirect } from 'react-router-dom'

export const auth = function(Target, codes = []) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        hasAuthed: false
      }
    }
    setAuth(userinfo) {
      const adminType = userinfo.adminType || ''
      if (codes.find(v => v == adminType)) {
        this.setState({
          hasAuthed: true
        })
      }
    }
    componentDidMount() {
      const { userStore } = Store.getState()
      if (!userStore.isLogined) {
        getUserinfo().then(res => {
          const userinfo = res.data
          Store.dispatch({
            type: 'UPDATE_USERINFO',
            userinfo
          })
          this.setState({
            loading: false
          })
          this.setAuth(userinfo)
        }).catch(e => {
          this.setState({
            loading: false
          })
        })
      } else {
        this.setState({
          loading: false
        })
      }
    }
    render() {
      const { loading, hasAuthed } = this.state
      return loading ? null : (
        hasAuthed ? <Redirect to={{pathname: '/login'}}></Redirect> : <Target {...this.props}></Target>
      )
    }
  }
}