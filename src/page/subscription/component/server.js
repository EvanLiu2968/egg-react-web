import React from 'react'
import axios from '@/libs/axios'
import { Card, Table } from 'antd'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      serverInfo: {},
      visitorList: []
    }
  }
  componentDidMount(){
    axios.post('/api/serverInfo').then(res=>{
      this.setState({
        serverInfo: res.data
      })
    })
    axios.post('/api/visitorInfo').then(res=>{
      this.setState({
        visitorList: res.data.visitorList
      })
    })
  }
  getByteSize(byte){
    if (!byte) return 0;
    return parseInt(byte/(1000*1000))
  }
  render(){
    let serverInfo = this.state.serverInfo
    let usemem = serverInfo.totalmem - serverInfo.freemem
    let cpus = serverInfo.cpus ? serverInfo.cpus[0] : {}
    const columns = [
      {
        title: '访问IP',
        dataIndex: 'ip',
        key: 'ip',
      },
      {
        title: '所在城市',
        dataIndex: 'city',
        key: 'city',
        render: (text, item) => {
          return `${item.country}-${item.region}-${item.city}`
        }
      },
      {
        title: '运营商',
        dataIndex: 'isp',
        key: 'isp',
      },
      {
        title: '访问设备',
        dataIndex: 'userAgent',
        key: 'userAgent',
      },
      {
        title: '最后访问时间',
        dataIndex: 'visitTime',
        key: 'visitTime',
        render: text => new Date(text).format('yyyy-MM-dd HH:mm:ss')
      }
    ]
    return (
      <div className="spider-list">
        <h3 className="column-title">服务器基本信息</h3>
        {serverInfo.platform!==undefined && (
          <div style={{marginBottom: '20px'}}>
            <p>服务器：{serverInfo.platform}</p>
            <p>已使用内存：{this.getByteSize(usemem)} MB</p>
            <p>cpu：{serverInfo.cpus ? serverInfo.cpus.length : 0}核</p>
            <p>cpu型号：{cpus.model}</p>
            <p>cpu转速：{cpus.speed}</p>
          </div>
        )}
        <h3 className="column-title">访客记录</h3>
        {this.props.isMobile ? (
          <div className="spider-list">{this.state.visitorList.map((item, k) => {
            return (
              <div className="spider-item" key={k} style={{padding:'10px 0'}}>
                <p>访问IP：{item.ip}</p>
                <p>所在城市：{`${item.country}-${item.region}-${item.city}`}</p>
                <p>运营商：{item.isp}</p>
                <p>访问设备：{item.userAgent}</p>
                <p>最后访问时间：{new Date(item.visitTime).format('yyyy-MM-dd HH:mm:ss')}</p>
              </div>
            )
          })}</div>
        ) :
        <Table columns={columns} dataSource={this.state.visitorList} rowKey="ip" />
        }
      </div>
    )
  }
}