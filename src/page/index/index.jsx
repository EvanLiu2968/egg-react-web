/* 
 * Home
 */
import React from 'react'
import '@/asset/css/global.css'
import './index.less'

// ssr demo: https://github.com/hubcarl/egg-react-webpack-boilerplate/blob/master/app/web/page/spa/ssr.jsx#L35:1
export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="wrapper-full">
        <div className="box-image">
          <img src="/public/images/horse.png"/>
        </div>
        <div className="box-intro">
          <h1 className="title">Evan Liu</h1>
          <h2 className="subtitle">慎行，独思</h2>
          <ul className="column-list">
            <li><a href="https://github.com/EvanLiu2968" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://evanliu2968.github.io" target="_blank" rel="noopener noreferrer">GhPage</a></li>
            <li><a href="/public/images/weixin.jpg" target="_blank" rel="noopener noreferrer">Wechat</a></li>
            <li><a href="/search" target="_blank" rel="noopener noreferrer">Search</a></li>
          </ul>
          <ul className="column-list">
            <li><a href="/photo">Photo</a></li>
            <li><a href="/article">Article</a></li>
            <li><a href="/list">APP</a></li>
          </ul>
        </div>
        <p className="copyright">
          <span>© 2019 EvanLiu, Inc.</span>
          <a target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn">粤ICP备18035883号</a>
        </p>
      </div>
    )
  }
}