export const LOAD_DATA = 'load_data';
export const FILL_DATA = 'fill_data';
export const REMOVE_AUTHOR = 'remove_author';
export const CLICK_EDIT = 'click_edit';
export const EDIT_AUTHOR = 'edit_author';
export const CLICK_REPLACE = 'click_replace';
export const REPLACE_AUTHOR = 'replace_author';
export const EXIT_FROM_EDITING = 'exit_from_editing';

export function load() {
  return dispatch => {
    dispatch({
        type: LOAD_DATA
    });

    fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/authors')
    .then(res => res.json())
    .then((authors) => {
      dispatch(fillData(authors));
    })
  }
}

export function fillData(data) {
  return {
    type: FILL_DATA,
    data
  }
}

export function removeAuthor(index) {
  return {
    type: REMOVE_AUTHOR,
    index
  }
}

export function clickEdit(id) {
  return {
    type: CLICK_EDIT,
    id
  }
}

export function editAuthor(inputValue) {
  return {
    type: EDIT_AUTHOR,
    inputValue
  }
}

export function clickReplace(id) {
  return {
    type: CLICK_REPLACE,
    id
  }
}

export function replaceAuthor(newPosition) {
  return {
    type: REPLACE_AUTHOR,
    newPosition
  }
}

export function exitFromEditing() {
  return {
    type: EXIT_FROM_EDITING
  }
}
