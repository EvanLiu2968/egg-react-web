import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      info: null,
      placeholder: null
    }
  }
  componentDidMount(){
  }
  componentDidCatch(error, info) {
    const placeholder = this.props.onCatch.call(this,error,info) || null
    this.setState({ error, info, placeholder });
  }
  render(){
    if (this.state.error) {
      return this.state.placeholder ? this.state.placeholder : (
        <div className="rc-error-box">
          <p className="rc-error-info">Component Error: {this.state.error.toString()}</p>
          {this.state.info && <p className="rc-error-info">Component Error Stack: {this.state.info.componentStack}</p>}
        </div>
      )
    }
    return this.props.children; 
  }
}

ErrorHandler.propTypes = {
  onCatch: PropTypes.func,
};

ErrorHandler.defaultProps = {
  onCatch: ()=>{},
};

export const errorHandler = function(props = {}){
  return function(Comp){
    return class extends React.Component {
      render() {
        return <ErrorHandler {...props}><Comp {...this.props}/></ErrorHandler>
      }
    }
  }
}