import AuthorList from "./AuthorList";
import {connect} from "react-redux";
import {deselectItem, load} from "../redux/actions";

function mapStateToProps(state){
  return {
    authors: state.authors,
    selectedItemIndex: state.selectedItemIndex,
    editedName: state.editedName,
    editing: state.editing,
    requested: state.requested
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load()),
    deselectItem: () => dispatch(deselectItem())
  }
}
const AuthorListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorList)

export default AuthorListHandler;