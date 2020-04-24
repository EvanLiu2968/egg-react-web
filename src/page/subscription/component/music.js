import React from 'react'
import axios from '@/libs/axios'
import { Icon } from 'antd'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      playlist: [],
    }
  }
  componentDidMount(){
    axios({
      method: 'post',
      url: '/api/subscription/music',
      loading: true
    }).then(res=>{
      this.setState({
        playlist: res.data.playlist,
        htmlList: res.data.htmlList
      })
    })
  }
  render(){
    return (
      <div className="spider-list">
        <ul className="playlist" dangerouslySetInnerHTML={{__html: this.state.htmlList}}></ul>
        {this.state.playlist.map((item,i)=>{
          return (
            <div className="spider-item" key={item.id}>
              <a href={item.songUrl} target="_blank" rel="noopener noreferrer">{item.name}</a>
              <div className="info text-gray">
                <span>{'来源网易云'}</span>
                <span><Icon type="like-o" />{` ${item.duration}`}</span>
                <span><Icon type="clock-circle-o" />{` ${item.singer}`}</span>
                <span><Icon type="clock-circle-o" />{` ${item.album}`}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}