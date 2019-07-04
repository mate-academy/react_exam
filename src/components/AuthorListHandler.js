import AuthorList from "./AuthorList";
import { connect } from 'react-redux';
import { load, deselectAuthor } from "../redux/action";

function mapStateToProps(state) {
  return {
    authors: state.authors,
    selectedIndex: state.selectedIndex,
    editMode: state.editMode,
    editedName: state.editedName,
    requested: state.requested
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load()),
    deselectAuthor: () => dispatch(deselectAuthor())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList);
