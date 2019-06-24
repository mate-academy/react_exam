import React from 'react';
import PropTypes from 'prop-types';
import ManipulatorHandler from './ManipulatorHandler';
import { AUTHOR_DISPLACE_MARKERS } from '../redux/actions';

const AuthorItem = (props) => {
  const {
    id,
    authorName,
    hovered,
    focused,
    marker,
    onMouseEnter,
    onApplyNewName,
    unwrapped,
    displaceAuthorItem,
  } = props;

  return (
    <section
      className="item-wrapper"
      onMouseEnter={hovered ? null : onMouseEnter}
    >
      {(marker === AUTHOR_DISPLACE_MARKERS.ABOVE || focused) && (
        <button
          type="button"
          className={`marker${hovered ? ' hovered' : ''}`}
          onClick={() => displaceAuthorItem(id)}
        >
          {focused ? '▼' : '▲'}
        </button>
      )}
      <label
        htmlFor={`author_${id}`}
        className="author-name"
      >
        {authorName}
        <input
          name={`author_${id}`}
          className={unwrapped ? 'unwrapped' : 'wrapped'}
          type="text"
          defaultValue={authorName}
          onKeyPress={(keyPressEvent) => {
            if (keyPressEvent.code === 'Enter') {
              onApplyNewName(keyPressEvent.target.value.trim());
            }
          }}
        />
      </label>
      {(marker === AUTHOR_DISPLACE_MARKERS.BELOW || focused) && (
        <button
          type="button"
          className={`marker${hovered ? ' hovered' : ''}`}
          onClick={() => displaceAuthorItem(id)}
        >
          {focused ? '▲' : '▼'}
        </button>
      )}
      {
        hovered && !focused && <ManipulatorHandler ownerId={id} />
      }
    </section>
  );
};

AuthorItem.defaultProps = {
  unwrapped: false,
};

AuthorItem.propTypes = {
  id: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  hovered: PropTypes.bool.isRequired,
  focused: PropTypes.bool.isRequired,
  marker: PropTypes.string.isRequired,
  displaceAuthorItem: PropTypes.func.isRequired,
  unwrapped: PropTypes.bool,
  onMouseEnter: PropTypes.func.isRequired,
  onApplyNewName: PropTypes.func.isRequired,
};

export default AuthorItem;
