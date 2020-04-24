import React from 'react'
import axios from '@/libs/axios'
import ImgLazyLoad from '@/component/lazyload'
import { Icon } from 'antd'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      hotList: []
    }
  }
  componentDidMount(){
    axios({
      method: 'post',
      url: '/api/subscription/zhihu',
      loading: true
    }).then(res=>{
      this.setState({
        hotList: res.data.hotList
      })
    })
  }
  render(){
    return (
      <div className="spider-list">
        {this.state.hotList.map((item,i)=>{
          return (
            <div className="spider-item spider-item-img" key={item.id}>
              <div className="cover flex-center-row">
                <ImgLazyLoad src={item.coverImg} placeholder={<img className="loading" src="/public/images/loading.gif" />} />
              </div>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
              <p className="description">{item.description}</p>
              <div className="info text-gray">
                <span>{'来源知乎'}</span>
                <span><Icon type="like-o" />{` ${item.voteCount}`}</span>
                <span><Icon type="clock-circle-o" />{` ${item.timeAgo}`}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}