export const LOAD = 'load';
export const DISPLAY = 'display';
export const EDIT_LAUNCH = 'edit in progress';
export const EDIT_COMPLETED = 'edited';
export const DELETE = 'delete';
export const MOVE_UP = 'move up';
export const MOVE_DOWN = 'move down';
export const SELECT_ITEM = 'select item';
export const CLEAR_SELECT = 'clear select';
export const EDIT_IN_PROGRESS = 'edit in progress';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD,
    });
    const xhr = new XMLHttpRequest();
    // eslint-disable-next-line max-len
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const authorList = xhr.response;
      dispatch(display(authorList));
    });
    xhr.send();
  };
}

export function display(authors) {
  return {
    type: DISPLAY,
    authors,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE,
    index,
  };
}

export function selectItem(index) {
  return {
    type: SELECT_ITEM,
    index,
  };
}

export function clearSelection() {
  return {
    type: CLEAR_SELECT,
  };
}

export function moveDown() {
  return {
    type: MOVE_DOWN,
  };
}

export function moveUp() {
  return {
    type: MOVE_UP,
  };
}

export function startEdit() {
  return {
    type: EDIT_LAUNCH,
  };
}

export function editComplete() {
  return {
    type: EDIT_COMPLETED,
  };
}

export function editProgress(inputValue, index) {
  return {
    type: EDIT_IN_PROGRESS,
    inputValue,
    index,
  };
}
