import { connect } from 'react-redux';
import Author from './Author';
import {
  changeInputValue,
  chooseAuthorItem,
  editItem,
  removeChosenItem,
  updateItem,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    inputValue: state.inputValue,
    chosenItemIndex: state.chosenItemIndex,
    isEditItemNow: state.isEditItemNow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseAuthorItem: index => dispatch(chooseAuthorItem(index)),
    changeInputValue: event => dispatch(changeInputValue(event)),
    editItem: index => dispatch(editItem(index)),
    updateItem: event => {
      if (event.key === 'Enter') {
        dispatch(updateItem());
      }
    },
    removeChosenItem: index => dispatch(removeChosenItem(index)),
  };
}

const AuthorHandler = connect(mapStateToProps, mapDispatchToProps)(Author);

export default AuthorHandler;
