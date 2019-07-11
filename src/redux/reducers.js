import { 
  LOAD_DATA,
  DISPLAY_DATA,
  REMOVE_AUTHOR,
  MOVE_DOWN,
  SELECT_ITEM,
  REMOVE_SELECT,
  MOVE_UP,
  ADD_VALUE_TO_INPUT,
  CHANGE_INPUT_VALUE,
  SAVE_CHANGED_VALUE
} from "./actions";

const initialState = {
  selectedIndex: null,
  requested: false,
  authorList: null,
  input: null
}

export function reducer(state = initialState, action) {
  const { selectedIndex, authorList, input } = state;

  switch(action.type) {
    case LOAD_DATA:
      return {
        ...state,
        requested: true
      };

    case DISPLAY_DATA:
      return {
        ...state,
        authorList: action.authorList
      };

    case REMOVE_AUTHOR:
      return {
        ...state,
        authorList: authorList.slice(0, action.index).concat(authorList.slice(action.index + 1)),
        selectedIndex: null
      };

    case SELECT_ITEM:
    if (selectedIndex === null ||selectedIndex !== action.index) {
      return {
        ...state,
        selectedIndex: action.index
      };
    } else {
      return {
        ...state,
        selectedIndex: null
      };
    }

    case REMOVE_SELECT:
      return {
        ...state,
        selectedIndex: null
      };

    case MOVE_UP:
      if (selectedIndex === 0) {
        return state;
      }
  
      const authorListUp = [...authorList];
      const [removedAuthorToUp] = authorListUp.splice(selectedIndex, 1);
      authorListUp.splice(selectedIndex - 1, 0, removedAuthorToUp);
  
      return {
        ...state,
        authorList: authorListUp,
        selectedIndex: selectedIndex - 1,
      };

    case MOVE_DOWN:
      if (selectedIndex === authorList.length - 1) {
        return state;
      }
  
      const authorListDown = [...authorList];
      const [removedAuthorToDown] = authorListDown.splice(selectedIndex, 1);
      authorListDown.splice(selectedIndex + 1, 0, removedAuthorToDown);
  
      return {
        ...state,
        authorList: authorListDown,
        selectedIndex: selectedIndex + 1,
      };
      
    case ADD_VALUE_TO_INPUT:
      return {
        ...state,
        input: authorList[selectedIndex]
      }

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        input: action.value
      }

    case SAVE_CHANGED_VALUE:
      if (input !== '') {
        return {
          ...state,
          authorList: authorList.map((author, index) => {
            if (index !== selectedIndex) {
              return author;
            } else {
              return input;
            }
          }),
          input: null,
          selectedIndex: null
        } 
      } else {
        return {
          ...state,
          authorList: authorList.filter((author, index) => {
            return selectedIndex !== index;
          }),
          input: null,
          selectedIndex: null
        }
      }
      
    default:
      return state;
  }
}
