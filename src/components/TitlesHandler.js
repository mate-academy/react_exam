import Titles from './Titles';
import {connect} from 'react-redux';
import {
  load,
  selectItem,
  deleteSelection,
  inputNewContent,
  moveSelectionUp,
  moveSelectionDown,
  clearSelection
} from '../reducers/actions';

function mapStateProps(state) {
  return {
    articleRequested: state.requested,
    title: state.title,
    selectedIndex: state.selectedIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectItem: (i) => dispatch(selectItem(i)),
    buttonClicked: () => dispatch(load()),
    deleteSelection: (i) => dispatch(deleteSelection(i)),
    inputNewContent: (event) => dispatch(inputNewContent(event)),
    moveSelectionUp: () => dispatch(moveSelectionUp()),
    moveSelectionDown: () => dispatch(moveSelectionDown()),
    clearSelection: () => dispatch(clearSelection())
  };
}

const TitlesHandler = connect(mapStateProps, mapDispatchToProps)(Titles);

export default TitlesHandler;
