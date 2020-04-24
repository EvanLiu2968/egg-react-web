/* 
 * List
 */
import React from 'react'
import Container from '@/component/container'
import '@/component/markdown/index.css'
import webInject from 'web-inject'

// http://www.bootcdn.cn/highlight.js/
// inject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/github.min.css')
// inject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/googlecode.min.css')
webInject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/vs.min.css')

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    // mounted
  }
  render(){
    return (
      <Container>
        <article className="markdown-body" dangerouslySetInnerHTML={{__html:this.props.markdown}}></article>
      </Container>
    )
  }
}