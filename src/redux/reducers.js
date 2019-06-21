import {REMOVE_ITEM, LOAD_DATA, DISPLAY_REQUEST, MOVE_UP, MOVE_DOWN, EDIT, ADD_INPUT_VALUE, SAVE_NEW_NAME, CHANGE_CLASS_NAME} from './actions'

const initialState = {
  items: null,
  requested: false
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => action.index !== index)
      };
    case LOAD_DATA: 
      return {
      ...state,
        requested: true
    }
    case DISPLAY_REQUEST:
      return {
        ...state,
        items: action.data,
      };
    case MOVE_UP:
      const newItemsUp = [...state.items];
      const elemUp = newItemsUp.splice(action.index, 1);
      newItemsUp.splice(action.index -1, 0, elemUp[0]);
      return {
        ...state,
        items: newItemsUp
      };
      case MOVE_DOWN:
          const newItemsDown = [...state.items];
          const elemDown = newItemsDown.splice(action.index, 1);
          newItemsDown.splice(action.index + 1, 0, elemDown[0]);
          return {
            ...state,
            items: newItemsDown
          };
      
      case ADD_INPUT_VALUE:
        const newStateItems = state.items.map((item, index) => {
          if(index === action.index) {
            return {
             ... item,
              input: action.value
            } 
          } else {
            return item
          }
        });
        return {
          ...state,
          items: newStateItems
      }
      case SAVE_NEW_NAME:
        const newItems = state.items.map((item, index) => {
          if (index === action.index && item.input) {
            return {
               item: item.input,
               displayClass: 'none_active',
               input: ''
             } 
          } else {
            return {
              ...item,
              displayClass: 'none_active'
            }
          }
        });
        return {
          ...state,
          items: newItems
      }
    case CHANGE_CLASS_NAME:
      const newItemsChange = state.items.map((item, index) => {
        if(index === action.index) {
          return {
            ...item,
            displayClass: item.displayClass === 'active' ? 'none_active' : 'active'
          }
        } else {
          return {
            ...item,
            displayClass: 'none_active'
          }
        }
      });
      return {
        ...state,
        items: newItemsChange
      }
    default:
      return state;
  }
}
