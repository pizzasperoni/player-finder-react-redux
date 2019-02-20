import { 
  FETCH_PLAYERS, 
  SEARCH_BY_NAME, 
  SELECT_POSITION,
  FIND_BY_AGE
 } from './types'

import moment from 'moment'


export const fetchPlayers = () => dispatch => {
  fetch('https://football-players-b31f2.firebaseio.com/players.json')
  .then(res => res.json())
  .then(data => {
    let players = data.map((item)=>{
      let dob =  item.dateOfBirth.replace(/-/g,'')
      let age = moment(dob, "YYYYMMDD").fromNow()
      age = age.replace(/ years ago/g,'')
      item.age = age
      return item 
    })
    dispatch({
      type: FETCH_PLAYERS,
      payload: players
    })
  })
}

export const searchByName = (playerName, players) => (dispatch) => {
  let playersByName = players
  if (playerName !== ''){
    playersByName = players.filter((player)=>{
      if(player.name == playerName){
        return player
      }
    })
  }
  dispatch({
    type: SEARCH_BY_NAME,
    payload: playersByName
  })
}

export const searchByAge = (playerAge, players) => (dispatch) => {
  let playersByGivenAge = players
  
  if(playerAge !== ''){
    playersByGivenAge = players.filter((player)=> {
      if (player.age === playerAge){
        return player
      }
    })
  }

  dispatch({
    type: FIND_BY_AGE,
    payload: playersByGivenAge
  })
}

export const selectPosition = (playerPosition, players) => (dispatch) => {
  let playersOnSelectedPosition = players.filter((player) => {
    if (player.position == playerPosition){
      return player
    }
  })
  dispatch({
    type: SELECT_POSITION,
    payload: {
      selectedPosition: playerPosition, 
      playersBySelect: playersOnSelectedPosition
    }
  })
}
