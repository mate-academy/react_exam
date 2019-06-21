import {LOAD_ITEMS, MOVE_DOWN, MOVE_UP, SELECT_INDEX, EDIT_ITEM, DISPLAY, CHANGE_EDIT_MODE, REMOVE_ITEM} from './action';


const initalState = {
  listAuthor: [],
  indexAuthor: null,
  requested: false,
};

export function AuthorApp(state = initalState, action) {
  switch(action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        requested: true
      };
    case DISPLAY: {
      return {
        ...state,
        listAuthor: action.items.map(item => {
          return {
            title: item,
            edit: false,
          };
        }),
      };
    }
    case MOVE_DOWN:
      const authors = [...state.listAuthor];
      const selectedIndex = state.indexAuthor;
      const newAuthors = [...authors];
      const selectedAuthor = newAuthors.splice(selectedIndex, 1);
      newAuthors.splice(selectedIndex + 1, 0, selectedAuthor[0]);
      return {
        ...state,
        listAuthor: newAuthors,
        indexAuthor: selectedIndex + 1
      }
    case MOVE_UP:
        const AuthorsUp = [...state.listAuthor];
        const selectedIndexUp = state.indexAuthor;
  
        const newAuthorsUp = [...AuthorsUp];
        const [selectedAuthorUp] = newAuthorsUp.splice(selectedIndexUp, 1);
        newAuthorsUp.splice(selectedIndexUp - 1, 0, selectedAuthorUp);
        return {
          ...state,
          listAuthor: newAuthorsUp,
          indexAuthor: selectedIndexUp - 1
        };
    case SELECT_INDEX:
      return {
        ...state,
        indexAuthor: action.index
      }
    case EDIT_ITEM: 
      return {
        ...state,
        listAuthor: state.listAuthor.map((item, index) => {
          if (index === state.indexAuthor) {
            return {
              title: action.value,
              edit: false,
            };
          } else {
            return item;
          };
        })
      };
    case CHANGE_EDIT_MODE:
      return {
        ...state,
        listAuthor: state.listAuthor.map((item) => {
          if (item.title === action.title) {
            return {
              ...item,
              edit: true,
            };
          } else {
            return item;
          };
        })
      };
    case REMOVE_ITEM:
      return {
        ...state,
        listAuthor: state.listAuthor.filter(item => item.title !== action.title)
      };
    default:
      return state;
  };
};

