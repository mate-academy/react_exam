import NameList from './NameList';
import { connect } from 'react-redux';
import { request, deleteName, changeNameStart, changeNameEnd, upNameInList, downNameInList } from '../redux/actions';

function mapStateToProps(state) {
  return {
    nameList: state.nameList,
    selectedItem: state.selectedItem,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //request: dispatch(request()),
    deleting: index => dispatch(deleteName(index)),
    startEdit: index => dispatch(changeNameStart(index)),
    endEdit: index => dispatch(changeNameEnd(index)),
    up: index => dispatch(upNameInList(index)),
    down: index => dispatch(downNameInList(index)),
  }
}

export const NameListHandler = connect(mapStateToProps, mapDispatchToProps)(NameList)


