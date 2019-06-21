export const REQUESTED = 'requested';
export const DISPLAY_ITEMS = 'displayAuthors';
export const CHOOSE_ITEM = 'chooseAuthor';
export const MOVE_UP_ITEM = 'moveUp';
export const MOVE_DOWN_ITEM = 'MoveDown';
export const UPDATE_ITEM = 'updateItem';
export const EDIT_ITEM = 'editItem';
export const CHANGE_INPUT_VALUE = 'changeInputValue';
export const REMOVE_ITEM = 'removeItem';

export function loadItems() {
  return (dispatch) => {
    dispatch({
      type: 'requested',
    });

    const xhrAuthors = new XMLHttpRequest();

    xhrAuthors.open('GET',
      'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');

    xhrAuthors.addEventListener('load', () => {
      const payload = {
        loadedClothes: true,
        authors: JSON.parse(xhrAuthors.response),
      };

      dispatch(displayAuthors(payload));
    });

    xhrAuthors.send();
  };
}

export const displayAuthors = payload => ({
  type: DISPLAY_ITEMS,
  payload,
});

export const chooseAuthorItem = payload => ({
  type: CHOOSE_ITEM,
  payload,
});

export const moveUpItem = () => ({
  type: MOVE_UP_ITEM,
});

export const moveDownItem = () => ({
  type: MOVE_DOWN_ITEM,
});

export const editItem = payload => ({
  type: EDIT_ITEM,
  payload,
});

export const updateItem = payload => ({
  type: UPDATE_ITEM,
  payload,
});

export const changeInputValue = payload => ({
  type: CHANGE_INPUT_VALUE,
  payload,
});

export const removeChosenItem = payload => ({
  type: REMOVE_ITEM,
  payload,
});
