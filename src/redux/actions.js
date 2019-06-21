export const EDIT_ITEM = 'edit';
export const REMOVE_ITEM = 'delete';
export const LOAD = 'load';
export const DISPLAY = 'display';
export const SELECT_ITEM = 'select_item';
export const CLEAR_SELECTION = 'clear_selection';
export const MOVE_UP = 'move_up';
export const MOVE_DOWN = 'move_down';

export function editItem(index) {
  return {
    type: EDIT_ITEM,
    payload: index,
  };
}

export function removeItem(index) {
  return {
    type: REMOVE_ITEM,
    payload: index,
  };
}

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD,
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const listOfAuthors = xhr.response;
      dispatch(display(listOfAuthors));
    });
    xhr.send();
  };
}

export function display(list) {
  return {
    type: DISPLAY,
    authorList: list,
  };
}

export function selectItem(index) {
  return {
    type: SELECT_ITEM,
    payload: index,
  };
}

export function moveUp(index) {
  return {
    type: MOVE_UP,
  };
}

export function moveDown(index) {
  return {
    type: MOVE_DOWN,
  };
}
