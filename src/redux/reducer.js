import { DELETE_AUTHOR, LOAD_AUTHORS, setLoaded, display, DISPLAY, SET_LOADED, ORDER, order, ADD_ORDER, REMOVE_ORDER } from './actions';

const initialState = {
    requestedData: false,
    renderItems: null,
    loadedData: null
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case LOAD_AUTHORS: {
            fetch("http://my-json-server.typicode.com/mate-academy/literary-blog/authors").then(data => data.json()).then(data => data.map((value, index) => {
                return { id: index + 1, name: value, order: index };
            })).then(data => {
                action.asyncDispatch(setLoaded(data));
                action.asyncDispatch(display(data));
                action.asyncDispatch(order());
            });

            return {
                ...state,
                requestedData: true
            }
        }

        case SET_LOADED: {
            return { ...state, loadedData: action.payload }
        }

        case DISPLAY: {
            return { ...state, renderItems: action.payload }
        }

        case ORDER: {
            let temp = [...state.loadedData];
            temp.sort((a, b) => {
                return a.order - b.order;
            });
            return { ...state, renderItems: temp }
        }

        case ADD_ORDER: {
            let found = state.renderItems.find(v => v.id === action.payload.id);
            let index = state.renderItems.indexOf(found);
            let renderItems = [...state.renderItems];

            if (found && (index > -1)) {
                if (renderItems.length - index >= 2) {
                    renderItems[index].order++;
                    renderItems[index + 1].order--;

                    let temp = renderItems[index];
                    renderItems[index] = renderItems[index + 1];
                    renderItems[index + 1] = temp;
                }
            }

            return { ...state, renderItems: renderItems }
        }

        case REMOVE_ORDER: {
            let found = state.renderItems.find(v => v.id === action.payload.id);
            let index = state.renderItems.indexOf(found);
            let renderItems = [...state.renderItems];
            if (found && (index > -1)) {
                if (index > 0) {
                    renderItems[index].order--;
                    renderItems[index - 1].order++;

                    let temp = renderItems[index];
                    renderItems[index] = renderItems[index - 1];
                    renderItems[index - 1] = temp;
                }
            }

            return { ...state, renderItems: renderItems }
        }

        case DELETE_AUTHOR: {
            return { ...state, renderItems: state.renderItems.filter(value => {
                return value.id != action.payload.id
            })}
        }

        default: {
            return state;
        }
    }


};

export default rootReducer;