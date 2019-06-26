import {
  LOAD,
  DISPLAY,
  SELECT_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  DESELECT_ITEM,
  UPDATE_EDITED_ITEM,
  CANCEL_EDITING,
  UPDATE_ITEM,
  MOVE_UP,
  MOVE_DOWN,
} from './actions'

const initialState = {
  authors: null,
  selectedItemIndex: null,
  editedName: null,
  editing: null,
  requested: false,
};

function changePlaceItems(items, indexItem1, indexItem2) {
  const newItems = [...items];
  [newItems[indexItem1], newItems[indexItem2]] = [newItems[indexItem2], newItems[indexItem1]];
  return newItems;
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
        authors: action.authors,
        editing: false
      };
    case SELECT_ITEM:
      if(state.editing) {
        return state;
      } else {
          return {
            ...state,
            selectedItemIndex: action.selectedItemIndex,
          };
      }
    case DESELECT_ITEM:
      if (state.editing) {
        return state;
      } else {
          return {
            ...state,
            selectedItemIndex: null
        };
      }
    case DELETE_ITEM:
      let newSelectedItemIndex;
      if (state.selectedItemIndex === action.itemIndex) {
        newSelectedItemIndex = null;
      } else if (state.selectedItemIndex > action.itemIndex) {
        newSelectedItemIndex = state.selectedItemIndex - 1;
      } else {
        newSelectedItemIndex = state.selectedItemIndex;
      };
      return {
        ...state,
        authors: state.authors.filter((item, index) => index !== action.itemIndex),
        selectedItemIndex: newSelectedItemIndex,
        editedName: state.selectedItemIndex === action.itemIndex ? null : state.editedName,
        editing: state.selectedItemIndex === action.itemIndex ? false : state.editing

      }
    case EDIT_ITEM:
      return {
        ...state,
        editing: true,
        editedName: state.authors[state.selectedItemIndex]
      }
    case UPDATE_EDITED_ITEM:
      return {
        ...state,
        editedName: action.editedName
      }
    case CANCEL_EDITING:
      return {
        ...state,
        editing: false,
        editedName: null
      }
    case UPDATE_ITEM:
      return {
        ...state,
        authors: state.authors.map((item,index) => {
          if (index !== state.selectedItemIndex) {
            return item;
          } else {
            return state.editedName;
          };
        }),
        editing: false,
        editedName: null
      }
    case MOVE_UP:
      return {
        ...state,
        authors: changePlaceItems(state.authors, state.selectedItemIndex, state.selectedItemIndex - 1),
        selectedItemIndex: state.selectedItemIndex - 1
      }

    case MOVE_DOWN:
      return {
        ...state,
        authors: changePlaceItems(state.authors, state.selectedItemIndex, state.selectedItemIndex + 1),
        selectedItemIndex: state.selectedItemIndex + 1
      }
    default:
      return state;
  }
};