/* 
 * List
 */
import React from 'react'
import Container from '@/component/container'
import './index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loading: false,
      apps: [
        {
          name: 'React管理系统',
          color: '#20a0ff',
          url: '/admin',
          description: '用于管理前台模块的react单页系统，后端服务已分离至egg-crud仓库'
        },
        {
          name: 'API文档',
          color: '#13CE66',
          url: '/doc',
          description: 'My WebSite APIs docs'
        },
        {
          name: '小程序',
          color: '#FF4949',
          url: '/metaphysics',
          description: 'Metaphysics Calculator'
        },
        {
          name: 'RSS订阅',
          color: '#F7BA2A',
          url: '/subscription',
          description: 'My RSS subscription from my spider, 包括我的Github动态，知乎动态，网易云歌单等'
        },
        {
          name: '网站介绍',
          color: '#8492A6',
          url: '/about',
          description: 'Shaper, 粒子效果生成器，简单文字介绍我的网站'
        },
        {
          name: '照片',
          color: '#FF6666',
          url: '/photo',
          description: '电影与生活，色彩与空间'
        },
        {
          name: '文章',
          color: '#FF9933',
          url: '/article',
          description: '技术学习、分享，Share the Ghost in the Shell'
        },
        {
          name: '话题关系图',
          color: '#33CC99',
          url: '/chart',
          description: '数据来源本站爬虫，取自知乎、国家统计局(http://data.stats.gov.cn/)等'
        },
        {
          name: '二维码生成',
          color: '#303133',
          url: '/qrcode',
          description: 'node-qrcode生成'
        },
        {
          name: 'PDF生成',
          color: '#20a0ff',
          url: '/pdf',
          description: 'puppeteer生成PDF'
        },
        {
          name: '全景VR',
          color: '#F56C6C',
          url: '/vr',
          description: '基于Three.js'
        },
      ]
    }
  }
  componentDidMount(){
    // mounted
  }
  render(){
    return (
      <Container>
        <div className="content">
          <div className="waterfall clearfix">
          {this.state.apps.map((item,i)=>{
            return (
              <div key={i} className="waterfall-item">
                <a className="box-app" style={{background:item.color}} href={item.url}>
                  <h3 className="app-name">{item.name}</h3>
                  <p className="app-desc">{item.description}</p>
                </a>
              </div>
            )
          })}
          </div>
        </div>
      </Container>
    )
  }
}