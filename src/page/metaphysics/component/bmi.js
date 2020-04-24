import React from 'react'
import { Input, Row, Col, Button, Form, Card, message } from 'antd'

class Bmi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bmi:'-',
      level:'',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('收到表单值：', this.props.form.getFieldsValue());
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error('请输入体重和身高再进行计算')
        return
      }
      let w = this.props.form.getFieldsValue().weight
      let h = this.props.form.getFieldsValue().height
      let bmi = ( w / ((h / 100) ** 2)).toFixed(1)
      let level
      if (bmi < 18.5) {
        level = 0
      } else if(bmi >= 18.5 && bmi <= 24.9) {
        level = 1
      } else if(bmi === 25) {
        level = 2
      } else if(bmi >= 25 && bmi <= 29.9) {
        level = 3
      } else if(bmi >= 30) {
        level = 4
      }
      this.setState({ bmi:bmi, level:level })
    })
  }

  handleReset = (e) => {
    e.preventDefault()
    this.props.form.resetFields()
    this.setState({ bmi:'-', level:'' })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    let i = this.state.level
    return (
      <div style={{marginTop:20}}>
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('weight', {
                rules: [{ required: true }],
              })(
                  <Input type="number" addonBefore="您的体重：" addonAfter="kg" />
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('height', {
                rules: [{ required: true }],
              })(
                  <Input type="number" addonBefore="您的身高：" addonAfter="cm" />
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12} className="text-center">
              <Button type="primary" style={{marginRight: '20px'}}  htmlType="submit">计算</Button>
              <Button onClick={this.handleReset}>重置</Button>
            </Col>
          </Row>
        </Form>
        <Row type="flex" justify="center" className="rowItem">
          <Col xs={24} md={12}>
            <Input addonBefore="您的BMI：" value={this.state.bmi} id="red" disabled/>
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col xs={24} md={12}>
            <Card bodyStyle={{ padding:0}} className="list-bmi">
              <p className={i===0?'active':''}>偏瘦&nbsp;&nbsp;&nbsp;&nbsp;{'<18.5'}</p>
              <p className={i===1?'active':''}>正常&nbsp;&nbsp;&nbsp;&nbsp;{'18.5～24.9'}</p>
              <p className={i===2?'active':''}>超重&nbsp;&nbsp;&nbsp;&nbsp;{'=25'}</p>
              <p className={i===3?'active':''}>偏胖&nbsp;&nbsp;&nbsp;&nbsp;{'25.0～29.9'}</p>
              <p className={i===4?'active':''}>肥胖&nbsp;&nbsp;&nbsp;&nbsp;{'30.0～34.9'}</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

Bmi = Form.create()(Bmi)
export default Bmi;

