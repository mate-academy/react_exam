import {
  LOAD, DISPLAY,
  SELECTED, MOVE_UP, MOVE_DOWN, REMOVE, RENAMED
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
      };
      case SELECTED:
      return {
          ...state,
          selectedIndex: action.index
        };
        case MOVE_UP:
      return {
        ...state,
        names: action.names,
        selectedIndex: action.index
      };
      case MOVE_DOWN:
      return {
        ...state,
        names: action.names,
        selectedIndex: action.index
      };
      case REMOVE:
      return {
        ...state,
        names: action.names,
        selectedIndex: null
      };
      case RENAMED:
      return {
        ...state,
        names: action.names,
      };
    default:
      return state;
  }
}
