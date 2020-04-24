import React from 'react'
import { Table, Button, Modal, message } from 'antd'
import * as USER from '@/api/user'
import './index.less'

const { Column } = Table

export default class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      query: {},
      tableData: {
        records: []
      },
      modalState: 'edit',
      modalVisible: false
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData() {
    USER.getGroups().then(res => {
      console.log(res)
      this.setState({
        tableData: res.data
      })
    })
  }
  onPagerChange() {}
  render() {
    const { tableData } = this.state
    return (
      <div>
        <Table dataSource={ tableData.records } rowKey="id" onPagerChange={this.onPagerChange} >
          <Column title="用户组名称" dataIndex="groupName" key="groupName"></Column>
          <Column title="用户数量" dataIndex="userCount" key="userCount"></Column>
          <Column title="备注" dataIndex="note" key="note"></Column>
        </Table>
      </div>
    );
  }
}
