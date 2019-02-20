import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Input } from 'reactstrap'

class Select extends Component {
  render(){
    return (
      <div>
        <Input type="select" name="select" id="exampleSelect" onChange={this.props.controlFunc}>
          {this.props.options.map((option) => {
            return (<option key={option} value={option}>{option}</option>)
          })}
      </Input>
    </div>
    )
  }  
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string,
  controlFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

const mapStateToProps = state => ({
  options: state.players.playerPositions,
})

export default connect(mapStateToProps)(Select)