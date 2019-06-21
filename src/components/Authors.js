import React from 'react';
import PropTypes from 'prop-types';

function Authors(props) {
  const {
    authorRequested, author, buttonClicked, buttonUp, buttonDown, selected, selectedItem, remove,
  } = props;

  if (!authorRequested) {
    return <button type="button" onClick={buttonClicked}>Load</button>;
  } if (author === null) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <ul>
        {author.map((item, index) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <li
            className={index === selectedItem ? 'active' : null}
            onClick={() => selected(index)}
          >
            {item}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={remove}>x</a>
          </li>
        ))}
      </ul>
      <button type="button" onClick={buttonUp}>UP</button>
      <button type="button" onClick={buttonDown}>DOWN</button>
    </>
  );
}

export default Authors;

Authors.propTypes = {
  authorRequested: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  buttonClicked: PropTypes.func.isRequired,
  buttonUp: PropTypes.func.isRequired,
  buttonDown: PropTypes.func.isRequired,
  selected: PropTypes.func.isRequired,
  selectedItem: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};
