import {
  CLEAR_SELECT,
  DISPLAY,
  LOAD,
  MOVE_DOWN,
  MOVE_UP,
  SELECT_ITEM,
  DELETE,
  EDIT_LAUNCH,
  EDIT_IN_PROGRESS,
} from './actions';

const initialState = {
  requested: false,
  authors: null,
  edited: false,
  // inputText: '',
  selected: null,
};

// eslint-disable-next-line import/prefer-default-export
export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true,
      };
    case DISPLAY:
      return {
        ...state,
        authors: action.authors,
      };
    case DELETE:
      return {
        ...state,
        authors: state.authors.filter((item) => {
          return state.authors.indexOf(item) !== action.index;
        }),
      };
    case SELECT_ITEM:
      return {
        ...state,
        selected: action.index,
      };
    case CLEAR_SELECT:
      return {
        ...state,
        selected: null,
      };
    case MOVE_UP:
      return moveItemUp(state);
    case MOVE_DOWN:
      return moveItemDown(state);
    case EDIT_LAUNCH:
      return {
        ...state,
        edited: true,
      };
    case EDIT_IN_PROGRESS:
      return {
        ...state,
        authors: state.authors.map((item, index) => {
          if (index === action.index) {
            return action.inputValue;
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

function moveItemDown(state) {
  const newList = [...state.authors];
  if (state.selected === newList.length - 1 || state.selected === null) {
    return state;
  }
  const item = newList.splice(state.selected, 1);
  newList.splice(state.selected + 1, 0, item[0]);
  return {
    ...state,
    authors: newList,
    selected: state.selected + 1,
  };
}

function moveItemUp(state) {
  const newList = [...state.authors];
  if (state.selected === 0 || state.selected === null) {
    return state;
  }
  const item = newList.splice(state.selected, 1);
  newList.splice(state.selected - 1, 0, item[0]);
  return {
    ...state,
    authors: newList,
    selected: state.selected - 1,
  };
}
