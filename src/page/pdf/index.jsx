import React from 'react'
import Container from '@/component/container'
import { Input, Row, Col, Button, Form, Card, message } from 'antd'
import axios from '@/libs/axios'

class Bmi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      pdfUrl:'',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('收到表单值：', this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      const url = this.props.form.getFieldsValue().url
      if (err || !/^http/.test(url)) {
        message.error('请输入网址')
        return
      }
      
      message.loading({
        content: '生成PDF中',
        duration: 0,
      })
      this.setState({
        loading: true
      })
      axios.post('/api/htmlToPDF', { url }, {
        timeout: 60000
      }).then(res=>{
        this.setState({
          loading: false,
          pdfUrl: res.data.url
        })
        message.destroy()
      }).catch(err => {
        this.setState({
          loading: false
        })
        message.destroy()
      })
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { loading, pdfUrl } = this.state
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('url', {
                rules: [{ required: true }],
              })(
                  <Input type="text" addonBefore="输入网址：" />
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem" style={{marginTop: '20px'}}>
            <Col xs={24} md={12}>
              <Button type="primary" disabled={loading} style={{marginRight: '20px'}}  htmlType="submit">生成PDF</Button>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem" style={{marginTop: '20px'}}>
            <Col xs={24} md={12}>
              { pdfUrl ? <p>
                生成的PDF URL：
              <a href={ pdfUrl } rel="noopener noreferrer" target="_blank">{ pdfUrl }</a>
              </p> : null}
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

Bmi = Form.create()(Bmi)
export default Bmi;

