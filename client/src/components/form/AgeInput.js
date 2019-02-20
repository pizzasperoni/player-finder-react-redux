import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

class AgeInput extends Component {

  onKeyPress = e => {
    if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122)) && (this.props.inputType === "text")){
      e.preventDefault()
    }
  }
 
  render() {
    return (
      <div>
        <Input 
          name={this.props.playerName}
          type="number"
          value={this.props.content}
          onChange={this.props.controlFunc}
          onKeyPress={this.onKeyPress}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
  
}

AgeInput.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  //.isRequired,
  placeholder: PropTypes.string,
}

export default AgeInput
