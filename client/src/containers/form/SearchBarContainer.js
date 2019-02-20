import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { fetchPlayers, selectPosition, searchByAge, searchByName } from '../../actions/searchBarActions'
import { Form } from 'reactstrap'

import Select from '../../components/form/Select'
import SingleInput from '../../components/form/SingleInput'
import AgeInput from '../../components/form/AgeInput';

class SearchBarContainer extends Component {
  
  componentWillMount(){
    this.props.fetchPlayers()
  }
  
  handlePlayerNameChange = e => {
    this.props.searchByName(e.target.value, this.props.players)
  }

  handlePlayerAgeChange = e => {
    if(e.target.value > 40){
      e.target.value = 40
    }
    this.props.searchByAge(e.target.value, this.props.players)
  }

  handlePositionSelect = e => {
    this.props.selectPosition(e.target.value, this.props.players)
  }

   render() {
    return (
      <div>
        <Form inline onSubmit={this.handleFormSubmit}>
          <SingleInput 
            title={'Player name'}
            controlFunc={this.handlePlayerNameChange}
            content={this.props.playerName}
            placeholder={'Player name'}
          />
          <Select 
            name={'position'}
            placeholder={'Position'}
            controlFunc={this.handlePositionSelect}
            options={this.props.playerPositions}
            selectedOption={this.props.playerPosition}
          />
          <AgeInput 
            title={'Age'}
            controlFunc={this.handlePlayerAgeChange}
            content={this.props.playerAge}
            placeholder={'Age'}
          />
        </Form>
      </div>
    )
  }
}

SearchBarContainer.propTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  selectPosition: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPlayers,  
    selectPosition, 
    searchByAge,
    searchByName
  }, dispatch)
}

const mapStateToProps = state => ({
  players: state.players.allPlayers,
  searchPosition: state.players.playerPosition
})

export default connect(mapStateToProps, matchDispatchToProps)(SearchBarContainer) 