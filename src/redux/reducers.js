import displaceElement from '../lib/utils';
import {
  DISPLAY_AUTHOR_ITEMS,
  HANDLE_AUTHOR_ITEM_HOVERING,
  HANDLE_FOCUS_ON_AUTHOR_ITEM,
  LOAD_BUTTON_CLICKED,
  PLACE_AUTHOR_ITEM,
  REMOVE_AUTHOR_ITEM,
  HANDLE_ENTER_NEW_NAME,
  UPDATE_INPUT_VALUE,
  CANCEL_INPUTTING,
} from './actions';

const actionHandlers = {
  [LOAD_BUTTON_CLICKED]: previousState => ({
    ...previousState,
    loading: true,
  }),
  [DISPLAY_AUTHOR_ITEMS]: (previousState, { payload: loadedAuthorsList }) => {
    const authorsRenderList = [];
    const authorsById = loadedAuthorsList.reduce((obj, authorName, id) => {
      authorsRenderList.push(id.toString());
      return { ...obj, [id]: { authorName, inputValue: authorName } };
    }, {});

    return {
      ...previousState,
      authorsById,
      authorsRenderList,
    };
  },
  [HANDLE_AUTHOR_ITEM_HOVERING]: (previousState, { payload: authorId }) => ({
    ...previousState,
    hoveredAuthorId: authorId,
  }),
  [UPDATE_INPUT_VALUE]: (previousState, { payload: newValue }) => {
    const { authorsById, focusedAuthorId } = previousState;
    const { authorName } = authorsById[focusedAuthorId];

    return {
      ...previousState,
      authorsById: {
        ...authorsById,
        [previousState.focusedAuthorId]: {
          authorName,
          inputValue: newValue,
        },
      },
    };
  },
  [HANDLE_ENTER_NEW_NAME]: (previousState, { payload: newName }) => {
    if (newName === '') {
      return previousState;
    }

    return {
      ...previousState,
      authorsById: {
        ...previousState.authorsById,
        [previousState.focusedAuthorId]: {
          authorName: newName,
          inputValue: newName,
        },
      },
      focusedAuthorId: null,
    };
  },
  [CANCEL_INPUTTING]: (previousState) => {
    const { authorsById, focusedAuthorId } = previousState;
    const { authorName } = authorsById[focusedAuthorId];

    return {
      ...previousState,
      authorsById: {
        ...authorsById,
        [previousState.focusedAuthorId]: {
          authorName,
          inputValue: authorName,
        },
      },
      focusedAuthorId: null,
      focusedItemState: null,
    };
  },
  [PLACE_AUTHOR_ITEM]: (previousState) => {
    const {
      authorsRenderList,
      hoveredAuthorId,
      focusedAuthorId,
    } = previousState;
    const shiftingIndex = authorsRenderList.indexOf(focusedAuthorId);
    const shiftToIndex = authorsRenderList.indexOf(hoveredAuthorId);

    return {
      ...previousState,
      authorsRenderList: displaceElement(
        authorsRenderList,
        shiftingIndex,
        shiftToIndex,
      ),
      focusedAuthorId: null,
      focusedItemState: null,
      // hoveredAuthorId: previousState.hoveredAuthorId,
    };
  },
  [HANDLE_FOCUS_ON_AUTHOR_ITEM]: (previousState, { payload }) => ({
    ...previousState,
    focusedAuthorId: payload.authorId,
    focusedItemState: payload.selectedState,
  }),
  [REMOVE_AUTHOR_ITEM]: (previousState, { payload: authorIdToRemove }) => {
    delete previousState.authorsById[authorIdToRemove];

    return {
      ...previousState,
      authorsById: { ...previousState.authorsById },
      authorsRenderList: previousState.authorsRenderList.reduce(
        (newList, currItemId) => {
          if (currItemId !== authorIdToRemove) {
            return [...newList, currItemId];
          }
          return newList;
        },
        [],
      ),
    };
  },
};

const initialStore = {
  loading: false,
  authorsRenderList: null,
  authorsById: null,
  focusedAuthorId: null,
  focusedItemState: null,
  hoveredAuthorId: null,
};

export default function reducer(previousState = initialStore, action) {
  return actionHandlers[action.type]
    ? actionHandlers[action.type](previousState, action)
    : previousState;
}
