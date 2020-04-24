import React from 'react'
import { Layout } from 'antd'
import Header from './header'
import Sider from './sider'
import ErrorHandler from '@/component//errorHandler'
import { auth } from '@admin/libs/decorator'
import './index.less'

const { Content, Footer } = Layout

@auth
export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <Layout className="wrapper">
        <Sider />
        <Layout>
          <Header />
          <Content className="content">
            <ErrorHandler>{ this.props.children }</ErrorHandler>
          </Content>
          <Footer>
            <p className="copyright">
              <span>© { new Date().getFullYear() } EvanLiu, Inc.</span>
              <a target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn">粤ICP备18035883号</a>
            </p>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}