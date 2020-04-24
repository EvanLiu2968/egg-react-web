/* 
 * List
 */
import React from 'react'
import { Tabs } from 'antd'
import Container from '@/component/container'
import BMI from './component/bmi'
import Divinat from './component/divinat'
import WorldCup from './component/worldcup'
import Param from '../../libs/param'
import './index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeKey: Param.getUrlParam('tab', this.props.url) || '3'
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
            <Tabs.TabPane tab="黄道" key="1"><Divinat /></Tabs.TabPane>
            <Tabs.TabPane tab="BMI健康指数" key="2"><BMI /></Tabs.TabPane>
            <Tabs.TabPane tab="@东哥" key="3"><WorldCup /></Tabs.TabPane>
            <Tabs.TabPane tab="其他" key="4" disabled></Tabs.TabPane>
          </Tabs>
        </div>
      </Container>
    )
  }
}