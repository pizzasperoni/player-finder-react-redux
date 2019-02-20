import { 
  FETCH_PLAYERS, 
  SEARCH_BY_NAME,
  SELECT_POSITION,
  FIND_BY_AGE
} from '../actions/types'

const initialState = {
  playerName: '',
  playerPositions: ['Position', 'Attacking Midfield', 'Central Midfield', 'Centre-Back', 'Centre-Forward', 'Defensive Midfield', 'Keeper', 'Left Midfield', 'Left Wing', 'Left-Back', 'Right-Back'],
  selectedPosition: 'Position',
  playerAge: '',
  allPlayers: [],
  playersFiltered: [],
  playersByName: [],
  playersByGivenAge: [],
  playersBySelect: []
}


const playersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS :
      return {
        ...state,
        allPlayers: action.payload
      }
    case SEARCH_BY_NAME:
      return {
        ...state,
        playersByName: action.payload
      }
    case SELECT_POSITION:
      return {
        ...state,
        playersBySelect: action.payload.playersBySelect,
        selectedPosition: action.payload.selectedPosition
      }
    case FIND_BY_AGE:
      return {
        ...state,
        playersByGivenAge: action.payload
      }
    default:
      return state
  }
}

export default playersReducer