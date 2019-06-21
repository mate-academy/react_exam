import {connect} from 'react-redux';
import {displayButtons, loadData, removeItem, moveUp, moveDown, edit, addInputValue, saveNewName, changeClassName} from '../redux/actions';
import AuthorList from './AuthorList';

function mapStateToProps(state) {
  return {
    items: state.items,
    displayClass: state.dicplayClass,
    editItems: state.editItems,
    requested: state.requested,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispayButtons: () =>  dispatch(displayButtons()),
    loadData: () => dispatch(loadData()),
    removeItem: (index) => dispatch(removeItem(index)),
    moveUp: (index) => dispatch(moveUp(index)),
    moveDown: (index) => dispatch(moveDown(index)),
    edit: (index) => dispatch(edit(index)),
    updateInput: (value, index) => dispatch(addInputValue(value, index)),
    save: (index) => dispatch(saveNewName(index)),
    changeClass: (index) => dispatch(changeClassName(index))
  }
}

const AuthorListHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorList);

export default AuthorListHandler;
