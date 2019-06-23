import createReducer from './createReducer';
import {
  CHANGE_NAME_START,
  CHANGE_NAME_END,
  DELETE_NAME,
  UP_NAME_IN_LIST,
  DOWN_NAME_IN_LIST,
  MAKE_REQUEST,
} from './actions';

const initialState = {
  nameList: null,
  loaded: false,
  selectedItem: null,
  inputValue: null
};

const actionMap = {
  [MAKE_REQUEST]: (state, action) => {
    return {
      ...state,
      nameList: action.payload
    }
  },

  [DELETE_NAME]: (state, action) => {
    const newNameList = [...state.nameList];
    newNameList.splice(action.payload, 1);
    return {
      ...state,
      nameList: newNameList,
      selectedItem: null
    };
  },

  [CHANGE_NAME_START]: (state, action) => {
    return {
      ...state,
      selectedItem: action.payload
    };
  },

  [CHANGE_NAME_END]: (state, action) => {
    const newNameList = [...state.nameList];
    newNameList[state.selectedItem] = action.payload;
    return {
      ...state,
      nameList: newNameList,
      selectedItem: null,
      inputValue: null
    };
  },

  [UP_NAME_IN_LIST]: (state, action) => {
    const newNameList = [...state.nameList];
    const removedName = newNameList.splice(action.payload, 1);
    newNameList.splice(action.payload - 1, 0, removedName)
    return {
      ...state,
      selectedItem: state.selectedItem - 1,
      nameList: newNameList
    }
  },

  [DOWN_NAME_IN_LIST]: (state, action) => {
    const newNameList = [...state.nameList];
    const removedName = newNameList.splice(action.payload, 1);
    newNameList.splice(action.payload + 1, 0, removedName)
    return {
      ...state,
      selectedItem: state.selectedItem + 1,
      nameList: newNameList
    }
  },
}

export const getNextState = createReducer(actionMap, initialState);
