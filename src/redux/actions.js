export const LOAD = 'load';
export const DISPLAY = 'display';
export const SELECT = 'authors_select';
export const MOVE_SELECTION_UP = 'move_selection_up';
export const MOVE_SELECTION_DOWN = 'move_selection_down';
export const EDIT = 'authors_edit';
export const DELETE = 'authors_delete';
export const APPLY_EDIT = 'authors_apply_edit';
export const CANCEL_EDIT = 'authors_cancel_edit';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '//my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        const authorsList = xhr.response;
        dispatch(display(authorsList));
    });
    xhr.send();
  };
}

export function display(authorsList) {
  return {
    type: DISPLAY,
    authorsList
  };
}

export function getSelectAction(index) {
  return {
    type: SELECT,
    index
  };
}

export function moveSelectionUp()  {
  return {
    type: MOVE_SELECTION_UP,
  };
};

export function moveSelectionDown() {
  return {
    type: MOVE_SELECTION_DOWN,
  };
};
export function getEditAction() {
  return {
    type: EDIT
  };
}

export function getDeleteAction() {
  return {
    type: DELETE
  };
}

export function getApplyAction(inputValue) {
  return {
    type: APPLY_EDIT,
    inputValue
  };
}

export function getCancelAction() {
  return {
    type: CANCEL_EDIT,
  };
}
