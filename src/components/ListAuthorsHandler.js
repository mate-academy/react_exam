import { connect } from 'react-redux';
import ListAuthors from './ListAuthors';
import {
  load, order, moveUp, moveDown, chooseItem, changeItem,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    data: state.data,
    listRequested: state.requested,
    editItem: state.editItem,
    index: state.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buttonClicked: () => dispatch(load()),
    selected: index => dispatch(order(index)),
    moveUp: (data, index) => dispatch(moveUp(data, index)),
    moveDown: (data, index) => dispatch(moveDown(data, index)),
    chooseItem: item => dispatch(chooseItem(item)),
    changeItem: (data, value, item) => dispatch(changeItem(data, value, item)),
  };
}

const ListAuthorsHandler = connect(mapStateToProps, mapDispatchToProps)(ListAuthors);

export default ListAuthorsHandler;
