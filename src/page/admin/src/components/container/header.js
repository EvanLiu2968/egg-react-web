import React from 'react'
import { Menu, Icon, Layout, message, Dropdown, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import * as screenfull from 'screenfull'
import PropTypes from 'prop-types'
import { userConnect } from '@admin/store/userStore'
import { actionConnect } from '@admin/store/actionStore'
import { history } from '@admin/routes'

const SubMenu = Menu.SubMenu
const { Header } = Layout

@actionConnect
@userConnect
export default class MyHeader extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    //
  }

  onMenuClick = (item) => {
    if (item.key === 'logout') {
      this.props._logout()
    } else if (item.key === 'center') {
      history.push('/')
    } else if (item.key === 'setting') {
      history.push('/account/setting')
    } else {
      message.info('功能待开发中！')
    }
  }

  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    } else {
      message.info('当前浏览器不支持全屏功能！')
    }
  }
  render() {
    const { userStore, actionStore } = this.props;
    const menu = (
      <Menu selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="center">
          <Icon type="user" />
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" />
          <span>个人设置</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )
    return (
      <Header style={{ background: '#fff'}}>
        <Icon
          className="collapse"
          type={ actionStore.sideCollapsed ? 'menu-unfold' : 'menu-fold' }
          onClick={ this.props._toggleCollapse }
        />
        <Dropdown overlay={menu} placement="bottomRight">
          <span className="userinfo">
            <Avatar src={userStore.userinfo.avatar || '/public/images/github.png'} alt="avatar" />
            <span className="name">{userStore.userinfo.name}</span>
          </span>
        </Dropdown>
        <Icon
          className="screenFull"
          type="arrows-alt"
          onClick={this.screenFull}
        />
      </Header>
    )
  }
}