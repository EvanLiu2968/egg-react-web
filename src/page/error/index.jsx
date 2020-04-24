/* 
 * 首页
 */
import React from 'react'
import { Collapse } from 'antd'
import '@/asset/css/global.css'
import '../index/index.less'
import '@/component/container/index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <div className="wrapper-full">
        { this.props.errorType === '404' && (
          <div className="error-404">
            <div className="box-image">
              <img src="/public/images/404.png"/>
            </div>
            <div className="box-intro">
              <h2 className="subtitle">你没有如期而至，而这正是等待的意义。</h2>
              <a className="el-button el-button--primary" href="/">返回首页</a>
            </div>
          </div>
        ) }
        { this.props.errorType === '500' && (
          <div className="error-500">
            <div className="box-image">
              <img src="/public/images/500.png"/>
              <p>呜呜呜，服务器出错啦~</p>
            </div>
            <div className="box-intro">
              <h2 className="subtitle">没有人能不犯错误，服务器也不能。</h2>
              <a className="el-button el-button--primary" href="/">返回首页</a>
              <div className="container" style={{marginTop:'20px', fontSize: '12px'}}>
                <Collapse>
                  <Collapse.Panel header="查看错误信息">
                    <p>{ this.props.errorStack }</p>
                  </Collapse.Panel>
                </Collapse>
              </div>
            </div>
          </div>
        ) }
        { this.props.errorType === 'lowVersionBrowser' && (
          <div className="m-oldBrowserTip">
            <h2 className="oldBrowserTip-title">你的浏览器版本太低，无法显示当前内容，请升级浏览器</h2>
            <ul className="m-browserList">
              <li className="item">
                <a className="w-browser" href="https://support.microsoft.com/zh-cn/help/17621/internet-explorer-downloads" title="升级IE10" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li className="item">
                <a className="w-browser" href="//www.firefox.com.cn/" title="火狐" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li className="item">
                <a className="w-browser" href="//se.360.cn/" title="360" target="_blank" rel="noopener noreferrer"></a>
              </li>
              <li className="item item-last">
                <a className="w-browser" href="//www.google.cn/chrome/browser/desktop/index.html" title="chrome" target="_blank" rel="noopener noreferrer"></a>
              </li>
            </ul>
            <div className="oldBrowserTip-ft"></div>
          </div>
        ) }
        <p className="copyright">
          <span>© 2018 EvanLiu, Inc.</span>
          <a target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn">粤ICP备18035883号</a>
        </p>
      </div>
    )
  }
}