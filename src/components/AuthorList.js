import React from 'react';
import PropTypes from 'prop-types';
import AuthorHandler from './AuthorHandler';

export function AuthorList(props) {
  const {
    requested,
    loadItems,
    loadedClothes,
    chosenItemIndex,
    authors,
    isEditItemNow,
    moveUpItem,
    moveDownItem,
  } = props;
  if (!requested) {
    return (
      <input
        type="button"
        onClick={loadItems}
        value="Download Authors!"
      />
    );
  } if (loadedClothes) {
    const isItemIndex = chosenItemIndex === null;
    const items = authors.map((item, index) => (
      <AuthorHandler
        className={chosenItemIndex === index ? 'selected' : ''}
        name={item}
        key={item}
        index={index}
      />
    ));

    return (
      <section>
        <div className="listItems">{items}</div>
        <div>
          <input
            disabled={
              chosenItemIndex === 0
            || isItemIndex
            || isEditItemNow
            }
            type="button"
            onClick={moveUpItem}
            value="move Up"
          />
          <input
            disabled={
              chosenItemIndex === authors.length - 1
            || isItemIndex
            || isEditItemNow
            }
            type="button"
            onClick={moveDownItem}
            value="move Down"
          />
        </div>
      </section>
    );
  }
  return (
    <input type="button" disabled value="Loading..." />
  );
}

AuthorList.propTypes = {
  requested: PropTypes.bool.isRequired,
  loadItems: PropTypes.func.isRequired,
  loadedClothes: PropTypes.bool.isRequired,
  chosenItemIndex: PropTypes.number,
  authors: PropTypes.arrayOf(PropTypes.string),
  isEditItemNow: PropTypes.bool.isRequired,
  moveUpItem: PropTypes.func.isRequired,
  moveDownItem: PropTypes.func.isRequired,
};

AuthorList.defaultProps = {
  chosenItemIndex: null,
  authors: null,
};
