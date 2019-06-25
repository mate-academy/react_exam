export const LOAD_BUTTON_CLICKED = 'load_authors_click';
export const DISPLAY_AUTHOR_ITEMS = 'display_author_items';
export const HANDLE_AUTHOR_ITEM_HOVERING = 'handle_author_item_hovering';
export const REMOVE_AUTHOR_ITEM = 'remove_author_item';
export const PLACE_AUTHOR_ITEM = 'place_author_item';
export const HANDLE_FOCUS_ON_AUTHOR_ITEM = 'handle_focus_on_author_item';
export const UPDATE_INPUT_VALUE = 'update_input_value';
export const HANDLE_ENTER_NEW_NAME = 'handle_input_new_name';
export const CANCEL_INPUTTING = 'cancel_inputting';

export const AUTHOR_ITEM_STATES = {
  RENAMING: 'renaming',
  MOVING: 'moving',
};

export const AUTHOR_DISPLACE_MARKERS = {
  ABOVE: 'above',
  BELOW: 'below',
};

export function loadingAuthorsList() {
  return {
    type: LOAD_BUTTON_CLICKED,
  };
}

export function displayAuthors(payload) {
  return {
    type: DISPLAY_AUTHOR_ITEMS,
    payload,
  };
}

export function handleAuthorHovering(payload) {
  return {
    type: HANDLE_AUTHOR_ITEM_HOVERING,
    payload,
  };
}

export function removeAuthorItem(payload) {
  return {
    type: REMOVE_AUTHOR_ITEM,
    payload,
  };
}

export function displaceAuthorItem() {
  return {
    type: PLACE_AUTHOR_ITEM,
  };
}

export function handleRenaming(payload) {
  return {
    type: HANDLE_ENTER_NEW_NAME,
    payload,
  };
}

export function cancelRenaming() {
  return {
    type: CANCEL_INPUTTING,
  };
}

export function handleFocus(payload) {
  return {
    type: HANDLE_FOCUS_ON_AUTHOR_ITEM,
    payload,
  };
}

export function updateInputValue(payload) {
  return {
    type: UPDATE_INPUT_VALUE,
    payload,
  };
}
