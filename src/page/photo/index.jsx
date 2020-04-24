/* 
 * Picture
 */
import React from 'react'
import Container from '@/component/container'
import ImgLazyLoad from '@/component/lazyload'
import './index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      column: props.isMobile ? 1 : 2,
      photos: props.photos
    }
  }
  componentDidMount(){
    // start images loading
  }
  toggleColumn(column){
    if(this.state.column!==column){
      this.setState({
        column: column
      })
      // 手动触发scroll事件重新懒加载
      this.triggerScroll()
    }
  }
  triggerScroll(){
    window.scrollTo(0,window.scrollY+1)
    window.scrollTo(0,window.scrollY-1)
  }
  render(){
    let placeholder = <div className="flex-center-row" style={{minHeight: '320px'}}><img className="loading" src="/public/images/loading.gif" /></div>
    let header = (
      <ul className="header-category">
        <li key={2} className={this.state.column === 2 ? 'active' : ''} onClick={()=>{this.toggleColumn(2)}}>两列</li>
        <li key={3} className={this.state.column === 3 ? 'active' : ''} onClick={()=>{this.toggleColumn(3)}}>三列</li>
        <li key={4} className={this.state.column === 4 ? 'active' : ''} onClick={()=>{this.toggleColumn(4)}}>四列</li>
      </ul>
    )
    return (
      <Container
        header={this.props.isMobile ? '' : header}
      >
        <div className="content">
          <div className={`waterfall column-count-${this.state.column}`}>
          {this.state.photos.map((item,i)=>{
            return (
              <div key={i} className="waterfall-item">
                <div className="img-box" title={item.title}>
                  <ImgLazyLoad src={item.img} placeholder={placeholder} />
                </div>
                <p className="description">{item.desc}</p>
              </div>
            )
          })}
          </div>
        </div>
      </Container>
    )
  }
}