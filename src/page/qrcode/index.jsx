/* 
 * List
 */
import React from 'react'
import Container from '@/component/container'
import { Input, Row, Col, Button, Form, Card, message } from 'antd'
import Qrcode from '@/component/qrcode'
import webInject from 'web-inject'
import './index.less'

@Form.create()
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: 'https://www.evanliu2968.com.cn',
      width: 200,
      color: '#00ff00ff',
      bgColor: '#ffffffff',
      margin: 0,
      scale: 4,
    }
    this.generate = this.generate.bind(this)
  }
  componentDidMount(){
    // mounted
  }
  generate(){
    const { validateFields, getFieldsValue } = this.props.form
    validateFields((err, values) => {
      if (err) {
        message.error('请输入正确的参数！')
        return
      }
      const fieldsValue = getFieldsValue()
      this.setState({
        url: fieldsValue.url,
        width: fieldsValue.width,
        color: fieldsValue.color,
        bgColor: fieldsValue.bgColor,
        margin: fieldsValue.margin,
      })
    })
  }
  changeScale() {
    webInject
    .css([
      '/public/libs/mui/picker/css/mui.picker.css',
      '/public/libs/mui/picker/css/mui.poppicker.css',
      '/public/libs/mui/picker/css/mui.dtpicker.css',
    ])
    .js([
      '/public/libs/mui/mui.min.js',
      '/public/libs/mui/picker/js/mui.picker.js',
      '/public/libs/mui/picker/js/mui.poppicker.js',
      '/public/libs/mui/picker/js/mui.dtpicker.js',
    ], () => {
      if(!this.picker){
        this.picker = new mui.PopPicker({})
        this.picker.setData([
          {value:1,text:'1'},
          {value:2,text:'2'},
          {value:3,text:'3'},
          {value:4,text:'4'},
        ])
      }
      this.picker.show((selectItems) => {
        console.log(selectItems)
        this.setState({
          scale: selectItems[0].value
        })
      })
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <Container>
        <div className="qrcode-box">
          <Qrcode
            url={this.state.url}
            width={this.state.width}
            color={this.state.color}
            bgColor={this.state.bgColor}
            margin={this.state.margin}
            scale={this.state.scale}
           />
        </div>
        <Form onSubmit={null} className="form-qrcode">
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('url', {
                rules: [{ required: true }],
                initialValue: this.state.url
              })(
                <Input type="text" addonBefore="字符串："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('color', {
                rules: [{ required: true }],
                initialValue: this.state.color
              })(
                <Input type="text" addonBefore="前景色："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('bgColor', {
                rules: [{ required: true }],
                initialValue: this.state.bgColor
              })(
                <Input type="text" addonBefore="背景色："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('width', {
                rules: [{ required: true }],
                initialValue: this.state.width
              })(
                <Input type="number" addonBefore="边&emsp;长："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('margin', {
                rules: [{ required: true }],
                initialValue: this.state.margin
              })(
                <Input type="number" addonBefore="边&emsp;距："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('scale', {
                rules: [{ required: true }],
                initialValue: this.state.scale
              })(
                <Input type="number" disabled={true} addonBefore="倍&emsp;数："/>
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12} className="text-center">
              <Button type="default" onClick={this.changeScale.bind(this)} style={{marginRight:'10px'}}>选择倍数</Button>
              <Button type="primary" onClick={this.generate}>生成二维码</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}