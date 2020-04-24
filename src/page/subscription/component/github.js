import React from 'react'
import axios from 'axios'
import { Icon } from 'antd'
import { loading } from '@/component/loading';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      reposList: []
    }
  }
  componentDidMount(){
    loading.show()
    axios.get('/proxy/github/users/EvanLiu2968/repos?sort=time').then(res=>{
      this.setState({
        reposList: res.data
      })
      loading.hide()
    })
  }
  render(){
    return (
      <div className="spider-list">
        {this.state.reposList.map((item,i)=>{
          return (
            <div className="spider-item" key={item.id}>
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
              <p className="description">{item.description}</p>
              <div className="info text-gray">
                <span>{item.language}</span>
                <span><Icon type="star" />{` ${item.stargazers_count}`}</span>
                <span><Icon type="eye" />{` ${item.watchers_count}`}</span>
                <span><Icon type="fork" />{` ${item.forks_count}`}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}