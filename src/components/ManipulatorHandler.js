import { connect } from 'react-redux';
import Manipulator from './Manipulator';
import { removeAuthorItem, handleFocus } from '../redux/actions';

function mapDispatchToProps(dispatch) {
  return {
    onRemoveClick: authorId => dispatch(removeAuthorItem(authorId)),
    onSelectState: (authorId, selectedState) => dispatch(
      handleFocus({ authorId, selectedState })
    ),
  };
}

const ManipulatorHandler = connect(
  null,
  mapDispatchToProps
)(Manipulator);

export default ManipulatorHandler;
