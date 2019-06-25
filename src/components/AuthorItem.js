import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ManipulatorHandler from './ManipulatorHandler';
import { AUTHOR_DISPLACE_MARKERS, AUTHOR_ITEM_STATES } from '../redux/actions';
import './AuthorItem.css';

const AuthorItem = (props) => {
  const {
    id,
    authorName,
    inputValue,
    hovered,
    selected,
    focusedItemState,
    marker,
    onMouseEnter,
    onUpdateInputValue,
    onCancelInputting,
    onApplyNewName,
    unwrapped,
    displaceAuthorItem,
  } = props;

  return (
    <Fragment>
      {(marker === AUTHOR_DISPLACE_MARKERS.ABOVE || selected)
      && focusedItemState === AUTHOR_ITEM_STATES.MOVING
      && (
        <button
          type="button"
          className="marker"
          onClick={() => displaceAuthorItem(id)}
        >
          {selected ? '▼' : '▲'}
        </button>
      )}
      <section
        className={`item-wrapper${hovered ? ' hovered' : ''}`}
        onMouseEnter={onMouseEnter}
      >
        <label
          htmlFor={`author_${id}`}
          className="author-name"
        >
          {authorName}
          <input
            name={`author_${id}`}
            className={unwrapped ? 'unwrapped' : 'wrapped'}
            type="text"
            value={inputValue}
            disabled={!unwrapped}
            onKeyDown={(event) => {
              switch (event.key) {
                case 'Enter':
                  onApplyNewName(event.target.value.trim());
                  break;
                case 'Escape':
                  onCancelInputting();
                  break;
                default:
              }
            }}
            onChange={event => onUpdateInputValue(event.target.value.trim())}
          />
        </label>
        {
          hovered && !selected && <ManipulatorHandler ownerId={id} />
        }
      </section>
      {(marker === AUTHOR_DISPLACE_MARKERS.BELOW || selected)
      && focusedItemState === AUTHOR_ITEM_STATES.MOVING
      && (
        <button
          type="button"
          className="marker"
          onClick={() => displaceAuthorItem(id)}
        >
          {selected ? '▲' : '▼'}
        </button>
      )}
    </Fragment>
  );
};

AuthorItem.defaultProps = {
  unwrapped: false,
  inputValue: '',
  focusedItemState: null,
};

AuthorItem.propTypes = {
  id: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  marker: PropTypes.string.isRequired,
  displaceAuthorItem: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  unwrapped: PropTypes.bool,
  focusedItemState: PropTypes.string,
  onMouseEnter: PropTypes.func.isRequired,
  onApplyNewName: PropTypes.func.isRequired,
  onUpdateInputValue: PropTypes.func.isRequired,
  onCancelInputting: PropTypes.func.isRequired,
};

export default AuthorItem;
