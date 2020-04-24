import React from 'react';
import '@/asset/css/global.css';
import './index.less';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //
  }
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="header-left">
              <a href="/"><img className="logo" src="/public/images/logo-text.png" /></a>
            </div>
            <div className="header-right">
              {this.props.header}
            </div>
          </div>
        </header>
        <div className="main">
          <div className="container">
            { this.props.children }
          </div>
        </div>
        <p className="copyright">
          <span>© { new Date().getFullYear() } EvanLiu, Inc.</span>
          <a target="_blank" rel="noopener noreferrer" href="http://www.miitbeian.gov.cn">粤ICP备18035883号</a>
        </p>
      </div>
    )
  }
}
