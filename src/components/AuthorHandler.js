import Author from "./Author";
import { connect } from "react-redux";
import {
  selectAuthor,
  deletedAuthor,
  editAuthor,
  updateEditedName,
  cancelEditing,
  updateAuthor,
  moveAuthorUp,
  moveAuthorDown
} from "../redux/action";

function mapStateToProps(state, ownProps) {
  const isSelected = state.selectedIndex === ownProps.authorIndex;
  const editable = state.editMode && isSelected;
  return {
    author: ownProps.author,
    isSelected: isSelected,
    editable: editable,
    editedName: editable ? state.editedName : null,
    selectedIndex: state.selectedIndex,
    disabled: ownProps.allAuthor
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    selectAuthor: () => dispatch(selectAuthor(ownProps.authorIndex)),
    deletedAuthor: () => dispatch(deletedAuthor(ownProps.authorIndex)),
    editAuthor: () => dispatch(editAuthor()),
    updateEditedName: editedName => dispatch(updateEditedName(editedName)),
    cancelEditing: () => dispatch(cancelEditing()),
    updateAuthor: () => dispatch(updateAuthor()),
    moveAuthorUp: () => dispatch(moveAuthorUp()),
    moveAuthorDown: () => dispatch(moveAuthorDown())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);
