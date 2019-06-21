export const LOAD = 'LOAD';
export const DISPLAY = 'DISPLAY';
export const SELECTED = 'SELECTED';
export const MOVE_UP = 'MOVE_UP';
export const MOVE_DOWN = 'MOVE_DOWN';
export const REMOVE = 'REMOVE';
export const RENAMED = 'RENAMED';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors')
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const names = xhr.response;
      dispatch(display(names));
    });
    xhr.send();
  };
}

export function display(names) {
  return {
    type: DISPLAY,
    names
  };
}

export function selected(index) {
  return {
    type: SELECTED,
    index
  };
};

export function moveUp(names, index) {
  return {
    type: MOVE_UP,
    names,
    index
  };
}

export function moveDown(names, index) {
  return {
    type: MOVE_DOWN,
    names,
    index
  };
}

export function remove(names) {
  return {
    type: REMOVE,
    names
  };
}

export function renamed(names) {
  return {
    type: RENAMED,
    names
  }
}
