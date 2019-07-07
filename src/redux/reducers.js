import {DISPLAY, LOAD, SELECT,
  MOVE_SELECTION_UP, MOVE_SELECTION_DOWN,
  EDIT, DELETE, APPLY_EDIT, CANCEL_EDIT} from "./actions";

const initialState = {
  requested: false,
  authorsList: null,
  selectedIndex: -1,
  inEdit: false
};

function swap(lst, i1, i2) {
  const newLst = lst.slice();
  const [removedItem] = newLst.splice(i2, 1);
  newLst.splice(i1, 0, removedItem);
  return newLst;
}

function deleteItem(lst, index) {
  const newLst = lst.slice();
  newLst.splice(index, 1);
  return newLst;
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
        authorsList: action.authorsList,
        requested: false
      };
    case SELECT:
      return {
        ...state,
        selectedIndex: +(action.index)
      };
    case MOVE_SELECTION_UP:
      return {
        ...state,
        authorsList: swap(state.authorsList, state.selectedIndex - 1, state.selectedIndex),
        selectedIndex: state.selectedIndex - 1
      };
    case MOVE_SELECTION_DOWN:
      return {
        ...state,
        authorsList: swap(state.authorsList, state.selectedIndex + 1, state.selectedIndex),
        selectedIndex: state.selectedIndex + 1
      };
    case EDIT:
      return {
        ...state,
        inEdit: true
      };
    case APPLY_EDIT:
      let newAuthors = state.authorsList;
        if (action.inputValue === '') {
            newAuthors.splice(state.selectedIndex, 1);
          } else {
            newAuthors[state.selectedIndex] = action.inputValue;
          }
          return {
            ...state,
            authorsList: newAuthors,
            inEdit: false,
            selectedIndex: -1
          };
    case CANCEL_EDIT:
      return {
        ...state,
        inEdit: false
      };
    case DELETE:
      return {
        ...state,
        authorsList: deleteItem(state.authorsList, state.selectedIndex),
        selectedIndex: state.selectedIndex - 1
      };

    default:
    return state;
  }
  // return state;
}
