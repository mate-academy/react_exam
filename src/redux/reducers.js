import {
  DISPLAY, LOAD, MOVE_DOWN, MOVE_UP, REMOVE_ITEM, SELECT_ITEM,
} from './actions';

const initialState = {
  requested: false,
  authorList: null,
  selectedItem: null,
};

export const reducer = (state = initialState, action) => {
  let selectedAuthor;
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        requested: true,
      };
    case DISPLAY:
      return {
        ...state,
        authorList: action.authorList,
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case MOVE_UP:
      selectedAuthor = state.authorList.splice(action.selectedItem, 1);
      state.authorList.splice(action.selectedItem - 1, 0, selectedAuthor[0]);
      return {
        ...state,
        authorList: state.authorList,
        selectedItem: action.selectedItem - 1,
      };
    case MOVE_DOWN:
      selectedAuthor = state.authorList.splice(action.selectedItem, 1);
      state.authorList.splice(action.selectedItem + 1, 0, selectedAuthor[0]);
      return {
        ...state,
        authorList: state.authorList,
        selectedItem: action.selectedItem + 1,
      };
    case REMOVE_ITEM:
      state.authorList.splice(action.selectedItem, 1);
      return {
        ...state,
        authorList: state.authorList,
        selectedItem: action.selectedItem - 1,
      };
    default:
      return state;
  }
};
