/* 
 * List
 */
import React from 'react'
import { Tabs } from 'antd'
import Container from '@/component/container'
import Github from './component/github'
import Music from './component/music'
import Zhihu from './component/zhihu'
import Server from './component/server'
import Param from '../../libs/param'
import './index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeKey: Param.getUrlParam('tab', this.props.url) || '4'
    }
  }
  componentDidMount() {
    // mounted
  }
  onTabChange(tabkey) {
    let url = window.location.pathname + Param.setSearchParam(window.location.search, {tab: tabkey})
    if(history.replaceState){
      history.replaceState({action:'replace'}, '',url)
    }
  }
  render(){
    return (
      <Container>
        <div className="content">
        <Tabs defaultActiveKey={ this.state.activeKey } onChange = {this.onTabChange}>
            <Tabs.TabPane tab="我的Github" key="1"><Github /></Tabs.TabPane>
            <Tabs.TabPane tab="我的知乎" key="2"><Zhihu /></Tabs.TabPane>
            <Tabs.TabPane tab="我的网易云音乐" key="3"><Music /></Tabs.TabPane>
            <Tabs.TabPane tab="我的服务器" key="4"><Server isMobile={this.props.isMobile} /></Tabs.TabPane>
          </Tabs>
        </div>
      </Container>
    )
  }
}