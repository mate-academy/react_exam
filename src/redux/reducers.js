import {
  LOAD, DISPLAY,
  SELECTED, MOVE_UP, MOVE_DOWN
} from "./actions";

const initialState = {
  requested: false,
  names: null,
  selectedIndex: null
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true
      };
    case DISPLAY:
      return {
        ...state,
        names: action.names
      }; case SELECTED:
      console.log('selected')
      return {
          ...state,
          selectedIndex: action.index
        };
        case MOVE_UP:
      return {
        ...state,
        names: action.names,
        selectedIndex: action.index
      }; case MOVE_DOWN:
      return {
        ...state,
        names: action.names,
        selectedIndex: action.index
      };
    default:
      return state;
  }
}
