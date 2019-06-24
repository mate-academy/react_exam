export const CHANGE_NAME_START = 'changeNameStart';
export const CHANGE_NAME_END = 'changeNameEnd'
export const DELETE_NAME = 'deleteName';
export const UP_NAME_IN_LIST = 'upNameInList';
export const DOWN_NAME_IN_LIST = 'downNameInList';
export const MAKE_REQUEST = 'makeRequest';

export function request() {
  return dispatch => {
    fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/authors')
      .then(response => response.json())
      .then(authors => {
        dispatch({
          type: MAKE_REQUEST,
          payload: authors
        });
      })
  }
}

export function deleteName(index) {
  return {
    type: DELETE_NAME,
    payload: index,
  };
}

export function changeNameStart(index) {
  return {
    type: CHANGE_NAME_START,
    payload: index,
  };
}

export function changeNameEnd(value) {
  return {
    type: CHANGE_NAME_END,
    payload: value,
  };
}

export function upNameInList(index) {
  return {
    type: UP_NAME_IN_LIST,
    payload: index
  }
}

export function downNameInList(index) {
  return {
    type: DOWN_NAME_IN_LIST,
    payload: index
  }
}
