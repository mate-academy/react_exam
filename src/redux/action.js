export const REMOVE_ITEM = 'remove_item';
export const LOAD_ITEMS = 'load_items';
export const MOVE_DOWN = 'move_down';
export const MOVE_UP = 'move_up';
export const SELECT_INDEX = 'select_index';
export const EDIT_ITEM = 'edit_item';
export const DISPLAY = 'display';
export const CHANGE_EDIT_MODE = 'change_edit_mode'

export function removeItemAction(title) {
  return {
    type: REMOVE_ITEM,
    title
  }
};

export function moveDownAction() {
  return {
    type: MOVE_DOWN
  };
};

export function changeEditModeAction(title) {
  return {
    type: CHANGE_EDIT_MODE,
    title
  }
}

export function moveUpAction() {
  return {
    type: MOVE_UP
  };
};

export function selectIndexAction(index) {
  return {
    type: SELECT_INDEX,
    index
  };
};

export function editItemAction(value) {
  return {
    type: EDIT_ITEM,
    value
  };
};

export function loadAction() {
  return (dispatch) => {
      dispatch({
          type: LOAD_ITEMS
      });

      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
          const items = xhr.response
          dispatch(display(items));
      });
      xhr.send();
  };
}

export function display(items) {
  return {
      type: DISPLAY,
      items
  }
}