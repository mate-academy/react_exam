import { connect } from 'react-redux';
import AuthorList from './AuthorsList';
import {
  moveDown, moveUp, deleteItem, selectItem,
  clearSelection, load, editProgress,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    requested: state.requested,
    authors: state.authors,
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load()),
    moveDown: () => dispatch(moveDown()),
    moveUp: () => dispatch(moveUp()),
    deleteItem: index => dispatch(deleteItem(index)),
    selectItem: index => dispatch(selectItem(index)),
    clearSelection: () => dispatch(clearSelection()),
    editing: (inputValue, index) => dispatch(editProgress(inputValue, index)),
  };
}

const ListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorList);

export default ListHandler;
