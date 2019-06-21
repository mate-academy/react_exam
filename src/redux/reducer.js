import {
  REQUESTED,
  DISPLAY_ITEMS,
  CHOOSE_ITEM,
  MOVE_UP_ITEM,
  MOVE_DOWN_ITEM,
  EDIT_ITEM,
  CHANGE_INPUT_VALUE,
  UPDATE_ITEM,
  REMOVE_ITEM,
} from './actions';

const initialState = {
  authors: null,
  inputValue: '',
  chosenItemIndex: null,
  requested: false,
  loadedClothes: false,
  isEditItemNow: false,
};

export default function reducer(state = initialState, action) {
  let chosenItem;
  let newCopyItems;
  switch (action.type) {
    case REQUESTED:
      return {
        ...state,
        requested: true,
      };
    case DISPLAY_ITEMS:
      return {
        ...state,
        loadedClothes: action.payload.loadedClothes,
        authors: action.payload.authors,
      };
    case CHOOSE_ITEM:
      return {
        ...state,
        chosenItemIndex: action.payload,
        isEditItemNow: false,
      };
    case MOVE_UP_ITEM:
      newCopyItems = state.authors.slice();
      chosenItem = newCopyItems.splice(state.chosenItemIndex, 1).join();
      newCopyItems.splice(state.chosenItemIndex - 1, 0, chosenItem);
      return {
        ...state,
        chosenItemIndex: newCopyItems.indexOf(chosenItem),
        authors: newCopyItems,
      };
    case MOVE_DOWN_ITEM:
      newCopyItems = state.authors.slice();
      chosenItem = newCopyItems.splice(state.chosenItemIndex, 1).join();
      newCopyItems.splice(state.chosenItemIndex + 1, 0, chosenItem);
      return {
        ...state,
        chosenItemIndex: newCopyItems.indexOf(chosenItem),
        authors: newCopyItems,
      };
    case EDIT_ITEM:
      return {
        ...state,
        inputValue: state.authors[action.payload],
        chosenItemIndex: action.payload,
        isEditItemNow: true,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload.target.value,
      };
    case UPDATE_ITEM:
      newCopyItems = state.authors.slice();
      if (action.payload.key === 'Enter') {
        newCopyItems[state.chosenItemIndex] = state.inputValue;
        if (state.inputValue.trim() === '') {
          newCopyItems.splice(state.chosenItemIndex, 1);
        }
      }
      return {
        ...state,
        authors: newCopyItems,
        inputValue: '',
        chosenItemIndex: null,
        isEditItemNow: false,
      };
    case REMOVE_ITEM:
      newCopyItems = state.authors.slice();
      newCopyItems.splice(action.payload, 1);
      return {
        ...state,
        authors: newCopyItems,
        chosenItemIndex: null,
      };
    default:
      return state;
  }
}
