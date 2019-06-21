import React from 'react';
import PropTypes from 'prop-types';

function Authors(props) {
  const {
    authorRequested, author, buttonClicked, buttonUp, buttonDown,
  } = props;

  if (!authorRequested) {
    return <button type="button" onClick={buttonClicked}>Load</button>;
  } if (author === null) {
    return <span>Loading...</span>;
  } return (
    <>
      <ul>{author}</ul>
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
};
