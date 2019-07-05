import Author from "./Author";
import {connect} from "react-redux";
import {getSelectAction, getApplyAction, getCancelAction} from "../redux/actions";

function mapStateToProps(state) {
  return {
    authorsList: state.authorsList,
    selectedIndex: state.selectedIndex,
    inEdit: state.inEdit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authorClick: i => dispatch(getSelectAction(i)),
    inputHandler: (event)=> {
      if (event.key === 'Enter') {
        dispatch(getApplyAction(event.target.value));
      } else if (event.key === 'Escape') {
        dispatch(getCancelAction());
      }
   },
  };
}

const AuthorHandler = connect(mapStateToProps, mapDispatchToProps)(Author);

export default AuthorHandler;
