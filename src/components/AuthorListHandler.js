import {moveDownAction, moveUpAction, editItemAction, loadAction, selectIndexAction, changeEditModeAction, removeItemAction} from '../redux/action';
import {connect} from "react-redux";
import AuthorList from "../components/AuthorList";

function mapStateToProps(state) {
  return {
    request: state.requested,
    list: state.listAuthor,
    index: state.indexAuthor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadItems: () => dispatch(loadAction()),
    liClicked: (index) => dispatch(selectIndexAction(index)),
    upAuthor: () => dispatch(moveUpAction()),
    downAuthor: () => dispatch(moveDownAction()),
    edit: (title) => dispatch(changeEditModeAction(title)),
    changeTitle: (value)  => dispatch(editItemAction(value)),
    remove: (title) => dispatch(removeItemAction(title))
  }
}

const AuthorListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorList)

export default AuthorListHandler;