import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export const AuthRoute = ({ component: Component, ...rest }) => (
  class extends Component {
    constructor(props){
      super(props);
      this.state = {
        auth : false,     // 表示是否认证通过
        hasAuthed: false,  // 表示是否向服务器发送过认证请求
      };
    }
    
    componentDidMount() {
       //authPromise 向服务器发送认证请求，示例以Promise形式返回，result表示认证是否成功
       authPromise().then(result => { 
         if(result == true) {
           this.setState({auth:true, hasAuthed: true});
         }else {
           this.setState({auth:false, hasAuthed: true});
         }
      })
    }
    
    render() {
      // 初始渲染时，尚未向服务器发送认证请求，因此不渲染元素
      if(!this.state.hasAuthed){
        return null;
      }
      return <Route {...rest} render={props => (
        this.state.auth ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
     }
  }
)
