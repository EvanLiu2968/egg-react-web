/* 
 * Blog
 */
import React from 'react'
import Container from '@/component/container'
import webInject from 'web-inject'
import '@/component/markdown/index.css'
import './index.less'

// http://www.bootcdn.cn/highlight.js/
// inject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/github.min.css')
// inject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/googlecode.min.css')
webInject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/vs.min.css')


export default class App extends React.Component {
  constructor(props){
    super(props)
    let index = 0
    props.category.forEach((item,i)=>{
      if(item.category == props.categoryName){
        index = i
      }
    })
    this.state={
      category: props.category,
      active: props.categoryName,
      mdList: props.category[index].children,
      mdHtml: props.article,
      mdShow: props.article ? true : false
    }
    this.renderMdList.bind(this)
    this.pushState.bind(this)
  }
  componentDidMount(){
    // mounted
  }
  renderMdList(category,list){
    if(this.state.mdShow || this.state.active!==category){
      window.location.href = `/article/${category}`
    }
  }
  pushState(url){
    window.history.pushState(null,null,url)
  }
  render(){
    let header = (
      <ul className="header-category">
        {this.state.category.map((item,i)=>{
          return <li key={i} className={this.state.active==item.category?'active':''} onClick={()=>{this.renderMdList(item.category,item.children)}}>{item.title}</li>
        })}
      </ul>
    )
    return (
      <Container
        header={header}
      >
        <div className="content">
          {this.state.mdShow ? (
            <article className="markdown-body" dangerouslySetInnerHTML={{__html:this.state.mdHtml}}></article>
          ) : (
            <ul className="md-list">
              {this.state.mdList.map((item,i)=>{
                return (
                  <li key={i}>
                    <a href={`/article/${this.state.active}/${item.src}`}>
                      <h3 className="md-title">{item.title}</h3>
                      <div className="md-desc">
                        <span className="md-time">{item.createTime}</span>
                        {item.keywords.map((keyword,k)=>{
                          return <span key={k} className="md-tag">{keyword}</span>
                        })}
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </Container>
    )
  }
}