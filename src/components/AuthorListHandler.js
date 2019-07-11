import { connect } from 'react-redux';
import { AuthorList } from './AuthorList';
import { 
  loadData,
  removeSelect,
  moveUp,
  moveDown
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    index: state.selectedIndex,
    authorsRequested: state.requested,
    authorList: state.authorList,
    input: state.input
  }
}

function mapDispatchToProps(dispatch) {
  
  return {
    buttonClicked: () => dispatch(loadData()),
    moveUp: index => dispatch(moveUp(index)),
    moveDown: index => dispatch(moveDown(index)),
    removeSelect: () => dispatch(removeSelect()),
  };
}

export const AuthorListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorList);
