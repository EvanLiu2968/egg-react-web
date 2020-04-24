import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return this.props.children; 
  }
}

Reporter.propTypes = {
  option: PropTypes.object.isRequired,
  name: PropTypes.string,
};

Reporter.defaultProps = {
  option: {},
  name: '',
};

export const reporter = function(props = {}){
  return function(Comp){
    return class extends React.Component {
      render() {
        return <Reporter {...props}><Comp {...this.props}/></Reporter>
      }
    }
  }
}