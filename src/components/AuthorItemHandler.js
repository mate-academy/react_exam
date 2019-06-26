import {connect} from "react-redux";
import AuthorItem from './AuthorItem'
import {
  cancelEditing,
  deleteItem,
  editItem,
  moveDown,
  moveUp,
  selectItem,
  updateEditedItem,
  updateItem
} from "../redux/actions";

function mapStateToProps(state, ownProps) {
  const selected = state.selectedItemIndex === ownProps.authorIndex;
  const editable = state.editing && state.selectedItemIndex === ownProps.authorIndex
  return {
    author: ownProps.author,
    authorIndex: ownProps.authorIndex,
    selected: selected,
    editable: editable,
    editedName: editable ? state.editedName : null
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectItem: () => dispatch(selectItem(ownProps.authorIndex)),
    deleteItem: () => dispatch(deleteItem(ownProps.authorIndex)),
    editItem: () => dispatch(editItem()),
    updateEditedItem: editedName => dispatch(updateEditedItem(editedName)),
    cancelEditing: () => dispatch(cancelEditing()),
    updateItem: () => dispatch(updateItem()),
    moveUp: () => dispatch(moveUp()),
    moveDown: () => dispatch(moveDown())
  }
}

const AuthorItemHandler = connect(mapStateToProps,mapDispatchToProps)(AuthorItem);


export default AuthorItemHandler;
