import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Container from '@admin/components/container'
import AsyncLoader from '@/component/asyncLoader'
import { Spin } from 'antd'
import { ConnectedRouter } from 'react-router-redux'

import Login from '@admin/pages/user/login'

const supportsHistory = 'pushState' in window.history

export const history = require('history').createBrowserHistory({
  basename: '/admin',
  forceRefresh: !supportsHistory
})

const loading = <div className="wrap-loading"><Spin size="large" /></div>

// load(() => import(/* webpackChunkName: "home" */"./pages/home"))
const load = (loader) => AsyncLoader({loader, loading})

const routes = (
  // 项目中可使用如下写法 https://www.jianshu.com/p/e3adc9b5f75c
  // exact:true => path 为 '/one' 的路由将不能匹配 '/one/two'
  // <ConnectedRouter history={history}></ConnectedRouter>
  <Router history={ history }>
    <Switch>
      <Route path="/login" component={ Login }></Route>
      <Route path="/" component={(match, location, history)=>{
        return (
          <Container>
            <Route exact path="/" component={ load(() => import("./pages/home")) } />

            <Route exact path="/account/setting" component={ load(() => import("./pages/account/setting")) } />

            <Route path="/module/article" component={ load(() => import("./pages/module/article")) } />
            <Route path="/module/photo" component={ load(() => import("./pages/module/photo")) } />

            <Route path="/tongji/visitor" component={ load(() => import("./pages/tongji/visitor")) } />
            <Route path="/tongji/visit" component={ load(() => import("./pages/tongji/visit")) } />
            <Route path="/tongji/feedback" component={ load(() => import("./pages/tongji/feedback")) } />

            <Route path="/system/user" component={ load(() => import("./pages/system/user")) }></Route>
            <Route path="/system/group" component={ load(() => import("./pages/system/group")) }></Route>
          </Container>
        )
      }}>
      </Route>
    </Switch>
  </Router>
)

export default routes;
