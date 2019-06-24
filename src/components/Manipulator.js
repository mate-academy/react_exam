import React from 'react';
import { string, func } from 'prop-types';
import { AUTHOR_ITEM_STATES } from '../redux/actions';

function Manipulator(props) {
  const { ownerId, onSelectState, onRemoveClick } = props;

  return (
    <div className="manipulator">
      <button
        type="button"
        className="manipulator-button rename"
        onClick={() => onSelectState(ownerId, AUTHOR_ITEM_STATES.RENAMING)}
      >
        <span className="context-image" role="img" aria-label="Rename">
          &#9997;
        </span>
      </button>
      <button
        type="button"
        className="manipulator-button move"
        onClick={() => onSelectState(ownerId, AUTHOR_ITEM_STATES.MOVING)}
      >
        <span className="context-image" role="img" aria-label="Move">
          &#10037;
        </span>
      </button>
      <button
        type="button"
        className="manipulator-button remove"
        onClick={
          () => onRemoveClick(ownerId)
        }
      >
        <span className="context-image" role="img" aria-label="Remove">
          &#128465;
        </span>
      </button>
    </div>
  );
}

Manipulator.propTypes = {
  ownerId: string.isRequired,
  onRemoveClick: func.isRequired,
  onSelectState: func.isRequired,
};

export default Manipulator;
