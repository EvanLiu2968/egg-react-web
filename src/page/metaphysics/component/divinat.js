import React from 'react'
import { Input, Row, Col, Button, Form, Card, message } from 'antd'
import lunar from '@/libs/lunar';

export default class Divinat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let now = new Date()
    return (
      <div>
        <p>{`今天是 ${now.format('yyyy-MM-dd')}`}</p>
        <p>{`${lunar.getYear(now)} ${lunar.getMonth(now)} ${lunar.getDay(now)}`}</p>
        <p>{`宜：${'驿马动 利西方'}`}</p>
        <p>{`忌：${'起风 望月'}`}</p>
      </div>
    )
  }
}

