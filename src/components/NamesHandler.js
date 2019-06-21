import { connect } from "react-redux";
import { load, selected, moveUp, moveDown, remove, renamed } from '../redux/actions'
import Names from "./Names";

const NamesHandler = connect(mapStateToProps, mapDispatchToProps)(Names);

function mapStateToProps(state) {
  return {
    namesRequested: state.requested,
    names: state.names,
    indexLi: state.selectedIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buttonLoad: () => dispatch(load()),
    selectedLi: (index) => dispatch(selected(index)),
    moveUp: (names, index) => dispatch(moveUp(names, index)),
    moveDovn: (names, index) => dispatch(moveDown(names, index)),
    remove: (names) => dispatch(remove(names)),
    renamed: (names) => dispatch(renamed(names))
  }
}

export default NamesHandler;
