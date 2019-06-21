import { connect } from 'react-redux';
import { removeAuthor,
         clickEdit,
         editAuthor,
         clickReplace,
         replaceAuthor } from '../redux/actions';
import Author from './Author';

function mapStateToProps(state, ownProps) {
  return {
    edition: state.edit,
    moving: state.move,
    index: state.index,
    name: ownProps.author,
    id: ownProps.index
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeAuthor: (index) => dispatch(removeAuthor(index)),
    clickEdit: (id) => dispatch(clickEdit(id)),
    editAuthor: (inputValue) => dispatch(editAuthor(inputValue)),
    clickReplace: (id) => dispatch(clickReplace(id)),
    replaceAuthor: (newPosition) => dispatch(replaceAuthor(newPosition))
  }
}

const AuthorHandler = connect(mapStateToProps, mapDispatchToProps)(Author);

export default AuthorHandler;
