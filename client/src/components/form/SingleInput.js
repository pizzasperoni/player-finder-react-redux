import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'reactstrap'

class SingleInput extends Component {

  filterLetters = e => {
    if (!((e.charCode >= 65 && e.charCode <= 90) || (e.charCode >= 97 && e.charCode <= 122 || e.charCode === 32))){
      e.preventDefault()
    }
  }

  render() {
    return (
      <div>
        <Input 
          name={this.props.playerName}
          type="text"
          value={this.props.content}
          onChange={this.props.controlFunc}
          onKeyPress={this.filterLetters}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
  
}

SingleInput.propTypes = {
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

export default SingleInput
