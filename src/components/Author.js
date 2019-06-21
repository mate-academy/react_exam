import React from 'react';

export default function Author(props) {
  if (props.isEditItemNow && props.chosenItemIndex === props.index) {
    return (
      <input
        type="text"
        value={props.inputValue}
        onChange={props.changeInputValue}
        onKeyPress={props.updateItem}
      />
    );
  }
  return (
    <div>
      <p className="item">
        <span className="delete" onClick={() => props.removeChosenItem(props.index)}>
          Delete
        </span>
        <span onClick={() => props.chooseAuthorItem(props.index)} className={props.className}>
         {props.name}
        </span>
        <span className="edit" onClick={() => props.editItem(props.index)}>Edit</span>
      </p>
    </div>
  );
}
