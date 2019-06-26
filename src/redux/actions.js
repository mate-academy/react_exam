export const LOAD = 'load';
export const DISPLAY = 'display';
export const SELECT_ITEM = 'select_item';
export const DESELECT_ITEM = 'deselect_item';
export const DELETE_ITEM = 'delete_item';
export const EDIT_ITEM = 'edit_item';
export const UPDATE_EDITED_ITEM = 'update_edited_item';
export const CANCEL_EDITING = 'cancel_editing';
export const UPDATE_ITEM = 'update_item';
export const MOVE_UP = 'move_up';
export const MOVE_DOWN = 'move_down';



export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const authors = xhr.response;
      dispatch(display(authors));
    });
    xhr.send();
  };
}

export function display(authors) {
  return {
    type: DISPLAY,
    authors
  };
}

export function selectItem(selectedItemIndex) {
  return {
    type: SELECT_ITEM,
    selectedItemIndex
  };
}

export function deselectItem() {
  return {
    type: DESELECT_ITEM
  };
}

export function deleteItem(itemIndex) {
  return {
    type: DELETE_ITEM,
    itemIndex
  };
}

export function editItem() {
  return {
    type: EDIT_ITEM
  };
}

export function updateEditedItem(editedName) {
  return {
    type: UPDATE_EDITED_ITEM,
    editedName
  }
}
export function cancelEditing() {
  return {
    type: CANCEL_EDITING
  };
}

export function updateItem() {
  return {
    type: UPDATE_ITEM
  };
}

export function moveUp() {
  return {
    type: MOVE_UP
  };
}

export function moveDown() {
  return {
    type: MOVE_DOWN
  };
}
