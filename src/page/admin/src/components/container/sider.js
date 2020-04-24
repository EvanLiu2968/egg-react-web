import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { siderMenu } from '../../config'
import createHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'
import { actionConnect } from '@admin/store/actionStore'

const { Sider, Footer } = Layout

@actionConnect
export default class MySide extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      currentRoute: this.context.router.route.location.pathname
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  getDefaultOpenKeys(){
    const currentRoute = this.state;
    let openKey = '';
    for(let item of siderMenu){
      if(item.children){
        for (let v of item.children){
          if(v.url == currentRoute){
            openKey = v.url
            break;
          }
        }
      }else if(item.url == currentRoute){
        openKey = item.url
        break;
      }
    }
    return [ openKey ]
  }

  componentDidMount() {
    console.log(this.context.router)
  }

  handleClick = (e) => {
    this.setState({
      currentRoute: e.key
    })
  }

  render() {
    const { actionStore } = this.props;
    return (
      <Sider
        collapsible
        collapsed={ actionStore.collapsed }
        // onCollapse={this.onCollapse}
        className="leftMenu"
      >
        <a className="link-site" href="/" target='_blank'>
          <Icon type="github" />
          <span>捕风捉影</span>
        </a>
        <Menu
          theme={ actionStore.theme }
          onClick={this.handleClick}
          defaultOpenKeys={this.getDefaultOpenKeys()}
          selectedKeys={[this.state.currentRoute]}
          mode={this.props.collapsed ? 'vertical' : 'inline'}
        >
          {
            siderMenu.map((subMenu) => {
              if (subMenu.children && subMenu.children.length) {
                return (
                  <Menu.SubMenu key={subMenu.url} 
                    title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}
                  >
                    {subMenu.children.map(menu => (
                      <Menu.Item key={menu.url}>
                        <Link to={menu.url}>{menu.name}</Link>
                      </Menu.Item>
                    ))}
                  </Menu.SubMenu>
                )
              }
              return (
                <Menu.Item key={subMenu.url}>
                  <Link to={subMenu.url}>
                    <Icon type={subMenu.icon} />
                    <span className="nav-text">{subMenu.name}</span>
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
}