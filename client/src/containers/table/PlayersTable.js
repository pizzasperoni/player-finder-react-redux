import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'

class PlayersTable extends Component {

  getPlayers = () => {
    let allPlayers = this.props.players
    let playersFiltered = this.props.playersBySelect
    let selectedPosition = this.props.selectedPosition
    let playersByGivenAge = this.props.playersByGivenAge.length === 0 ? allPlayers : this.props.playersByGivenAge
    let playersByName = this.props.playersByName.length === 0 ?  allPlayers : this.props.playersByName 
     
    if (selectedPosition == "Position"){
      playersFiltered = allPlayers
    }

    if(playersByName.length <= playersByGivenAge.length){
      playersFiltered = playersByName
    }
    if (playersByGivenAge.length <= playersByName.length){
      playersFiltered = playersByGivenAge
    }

    return playersFiltered.map((player)=> {
      return (
        <tr key={player.name}>
          <th scope="row">{player.name}</th>
          <td>{player.position}</td>
          <td>{player.nationality}</td>
          <td>{player.age}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table hover className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Position</th>
            <th>Team</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
            {this.getPlayers()}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  players: state.players.allPlayers,
  playersBySelect: state.players.playersBySelect,
  playersByGivenAge: state.players.playersByGivenAge,
  selectedPosition: state.players.selectedPosition,
  playersByName: state.players.playersByName
})

export default connect(mapStateToProps)(PlayersTable) 