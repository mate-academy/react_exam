import { connect } from 'react-redux';
import AuthorItem from './AuthorItem';
import {
  displaceAuthorItem,
  handleAuthorHovering,
  handleRenaming,
  AUTHOR_ITEM_STATES,
} from '../redux/actions';

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const {
    hoveredAuthorId,
    focusedAuthorId,
    focusedItemState,
    authorsById: {
      [id]: authorName,
    },
  } = state;

  const focused = id === focusedAuthorId;

  const mappedProps = {
    authorName,
    selected: focused,
    hovered: focusedAuthorId ? false : id === hoveredAuthorId,
  };

  if (focused) {
    mappedProps.unwrapped = focusedItemState === AUTHOR_ITEM_STATES.RENAMING;
  }

  return mappedProps;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onApplyNewName: newName => dispatch(handleRenaming(newName)),
    onMouseEnter: () => dispatch(handleAuthorHovering(ownProps.id)),
    displaceAuthorItem: () => dispatch(displaceAuthorItem(ownProps.id)),
  };
}

const AuthorItemHandler = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorItem);

export default AuthorItemHandler;
