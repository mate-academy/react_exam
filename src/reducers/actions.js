export const LOAD_ITEMS= 'LOAD_ITEMS';
export const DISPLAY_ITEMS = 'DISPLAY_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const MOVE_SELECTION_UP = 'MOVE_SELECTION_UP';
export const MOVE_SELECTION_DOWN = 'MOVE_SELECTION_DOWN';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const DELETE_SELECTION = 'DELETE_SELECTION';
export const INPUT_NEW_CONTENT = 'INPUT_NEW_CONTENT';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ITEMS
    });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.addEventListener('load', () => {
      const title = JSON.parse(xhr.response);
      dispatch(display(title));
    });
    xhr.send();
  };
}

export function display(title) {
  return {
    type: DISPLAY_ITEMS,
    title: title
  };
}

export function selectItem(itemId) {
  console.log(itemId);
  return {
    type: SELECT_ITEM,
    itemId
  };
}

export function moveSelectionUp() {
  return {
    type: MOVE_SELECTION_UP
  };
}

export function moveSelectionDown() {
  return {
    type: MOVE_SELECTION_DOWN
  };
}

export function clearSelection() {
  return {
    type: CLEAR_SELECTION
  }
}

export function deleteSelection(itemId) {
  return {
    type: DELETE_SELECTION,
    itemId
  }
}

export function inputNewContent(event) {
  let newName = event.currentTarget.value;
  return {
    type: INPUT_NEW_CONTENT,
    newItem: newName
  }
}
