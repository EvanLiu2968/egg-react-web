import React from 'react'
import { Button, Form, Input, Select, Upload, message } from 'antd';

@Form.create()
export default class Basic extends React.Component {
  handlerSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields(err => {
      if (!err) {
        message.success('更新成功');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="view-title">基本设置</div>
        <Form layout="vertical" hideRequiredMark>
            <Form.Item label="邮箱">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: '请填写邮箱',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator('phone', {
                rules: [
                  {
                    required: true,
                    message: '请填写手机号码',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="昵称">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '请填写昵称',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="个人简介">
              {getFieldDecorator('note', {
                rules: [
                  {
                    required: true,
                    message: '请填写昵称',
                  },
                ],
              })(
                <Input.TextArea
                  placeholder="这个人很懒，什么也没有说明。"
                  rows={4}
                />,
              )}
            </Form.Item>
            <Button type="primary" onClick={this.handlerSubmit}>更新基本信息</Button>
          </Form>
      </div>
    )
  }
}
