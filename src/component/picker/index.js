import React from 'react';
import './index.less';
// http://dev.dcloud.net.cn/mui/ui/#picker

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { type, options } = this.props
    if(type === 'date'){
      this.picker = new mui.DtPicker(Object.assign({
        type: 'date', // datetime date time month hour
        // customData: {},
        // labels: ['年', '月', '日'],
        // beginDate: '',
        // endDate: '',
      }, options))
    } else {
      this.picker = new mui.PopPicker(Object.assign({
        layer: 1, // 显示列数
        buttons: ['取消', '确认']
      }, options))
    }
    this.renderPicker()
  }
  UNSAFE_componentWillReceiveProps(props) {
    return props.show ? true : false
  }
  UNSAFE_componentWillUpdate() {
    this.renderPicker()
  }
  componentWillUnmount() {
    this.picker.dispose()
  }
  renderPicker() {
    const { type, show, onChange, data } = this.props
    if(type !== 'date'){
      this.picker.setData(data)
    }
    if(show){
      // this.picker.pickers[0].setSelectedIndex(4, 2000);
      // this.picker.pickers[0].setSelectedValue('fourth', 2000);
      this.picker.show((selectItems) => {
        onChange && onChange(selectItems)
      })
    } else {
      this.picker.hide()
    }
  }
  render() {
    return null
  }
}
