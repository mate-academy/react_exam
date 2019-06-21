import { connect } from 'react-redux';
import { AuthorList } from './AuthorList';
import { 
  loadData,
  removeAuthor,
  selectItem,
  removeSelect,
  moveUp,
  moveDown,
  addValueToInput,
  changeInputValue
} from '../redux/actions';

function mapStateToProps(state) {
  console.log(state.input)
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
    removeAuthor: (index) => dispatch(removeAuthor(index)),
    itemClicked: index => dispatch(selectItem(index)),
    moveUp: index => dispatch(moveUp(index)),
    moveDown: index => dispatch(moveDown(index)),
    removeSelect: () => dispatch(removeSelect()),
    addValueToInput: (input) => dispatch(addValueToInput(input)),
    changeInputValue: (input) => dispatch(changeInputValue(input))
  };
}

export const AuthorListHandler = connect(mapStateToProps, mapDispatchToProps)(AuthorList);