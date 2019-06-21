import { connect } from 'react-redux';
import Authors from './Authors';
import { load, moveDown, moveUp, selectItem } from '../redux/actions';

function mapStateToProps(state) {
  return {
    authorRequested: state.requested,
    author: state.authorList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: () => dispatch(load()),
    buttonUp: () => dispatch(moveUp()),
    buttonDown: () => dispatch(moveDown()),
    selected: () => dispatch(selectItem()),
  };
}

const AuthorsHandler = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsHandler;
