import React from 'react'
import { Row, Col, Card, Table, Button, Tag, Radio, Modal, message } from 'antd'
import axios from '@/libs/axios'
import Markdown from '@/component/markdown'
import '@/component/markdown/index.css'
import './index.less'

export default class Article extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      category: [],
      activeIndex: 0,
      markdown: '',
      modalState: 'edit',
      modalVisible: false
    }
  }
  componentDidMount(){
    axios({
      method: 'post',
      url: '/api/articles'
    }).then(res=>{
      this.setState({
        category: res.data.category
      })
      this.toggleCategory(0)
    })
  }
  toggleCategory = (index) => {
    this.setState({
      activeIndex: index,
      articles: this.state.category[index].children
    })
  }
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
  }
  getCategoryName = () => {
    return this.state.category[this.state.activeIndex].category
  }
  viewArticle = (row) => {
    let file = `${this.getCategoryName()}/${row.src}`
    axios({
      method: 'post',
      url: '/api/articles',
      data: {
        file: file
      }
    }).then(res=>{
      this.setState({
        modalState: 'view',
        markdown: res.data
      })
      this.showModal()
    })
  }
  editArticle = (row) => {
    let file = `${this.getCategoryName()}/${row.src}`
    axios({
      method: 'post',
      url: '/api/articles',
      data: {
        file: file
      }
    }).then(res=>{
      this.setState({
        modalState: 'edit',
        markdown: res.data
      })
      this.showModal()
    })
  }
  deleteArticle = (row) => {
    message.warning('抱歉，您没有权限删除');
  }
  showModal = () => {
    this.setState({
      modalVisible: true
    })
  }
  hideModal = () => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '关键词',
        dataIndex: 'keywords',
        key: 'keywords',
        render: function(text, record, index){
          return text.map((keyword, i)=>{
            return <Tag color="blue" key={i}>{ keyword }</Tag>
          })
        }
      },
      {
        title: '更新时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '操作',
        dataIndex: 'src',
        key: 'src',
        render: (text, record, index)=>{
          return (
            <Button.Group>
              <Button onClick={()=>{this.viewArticle(record)}}>查看</Button>
              <Button type="primary" onClick={()=>{this.editArticle(record)}}>编辑</Button>
              <Button type="danger" onClick={()=>{this.deleteArticle(record)}}>删除</Button>
            </Button.Group>
          )
        }
      }
    ];
    return (
      <div>
        <Radio.Group style={{marginBottom:'16px'}} onChange={(e)=>{this.toggleCategory(e.target.value)}} defaultValue={0}>
          {this.state.category.map((item, i)=>{
            return <Radio.Button key={i} value={i}>{ item.title}</Radio.Button>
          })}
        </Radio.Group>
        <Table columns={columns} dataSource={this.state.articles} rowKey="src" onChange={this.handleChange} />
        <Modal
          className="modal-markdown"
          visible={this.state.modalVisible}
          width={'100%'}
          style={{top:'0', bottom:'0', padding:'0'}}
          title={
          <div style={{margin:'0 auto',width: '980px'}}>
            {`${this.state.modalState == 'view' ? '查看' : '编辑'}Markdown`}
            <Button className="pull-right" style={{marginLeft:'10px'}} type="primary" onClick={this.hideModal}>确定</Button>
            <Button className="pull-right" onClick={this.hideModal}>取消</Button>
          </div>
          }
          onOk={this.hideModal}
          onCancel={this.hideModal}
          footer={null}
        >
          {this.state.modalState == 'view' ? 
          <Markdown style={{margin:'0 auto',width: '980px'}} markdown={this.state.markdown} />
          :
          <Markdown style={{margin:'0 auto',width: '980px'}} markdown={this.state.markdown} />
          }
        </Modal>
      </div>
    );
  }
}