import { connect } from 'react-redux';
import { AuthorList } from './AuthorList';
import {
  loadItems,
  moveDownItem,
  moveUpItem,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    authors: state.authors,
    chosenItemIndex: state.chosenItemIndex,
    requested: state.requested,
    loadedClothes: state.loadedClothes,
    isEditItemNow: state.isEditItemNow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadItems: () => dispatch(loadItems()),
    moveUpItem: () => dispatch(moveUpItem()),
    moveDownItem: () => dispatch(moveDownItem()),
  };
}

const AuthorListHandler = connect(
  mapStateToProps, mapDispatchToProps
)(AuthorList);

export default AuthorListHandler;
