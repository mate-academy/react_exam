import { connect } from 'react-redux';
import Authors from './Authors';
import {
  load, moveDown, moveUp, removeItem, selectItem,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    authorRequested: state.requested,
    author: state.authorList,
    selectedItem: state.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: () => dispatch(load()),
    buttonUp: () => dispatch(moveUp()),
    buttonDown: () => dispatch(moveDown()),
    selected: index => dispatch(selectItem(index)),
    remove: () => dispatch(removeItem()),
  };
}

const AuthorsHandler = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsHandler;
