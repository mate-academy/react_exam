import { connect } from 'react-redux';
import AuthorItem from './AuthorItem';
import {
  displaceAuthorItem,
  handleAuthorHovering,
  handleRenaming,
  updateInputValue,
  cancelRenaming,
  AUTHOR_ITEM_STATES,
} from '../redux/actions';

function mapStateToProps(state, ownProps) {
  const { id, listIndex } = ownProps;
  const {
    hoveredAuthorId,
    focusedAuthorId,
    focusedItemState,
  } = state;
  const { authorName, inputValue } = state.authorsById[id];

  const focused = id === focusedAuthorId;

  const mappedProps = {
    authorName,
    inputValue,
    focusedItemState,
    listIndex,
    selected: focused,
    hovered: id === hoveredAuthorId,
  };

  if (focused) {
    mappedProps.unwrapped = focusedItemState === AUTHOR_ITEM_STATES.RENAMING;
  }

  return mappedProps;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onUpdateInputValue: newValue => dispatch(updateInputValue(newValue)),
    onApplyNewName: newName => dispatch(handleRenaming(newName)),
    onMouseEnter: () => dispatch(handleAuthorHovering(ownProps.id)),
    displaceAuthorItem: () => dispatch(displaceAuthorItem(ownProps.id)),
    onCancelInputting: () => dispatch(cancelRenaming()),
  };
}

const AuthorItemHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorItem);

export default AuthorItemHandler;
