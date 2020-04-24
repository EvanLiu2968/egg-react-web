import React from 'react'
import { Table, Button, Modal, Input, Radio, Form, message } from 'antd'
import * as USER from '@/api/user'
import './index.less'

@Form.create()
export default class User extends React.Component {
  constructor() {
    super()
    this.state = {
      query: {
        page: 1,
        size: 10,
        status: 0,
        keyword: ''
      },
      tableData: {
        records: []
      },
      formData: {},
      formType: 'edit',
      formVisible: false
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData() {
    const { query } = this.state
    USER.getUsers(query).then(res => {
      this.setState({
        tableData: res.data
      })
    })
  }
  onPagerChange() {}
  toggleStatus(status = 0) {
    const { query } = this.state
    query.status = status
    this.setState({
      query
    })
    this.fetchData()
  }
  onSearch(value = '') {
    const { query } = this.state
    query.keyword = value
    this.setState({
      query
    })
    this.fetchData()
  }
  editRecord(row = {}, formType = 'edit') {
    this.setState({
      formData: Object.assign({}, row),
      formType,
      formVisible: true
    })
    const { form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = formData[key] || null;
      form.setFieldsValue(obj);
    });
  }
  deleteRecord(row = {}) {
    USER.deleteUser(row.id).then(res => {
      message.success('操作成功')
      this.fetchData()
    })
  }
  handleOk = () => {
    const { form } = this.props;
    form.validateFields(err => {
      if (err) return
      const formData = form.getFieldsValue()
      console.log(formData)
      if (this.state.formType == 'add') {
        USER.createUser(formData).then(res => {
          message.success('提交成功')
          this.fetchData()
          this.setState({
            formVisible: false
          })
        })
      } else {
        USER.updateUser(this.state.formData.id, formData).then(res => {
          message.success('提交成功')
          this.fetchData()
          this.setState({
            formVisible: false
          })
        })
      }
      
    });
  }
  render() {
    const { tableData, query, formData } = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="table-tool">
          <div className="pull-right">
            <Button type="primary" onClick={() => this.editRecord({}, 'add')}>新建</Button>
          </div>
          <div>
            <Radio.Group style={{marginRight:'10px'}} onChange={(e)=>{this.toggleStatus(e.target.value)}} defaultValue={query.status}>
              <Radio.Button value={0}>已启用</Radio.Button>
              <Radio.Button value={1}>已冻结</Radio.Button>
            </Radio.Group>
            <Input.Search
              placeholder="请输入关键字"
              onSearch={value => this.onSearch(value)}
              style={{ width: 200 }}
            />
          </div>
        </div>
        <Table dataSource={ tableData.records } rowKey="id" onPagerChange={this.onPagerChange} >
          <Table.Column title="用户名" dataIndex="name" key="id"></Table.Column>
          <Table.Column title="手机号码" dataIndex="phone" key="phone"></Table.Column>
          <Table.Column title="电子邮箱" dataIndex="email" key="email"></Table.Column>
          <Table.Column title="用户组" dataIndex="group" key="group"></Table.Column>
          <Table.Column title="最近修改人" dataIndex="updateName" key="updateName"></Table.Column>
          <Table.Column title="最近修改时间" dataIndex="updateTime" key="updateTime"></Table.Column>
          <Table.Column title="操作" dataIndex="id" key="id" render={(v, record, index) => {
            // TODO: 默认管理员不能删除
            return record.phone == 'admin' ? null : (
              <Button.Group>
                <Button onClick={()=>{this.editRecord(record)}}>编辑</Button>
                <Button type="danger" onClick={()=>{this.deleteRecord(record)}}>删除</Button>
              </Button.Group>
            )
          }}></Table.Column>
        </Table>
        <Modal
          title={`${this.state.formType == 'add' ? '新增' : '编辑'}用户信息`}
          visible={this.state.formVisible}
          onOk={this.handleOk}
          onCancel={() => this.setState({formVisible: false})}
        >
          <Form layout="vertical">
            <Form.Item label="邮箱">
              {getFieldDecorator('email', {
                initialValue: formData.email,
                rules: [
                  {
                    required: true,
                    message: '请填写邮箱',
                  },
                ],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="手机号码">
              {getFieldDecorator('phone', {
                initialValue: formData.phone,
                rules: [
                  {
                    required: true,
                    message: '请填写手机号码',
                  },
                ],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="昵称">
              {getFieldDecorator('name', {
                initialValue: formData.name,
                rules: [
                  {
                    required: true,
                    message: '请填写昵称',
                  },
                ],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="性别">
              {getFieldDecorator('sexy', {
                initialValue: formData.sexy,
                rules: [
                  {
                    required: true,
                    message: '请选择性别',
                  },
                ],
              })(
                <Radio.Group>
                  <Radio value="male">男</Radio>
                  <Radio value="female">女</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            <Form.Item label="用户组">
              {getFieldDecorator('groupId', {
                initialValue: formData.groupId,
                rules: [
                  {
                    required: true,
                    message: '请选择用户组',
                  },
                ],
              })(
                <Radio.Group>
                  <Radio value={1} disabled>管理员</Radio>
                  <Radio value={2}>普通用户</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            <Form.Item label="个人简介">
              {getFieldDecorator('note', {
                initialValue: formData.note,
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
          </Form>
        </Modal>
      </div>
    );
  }
}
