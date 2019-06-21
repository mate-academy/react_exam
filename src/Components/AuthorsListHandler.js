import { connect } from 'react-redux';
import { load, exitFromEditing } from '../redux/actions';
import AuthorsList from './AuthorsList';

function mapStateToProps(state) {
  return {
    dataRequested: state.requested,
    authors: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: () => dispatch(load()),
    exitFromEditing: () => dispatch(exitFromEditing())
  }
}

const AuthorsListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorsList);

export default AuthorsListHandler;
