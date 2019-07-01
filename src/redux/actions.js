export const LOAD_DATA = 'load_data';
export const DISPLAY_DATA = 'display_data';
export const REMOVE_AUTHOR = 'remove_author';
export const SELECT_ITEM = 'select_item';
export const MOVE_UP = 'move_up';
export const MOVE_DOWN = 'move_down';
export const REMOVE_SELECT ='remove_select';
export const ADD_VALUE_TO_INPUT = 'add_value_to_input';
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const SAVE_CHANGED_VALUE = 'save_canged_value';

export function loadData() {
  return (dispatch) => {
    dispatch({
      type: LOAD_DATA
    });

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const authorList = xhr.response;

      dispatch(displayData(authorList));
    })
    xhr.send();
  };
}

export function displayData(authorList) {
  return {
    type: DISPLAY_DATA,
    authorList
  };
}

export function removeAuthor(index) {
  return {
    type: REMOVE_AUTHOR,
    index
  }
}

export function selectItem(index) {
  return {
    type: SELECT_ITEM,
    index
  }
}

export function removeSelect() {
  return {
    type: REMOVE_SELECT
  }
}

export function moveUp() {
  return {
    type: MOVE_UP
  }
}

export function moveDown() {
  return {
    type: MOVE_DOWN
  }
}

export function addValueToInput(input) {
  return {
    type: ADD_VALUE_TO_INPUT,
    input
  }
}

export function changeInputValue(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export function saveChangedValue() {
  return {
    type: SAVE_CHANGED_VALUE,
  }
}
