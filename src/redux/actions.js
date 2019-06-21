export const REMOVE_ITEM = 'remove_item';
export const LOAD_DATA = 'load_data';
export const DISPLAY_BUTTONS = 'display_buttons';
export const DISPLAY_REQUEST = 'display_request';
export const MOVE_UP = 'move_up';
export const MOVE_DOWN = 'move_down';
export const EDIT = 'edit';
export const ADD_INPUT_VALUE = 'add_input_value';
export const SAVE_NEW_NAME = 'save_new_name';
export const CHANGE_CLASS_NAME = 'change_class_name';

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    index
  }
}

export function loadData() {
  return (dispatch) => {
    dispatch({
      type: LOAD_DATA
    });
        
    const request = new XMLHttpRequest();
    request.open('GET', ` http://my-json-server.typicode.com/mate-academy/literary-blog/authors`);
    request.addEventListener('load', () => {
      const items = JSON.parse(request.response);
      const finalData = items.map(item => {
        return {
          item: item,
          displayClass: 'none_active',
          input: item,
        }
      });
        
          dispatch(displayRequest(finalData));
      });
      request.send();
  }
}

export function displayButtons(index) {
  return {
    type: DISPLAY_BUTTONS,
    index
  }
}

export function displayRequest(data) {
  return {
    type: DISPLAY_REQUEST,
    data
  }
}

export function moveUp(index) {
  return {
    type: MOVE_UP,
    index
  }
}

export function moveDown(index) {
  return {
    type: MOVE_DOWN,
    index
  }
}

export function edit(index) {
  return {
    type: EDIT,
    index
  }
}

export function addInputValue(value, index) {
  return {
    type: ADD_INPUT_VALUE,
    value,
    index
  }
}

export function saveNewName(index) {
  return {
    type: SAVE_NEW_NAME,
    index
  }
}

export function changeClassName(index) {
  return {
    type: CHANGE_CLASS_NAME,
    index
  }
}
