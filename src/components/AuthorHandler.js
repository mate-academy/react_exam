import { connect } from 'react-redux';
import { Author } from './Author';
import { selectItem, removeAuthor, addValueToInput } from '../redux/actions'


function mapStateToProps(state, ownProps) {
  return {
    author: ownProps.author,
    index: ownProps.index,
    isSelected: state.selectedIndex === ownProps.index,
    input: state.input
  }
}

function mapDispatchToProps(dispatch) {
  return {
    itemClicked: index => dispatch(selectItem(index)),
    removeAuthor: (index) => dispatch(removeAuthor(index)),
    addValueToInput: (input) => dispatch(addValueToInput(input))
  }
}

export const AuthorHandler = connect(mapStateToProps, mapDispatchToProps)(Author);
