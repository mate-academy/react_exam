import {
  LOAD, DISPLAY, ORDER, MOVE_UP, MOVE_DOWN, CHOOSE_ITEM, CHANGE_ITEM,
} from './actions';

const initialState = {
  requested: false,
  data: null,
  index: null,
  editItem: '',
  value: '',
};

function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true,
      };
    case DISPLAY:
      return {
        ...state,
        data: action.data,
      };
    case ORDER:
      return {
        ...state,
        index: action.index,
      };
    case MOVE_UP:
      return {
        ...state,
        data: action.newData,
        index: action.index,
      };
    case MOVE_DOWN:
      return {
        ...state,
        data: action.newData,
        index: action.index,
      };
    case CHOOSE_ITEM:
      return {
        ...state,
        editItem: action.item,
      };
    case CHANGE_ITEM:
      return {
        ...state,
        data: action.data,
        editItem: action.item,
      };
    default:
      return state;
  }
}

export default getNextState;
