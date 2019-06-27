import {
  LOAD,
  DISPLAY,
  SELECT_AUTHOR,
  DESELECT_AUTHOR,
  DELETE_AUTHOR,
  EDIT_AUTHOR,
  CANCEL_EDITING,
  UPDATE_AUTHOR,
  UPDATE_EDITED_NAME,
  MOVE_AUTHOR_UP,
  MOVE_AUTHOR_DOWN
} from "./action";

const initialState = {
  authors: null,
  selectedIndex: null,
  editedName: null,
  editMode: null,
  requested: false
};

function swapAuthorsItem(array, index1, index2) {
  const newArray = [...array];
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
}

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
        editMode: false
      };
    case SELECT_AUTHOR:
      if (state.editMode) {
        return state;
      } else {
        return {
          ...state,
          selectedIndex: action.selectedIndex
        };
      }
    case DESELECT_AUTHOR:
      if (state.editMode) {
        return state;
      } else {
        return {
          ...state,
          selectedIndex: null
        };
      }
    case DELETE_AUTHOR:
      let newSelectedIndex;
      if (state.selectedIndex === action.authorIndex) {
        newSelectedIndex = null;
      } else if (state.selectedIndex > action.authorIndex) {
        newSelectedIndex = state.selectedIndex - 1;
      } else {
        newSelectedIndex = state.selectedIndex;
      }
      return {
        ...state,
        authors: state.authors.filter((author, index) => index !== action.authorIndex),
        selectedIndex: newSelectedIndex,
        editMode: state.selectedIndex === action.authorIndex ? false : state.editMode,
        editedName: state.selectedIndex === action.authorIndex ? null : state.editedName
      };
    case EDIT_AUTHOR:
      return {
        ...state,
        editMode: true,
        editedName: state.authors[state.selectedIndex].author
      };
    case CANCEL_EDITING:
      return {
        ...state,
        editMode: false,
        editedName: null
      };
    case UPDATE_AUTHOR:
      return {
        ...state,
        authors: state.authors.map((author, index) => {
          if (index !== state.selectedIndex) {
            return author;
          } else {
            return state.editedName;
          }
        }),
        editMode: false
      };
    case UPDATE_EDITED_NAME:
      return {
        ...state,
        editedName: action.editedName
      }
    case MOVE_AUTHOR_UP:
      return {
        ...state,
        authors: swapAuthorsItem(
          state.authors,
          state.selectedIndex,
          state.selectedIndex - 1
        ),
        selectedIndex: state.selectedIndex - 1
      };
    case MOVE_AUTHOR_DOWN:
      return {
        ...state,
        authors: swapAuthorsItem(
          state.authors,
          state.selectedIndex,
          state.selectedIndex + 1
        ),
        selectedIndex: state.selectedIndex + 1
      };
    default:
      return state;
  }
}
