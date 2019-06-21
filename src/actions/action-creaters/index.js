import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  SELECT_ITEM,
  CLEAR_SELECTION,
  CHANGE_ITEM,
  DELETE_ITEM,
  CHANGE_INPUT_VALUE,
  MOVE_SELECTION_UP,
  MOVE_SELECTION_DOWN,
} from '../action-types';

const authorRequested = () => {
  return {
    type: FETCH_AUTHOR_REQUEST
  }
};

const authorLoaded = (newBooks) => {
  return {
    type: FETCH_AUTHOR_SUCCESS,
    payload: newBooks
  };
};

const selectItem = (index, value) => {
  return {
    type: SELECT_ITEM,
    payload: {
      index,
      value,
    },
  };
};


const changeItem = (value) => {
  return {
    type: CHANGE_ITEM,
    payload: value,
  };
};
const changeInputValue = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: value,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

const moveSelectionUp = () => {
  return {
    type: MOVE_SELECTION_UP,
  };
};

const moveSelectionDown = () => {
  return {
    type: MOVE_SELECTION_DOWN,
  };
};

const clearSelection = () => {
  return {
    type: CLEAR_SELECTION,
  };
};

export {
  authorRequested,
  authorLoaded,
  selectItem,
  clearSelection,
  moveSelectionUp,
  moveSelectionDown,
  changeItem,
  changeInputValue,
  deleteItem,
}
