import React from 'react';
import AuthorHandler from './AuthorHandler';

export function AuthorList(props) {
  if (!props.requested) {
    return <input type="button" onClick={props.loadItems} value="Download Authors!" />;
  } else if (props.loadedClothes) {
    const isItemIndex = props.chosenItemIndex === null;
    const items = props.authors.map((item, index) => (
      <AuthorHandler
        className={props.chosenItemIndex === index ? 'selected' : ''}
        name={item}
        key={index}
        index={index}
      />
    ));

    return (
      <section>
        <div className="listItems">{items}</div>
        <div>
          <input
            disabled={props.chosenItemIndex === 0 || isItemIndex || props.isEditItemNow}
            type="button"
            onClick={props.moveUpItem}
            value="move Up"
          />
          <input
            disabled={props.chosenItemIndex === props.authors.length - 1 || isItemIndex || props.isEditItemNow}
            type="button"
            onClick={props.moveDownItem}
            value="move Down"
          />
        </div>
      </section>
    );
  } else {
    return (
      <input type="button" disabled={true} value="Loading..."/>
    );
  }
}
