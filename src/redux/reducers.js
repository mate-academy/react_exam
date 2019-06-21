import {
  DISPLAY, EDIT_ITEM, LOAD, MOVE_DOWN, MOVE_UP, REMOVE_ITEM, SELECT_ITEM,
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
        state,
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
      if (action.selectedItem === 0) {
        return state;
      }
      selectedAuthor = state.authorList.splice(action.selectedItem, 1);
      state.authorList.splice(action.selectedItem - 1, 0, selectedAuthor[0]);
      return {
        authorList: state.authorList,
        selectedItem: action.selectedItem - 1,
      };
    case MOVE_DOWN:
      if (action.selectedItem === 0) {
        return state;
      }
      selectedAuthor = state.authorList.splice(action.selectedItem, 1);
      state.authorList.splice(action.selectedItem + 1, 0, selectedAuthor[0]);
      return {
        authorList: state.authorList,
        selectedItem: action.selectedItem + 1,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        authorList: state.authorList.filter(),
      };
    default:
      return state;
  }
};
