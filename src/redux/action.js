export const LOAD = 'load';
export const DISPLAY = 'display';
export const SELECT_AUTHOR = 'select_author';
export const DESELECT_AUTHOR = 'deselect_author';
export const DELETE_AUTHOR = 'delete_author';
export const EDIT_AUTHOR = 'edit_author';
export const CANCEL_EDITING = 'cancel_editing';
export const UPDATE_AUTHOR = 'update_author';
export const UPDATE_EDITED_NAME = 'update_edited_name';
export const MOVE_AUTHOR_UP = 'move_author_up';
export const MOVE_AUTHOR_DOWN = 'move_author_down';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });
    fetch('https://my-json-server.typicode.com/mate-academy/literary-blog/authors')
      .then(date => date.json())
      .then((data) => {
        dispatch(display(data));
      })
    };
  }

export function display(authors) {
  setInterval(() => {}, 2000)
  return {
    type: DISPLAY,
    authors
  };
}

export function selectAuthor(selectedIndex) {
  return {
    type: SELECT_AUTHOR,
    selectedIndex
  };
}

export function deselectAuthor() {
  return {
    type: DESELECT_AUTHOR
  };
}

export function deletedAuthor(authorIndex) {
  return {
    type: DELETE_AUTHOR,
    authorIndex
  };
}

export function editAuthor() {
  return {
    type: EDIT_AUTHOR
  };
}

export function updateEditedName(editedName) {
  return {
    type: UPDATE_EDITED_NAME,
    editedName
  };
}

export function cancelEditing() {
  return {
    type: CANCEL_EDITING
  };
}

export function updateAuthor() {
  return {
    type: UPDATE_AUTHOR
  };
}

export function moveAuthorUp() {
  return {
    type: MOVE_AUTHOR_UP
  };
}

export function moveAuthorDown() {
  return {
    type: MOVE_AUTHOR_DOWN
  };
}
