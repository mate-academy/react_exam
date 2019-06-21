import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  SELECT_ITEM,
  CLEAR_SELECTION,
  CHANGE_ITEM,
  DELETE_ITEM,
  CHANGE_INPUT_VALUE,
  MOVE_SELECTION_UP,
  MOVE_SELECTION_DOWN
} from '../actions/action-types';

const initialState = {
  authors: [],
  loading: false,
  selectedIndex: null,
  inputValue: '',
};

const actionHandlers = {
  [FETCH_AUTHOR_REQUEST]: (state) => {
    return {
      ...state,
      loading: true
    };
  },
  [FETCH_AUTHOR_SUCCESS]: (state, action) => {
    return {
      ...state,
      authors: action.payload,
      loading: false
    };
  },
  [SELECT_ITEM]: (state, action) => {
    return {
      ...state,
      selectedIndex: action.payload.index,
      inputValue: action.payload.value,
    };
  },
  [CLEAR_SELECTION]: (state) => {
    return {
      ...state,
      selectedIndex: null,
    };
  },
  [CHANGE_ITEM]: (state, action) => {
    const { selectedIndex, authors } = state;
    const { payload } = action;
    const newAuthorsList = [...authors];
    if (payload === '') {
      newAuthorsList.splice(selectedIndex, 1);
    } else {
      newAuthorsList[selectedIndex] = payload;
    }
    return {
      ...state,
      authors: [...newAuthorsList],
      selectedIndex: null,
      inputValue: '',
    };
  },
  [DELETE_ITEM]: (state) => {
    const { selectedIndex, authors } = state;
    const newAuthorsList = [...authors];
    newAuthorsList.splice(selectedIndex, 1);
    return {
      ...state,
      authors: [...newAuthorsList],
      selectedIndex: null,
      inputValue: '',
    };
  },
  [CHANGE_INPUT_VALUE]: (state, action) => {
    return {
      ...state,
      inputValue: action.payload
    };
  },
  [MOVE_SELECTION_UP]: (state) => {
    const { selectedIndex, authors } = state;

    if (selectedIndex === 0) {
      return state;
    }

    const newAuthorsList = [...authors];
    const [removedAuthor] = newAuthorsList.splice(selectedIndex, 1);
    newAuthorsList.splice(selectedIndex - 1, 0, removedAuthor);

    return {
      ...state,
      authors: newAuthorsList,
      selectedIndex: selectedIndex - 1,
    };
  },
  [MOVE_SELECTION_DOWN]: (state) => {
    const { selectedIndex, authors } = state;

    if (selectedIndex === authors.length - 1) {
      return state;
    }

    const newAuthorsList = [...authors];
    const [removedAuthor] = newAuthorsList.splice(selectedIndex, 1);
    newAuthorsList.splice(selectedIndex + 1, 0, removedAuthor);

    return {
      ...state,
      authors: newAuthorsList,
      selectedIndex: selectedIndex + 1,
    };
  },
};
const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler
    ? handler(state, action)
    : state;

};

export default reducer;
