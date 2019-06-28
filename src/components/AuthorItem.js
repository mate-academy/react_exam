import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    <ReactCSSTransitionGroup
      transitionName={{
        appear: 'item-appear',
        appearActive: 'item-appearActive',
      }}
      transitionAppear
      transitionEnter={false}
      transitionLeave={false}
      transitionAppearTimeout={700}
    >
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {(marker === AUTHOR_DISPLACE_MARKERS.ABOVE || selected)
        && focusedItemState === AUTHOR_ITEM_STATES.MOVING
        && (
          <button
            key={`${id}_upper-marker`}
            type="button"
            className={`marker${hovered ? ' marker-hover' : ''}`}
            onClick={displaceAuthorItem}
          >
            {selected ? '▼' : '▲'}
          </button>
        )}
      </ReactCSSTransitionGroup>
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
            onChange={event => onUpdateInputValue(event.target.value)}
          />
        </label>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: 'manipulator-enter',
            enterActive: 'manipulator-enter-active',
            leave: 'manipulator-leave',
            leaveActive: 'manipulator-leave-active',
          }}
          transitionEnterTimeout={150}
          transitionLeaveTimeout={200}
        >
          {
            hovered
            && !selected
            && <ManipulatorHandler key={`manipulator_${id}`} ownerId={id} />
          }
        </ReactCSSTransitionGroup>
      </section>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive',
        }}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {(marker === AUTHOR_DISPLACE_MARKERS.BELOW || selected)
        && focusedItemState === AUTHOR_ITEM_STATES.MOVING
        && (
          <button
            key={`${id}_lower-marker`}
            type="button"
            className={`marker${hovered ? ' marker-hover' : ''}`}
            onClick={displaceAuthorItem}
          >
            {selected ? '▲' : '▼'}
          </button>
        )}
      </ReactCSSTransitionGroup>
    </ReactCSSTransitionGroup>
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
