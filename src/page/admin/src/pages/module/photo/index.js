/* 
 * Picture
 */
import React from 'react'
import axios from '@/libs/axios'
import ImgLazyLoad from '@/component/lazyload'
import '@/page/photo/index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      column: 1,
      photos: []
    }
  }
  componentDidMount(){
    axios({
      method: 'post',
      url: '/api/photos'
    }).then(res=>{
      this.setState({
        photos: res.data.photoList
      })
    })
  }
  render(){
    let placeholder = <div className="flex-center-row" style={{minHeight: '320px'}}><img className="loading" src="/public/images/loading.gif" /></div>
    return (
      <div className="waterfall">
        {this.state.photos.map((item,i)=>{
          return (
            <div key={i} className="waterfall-item">
              <div className="img-box">
                <ImgLazyLoad src={item.img} placeholder={placeholder} overflow={true} />
              </div>
              <p className="description">{item.desc}</p>
            </div>
          )
        })}
      </div>
    )
  }
}