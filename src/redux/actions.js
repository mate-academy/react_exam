export const LOAD = 'load';
export const DISPLAY = 'display';
export const MOVE_UP = 'move_up';
export const MOVE_DOWN = 'move_down';
export const ORDER = 'order';
export const CHOOSE_ITEM = 'choose_item';
export const CHANGE_ITEM = 'change_item';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD,
    });

    function loadUrl(url) {
      return fetch(url)
        .then(response => response.json());
    }

    loadUrl('http://my-json-server.typicode.com/mate-academy/literary-blog/authors')
      .then(data => {
        const authors = data;
        dispatch(display(authors));
      });
  };
}

export function display(data) {
  return {
    type: DISPLAY,
    data,
  };
}

export function order(index) {
  return {
    type: ORDER,
    index,
  };
}

Array.prototype.move = function (index, step) {
  const next = this[index + step];
  this[index + step] = this[index];
  this[index] = next;
  return this
}

export function moveUp(data, index) {
  const newData = [...data];
  newData.move(index, -1);
  return {
    type: MOVE_UP,
    newData,
    index: index - 1,
  };
}

export function moveDown(data, index) {
  const newData = [...data];
  newData.move(index, 1);
  return {
    type: MOVE_DOWN,
    newData,
    index: index + 1,
  };
}

export function chooseItem(item) {
  return {
    type: CHOOSE_ITEM,
    item,
  };
}

export function changeItem(data, value, editItem) {
  const newData = [...data];
  return {
    type: CHANGE_ITEM,
    data: newData.map((item) => {
      if (item === editItem) {
        return (item = value);
      }
      return item;
    }).filter(item => item !== ''),
    item: '',
  };
}
