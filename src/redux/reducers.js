import { LOAD_DATA,
         FILL_DATA,
         REMOVE_AUTHOR,
         CLICK_EDIT,
         EDIT_AUTHOR,
         CLICK_REPLACE,
         REPLACE_AUTHOR,
         EXIT_FROM_EDITING } from "./actions";

const initialState = {
  requested: false,
  data: null,
  index: null,
  edit: false,
  move: false
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        requested: true
      };
    case FILL_DATA:
      return {
        ...state,
        data: action.data,
      }
    case REMOVE_AUTHOR:
      const clonedData = [...state.data];
      clonedData.splice(action.index, 1);

      return {
        ...state,
        data: clonedData,
        index: null,
        edit: false,
        move: false
      }
    case CLICK_EDIT:
      return {
        ...state,
        index: action.id,
        edit: true
      }
    case EDIT_AUTHOR:
      return {
        ...state,
        data: state.data.map((author, index) => {
          if (index !== state.index) return author;
          return action.inputValue;
        }),
        edit: false
      }
    case CLICK_REPLACE:
      return {
        ...state,
        index: action.id,
        move: true
      }
    case REPLACE_AUTHOR:
      const clonedData2 = [...state.data];
      const currentAuthor = clonedData2.splice(state.index, 1);
      clonedData2.splice(action.newPosition - 1, 0, currentAuthor[0]);
      return {
        ...state,
        data: clonedData2,
        move: false
      }
    case EXIT_FROM_EDITING:
      return {
        ...state,
        index: null,
        move: false,
        edit:false
      }
    default:
      return state;
  }
}
