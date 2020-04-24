import React from 'react'
import { Layout, Menu } from 'antd'
import './index.less'

import BasicView from './modules/basic';
import PasswordView from './modules/password';
import MessageView from './modules/message';

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'inline',
      selectKey: 'basic',
    };
  }
  selectKey = (key) => {
    this.setState({
      selectKey: key,
    });
  };
  renderChildren = () => {
    const { selectKey } = this.state;
    switch (selectKey) {
      case 'basic':
        return <BasicView />;
      case 'password':
        return <PasswordView />;
      case 'message':
        return <MessageView />;
      default:
        break;
    }

    return null;
  };
  render() {
    const { mode, selectKey } = this.state;
    return (
      <Layout className="layout-account">
        <Layout.Sider>
          <Menu
            mode={mode}
            selectedKeys={[selectKey]}
            onClick={({ key }) => this.selectKey(key)}
          >
            <Menu.Item key="basic">基本设置</Menu.Item>
            <Menu.Item key="password">修改密码</Menu.Item>
            <Menu.Item key="message">消息通知</Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content>
          {this.renderChildren()}
        </Layout.Content>
      </Layout>
    )
  }
}