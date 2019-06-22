export const EDIT_AUTHOR = "edit_author";
export const DELETE_AUTHOR = "delete_author";
export const CHANGE_ORDER = "change_order";
export const LOAD_AUTHORS = "load_authors";
export const SET_LOADED = "set_loaded";
export const DISPLAY = "display";
export const ORDER = "order";
export const ADD_ORDER = "add_order"; 
export const REMOVE_ORDER = "remove_order";
export const START_EDITING_AUTHOR = "start_edit";
export const STOP_EDITING_AUTHOR = "stop_edit";

export function startEditingAuthor(payload) {
    return {
        type: START_EDITING_AUTHOR,
        payload
    }
}

export function stopEditingAuthor(payload) {
    return {
        type: STOP_EDITING_AUTHOR,
        payload
    }
}

export function changeOrder(id) {
    return {
        type: CHANGE_ORDER,
        id
    }
}

export function removeAuthor(payload) {
    return {
        type: DELETE_AUTHOR,
        payload
    }
}

export function editAuthor(payload) {
    return {
        type: EDIT_AUTHOR,
        payload
    }
}

export function loadAuthors() {
    return {
        type: LOAD_AUTHORS
    }
}

export function setLoaded(payload) {
    return {
        type: SET_LOADED,
        payload
    }
}

export function display(payload) {
    return {
        type: DISPLAY,
        payload
    }
}

export function order() {
    return {
        type: ORDER
    }
} 

export function addOrder(payload) {
    return {
        type: ADD_ORDER,
        payload
    }
}

export function removeOrder(payload) {
    return {
        type: REMOVE_ORDER,
        payload
    }
}