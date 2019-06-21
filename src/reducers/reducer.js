import {
  LOAD_ITEMS,
  DISPLAY_ITEMS,
  SELECT_ITEM,
  MOVE_SELECTION_UP,
  MOVE_SELECTION_DOWN,
  CLEAR_SELECTION,
  DELETE_SELECTION,
  INPUT_NEW_CONTENT
} from './actions';

const initialState = {
  requested: false,
  title: null,
  selectedIndex: null
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        requested: true
      };
    case DISPLAY_ITEMS:
      return {
        ...state,
        title: action.title
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedIndex: action.itemId
      };
    case MOVE_SELECTION_UP:
      if (state.selectedIndex === 0) {
        return state;
      }
      const listAfterMoveUp = [...state.title];
      let firstEl_UP = listAfterMoveUp[state.selectedIndex];
      let previousEl_UP = listAfterMoveUp[state.selectedIndex - 1];
      listAfterMoveUp.splice(state.selectedIndex - 1, 2, firstEl_UP, previousEl_UP);

      return {
        ...state,
        title: listAfterMoveUp,
        selectedIndex: state.selectedIndex - 1
      };
    case MOVE_SELECTION_DOWN:
      if (state.selectedIndex === state.title.length - 1) {
        return state;
      }

      const listAfterMove_DOWN = [...state.title];
      let firstEl_DOWN = listAfterMove_DOWN[state.selectedIndex];
      let secondEl_DOWN = listAfterMove_DOWN[state.selectedIndex + 1];
      listAfterMove_DOWN.splice(state.selectedIndex, 2, secondEl_DOWN, firstEl_DOWN);

      return {
        ...state,
        title: listAfterMove_DOWN,
        selectedIndex: state.selectedIndex + 1
      };
    case CLEAR_SELECTION:
      return {
         ...state,
        selectedIndex: null
      };
    case DELETE_SELECTION:
      const smallerList = state.title;
      smallerList.splice(action.itemId, 1);
      return {
        ...state,
        title: smallerList,
        selectedIndex: null
      };
    case INPUT_NEW_CONTENT:
      let newList = state.title;
      newList.splice(state.selectedIndex, 1, action.newItem);
      return {
        ...state,
        title: newList
      };
    default: return state;
  }
}
