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

import AuthorsService from '../../services/authors-service';
const authorsService = new AuthorsService();

const authorRequested = () => {
  return {
    type: FETCH_AUTHOR_REQUEST
  }
};

const authorsLoaded = (newAuthors) => {
  return {
    type: FETCH_AUTHOR_SUCCESS,
    payload: newAuthors
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

const dataLoading = () => (dispatch) => {
  dispatch(authorRequested());
  const promise = authorsService.getAuthors()
  .then(data => dispatch(authorsLoaded(data)));

  return promise;
};


export {
  authorRequested,
  selectItem,
  clearSelection,
  moveSelectionUp,
  moveSelectionDown,
  changeItem,
  changeInputValue,
  deleteItem,
  dataLoading
}
