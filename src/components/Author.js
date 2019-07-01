import React from 'react';
import PropTypes from 'prop-types';

export default function Author(props) {
  const {
    isEditItemNow,
    chosenItemIndex,
    index,
    inputValue,
    changeInputValue,
    updateItem,
    removeChosenItem,
    chooseAuthorItem,
    className,
    editItem,
    name,
  } = props;
  if (isEditItemNow && chosenItemIndex === index) {
    return (
      <input
        type="text"
        value={inputValue}
        onChange={changeInputValue}
        onKeyPress={updateItem}
      />
    );
  }
  return (
    <div>
      <p className="item">
        <span className="delete" onClick={() => removeChosenItem(index)}>
          Delete
        </span>
        <span onClick={() => chooseAuthorItem(index)} className={className}>
          {name}
        </span>
        <span className="edit" onClick={() => editItem(index)}>Edit</span>
      </p>
    </div>
  );
}

Author.propTypes = {
  isEditItemNow: PropTypes.bool.isRequired,
  chosenItemIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  removeChosenItem: PropTypes.func.isRequired,
  chooseAuthorItem: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  editItem: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Author.defaultProps = {
  chosenItemIndex: null,
};
