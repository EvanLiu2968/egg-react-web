/* 
 * Search
 */
import React from 'react'
import Container from '@/component/container'
import { Input, message } from 'antd'
import './index.less'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      word: props.query.wd || '',
      result: props.result
    }
  }
  componentDidMount(){
    if (!this.state.result) {
      message.info('搜索过于频繁，请稍后再试')
    }
  }
  onSearch(val) {
    window.location.href = val ? `/search?wd=${val}` : '/search'
  }
  render(){
    const { word, result } = this.state
    const SearchInput = (
      <div>
        <Input.Search placeholder="请输入关键字" size={result ? 'default' : 'large' } style={{width: 500}} enterButton="搜索" defaultValue={word} onSearch={this.onSearch}></Input.Search>
      </div>
    )
    return (
      <Container
        header={ result ? SearchInput : null}
      >
        <div className="content">
          <div>
            { result ? (
              <div className="search_wrapper" dangerouslySetInnerHTML={{__html: result}}></div>
            ) : (
              <div className="search_input">
                <img className="center-block" src="/public/images/horse.png"/>
                { SearchInput }
              </div>
            )}
          </div>
        </div>
      </Container>
    )
  }
}
