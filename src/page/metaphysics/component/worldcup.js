/*
 * @params x1 x2 xn,c
 * x1*m = x2*n =...
 * m + n +... =c
 * @returns {Array} m n k x1*m/c
 */
function hellgate (args, c){
  // if(arguments.length<2) console.error('请输入至少两个参数');
  // let args = Array.prototype.slice.call(arguments);
  // let c = args.pop();
  let x1 = args[0];
  let output = args.map(v => x1/v)
  let h = output.reduce(function(acc,v){
    return acc + v
  },0)
  let r = c/h;
  output = output.map(v => v*r)
  let ratio = output[0]*x1/c
  return {
    list: output,
    ratio: ratio
  }
}

import React from 'react'
import { Input, Row, Col, Button, Form, Card, message } from 'antd'

class WorldCup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: [],
      money: '',
      output: [],
      ratio: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) {
        message.error('请输入正确的格式')
        return
      }
      let ratio = this.props.form.getFieldsValue().ratio
      let money = this.props.form.getFieldsValue().money
      
      let input = ratio.split(',').map(function(v){return parseFloat(v)})
      money = parseFloat(money)
      let res = hellgate(input, money)
      this.setState({
        input: input,
        money: money,
        output: res.list,
        ratio: res.ratio,
      })
    })
  }

  handleReset = (e) => {
    e.preventDefault()
    this.props.form.resetFields()
    this.setState({
      input: [],
      money: '',
      output: [],
      ratio: '',
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    let i = this.state.level
    return (
      <div style={{marginTop:20}}>
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('ratio', {
                rules: [{ required: true }],
              })(
                  <Input type="text" addonBefore="赔率：" placeholder="请输入数字，以英文逗号 , 隔开" />
              )}
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rowItem">
            <Col xs={24} md={12}>
              {getFieldDecorator('money', {
                rules: [{ required: true }],
              })(
                  <Input type="number" addonBefore="资金：" addonAfter="￥" />
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
            <Input addonBefore="输入：" value={this.state.input} id="red" disabled/>
          </Col>
        </Row>
        <Row type="flex" justify="center" className="rowItem">
          <Col xs={24} md={12}>
            <Card bodyStyle={{ padding:0}} className="list-bmi">
              <p key="output">输出：</p>
              {this.state.output.map((v,i)=>{
                return <p key={i}>{`${this.state.input[i]}：${v}`}</p>
              })}
              <p key="ratio" className='active'>平均收益率：{this.state.ratio}</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form.create()(WorldCup);