import React from 'react'
import { Form, Input, Button, message, Icon } from 'antd'
import PropTypes from 'prop-types'
import './index.less'
import { userConnect } from '@admin/store/userStore'

@userConnect
@Form.create()
export default class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error('请输入正确的用户名和密码')
        return
      }
      let account = this.props.form.getFieldsValue().account
      let password = this.props.form.getFieldsValue().password
      this.props._login({
        account,
        password
      })
    })
  }

  componentDidMount() {
    //
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="loginpagewrap">
        <div className="box">
          <h1 className="title">捕风捉影</h1>
          <div className="loginWrap">
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('account', {
                  rules: [{ required: true, message: '请输入手机号码或邮箱' }],
                })(
                  <Input placeholder="请输入手机号码或邮箱" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="请输入密码" />
                )}
              </Form.Item>
              <p className="login-tips"></p>
              <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}