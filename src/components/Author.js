import React from 'react'

export function Author(props) {
  const { author, removeAuthor, index, itemClicked, addValueToInput, isSelected } = props;

  return (
    <div className={isSelected ? 'selected author-item' : 'author-item'}>
      <span className="author" onClick={() => itemClicked(index)}>{author}</span>
      <div className={isSelected ? 'selected' : 'buttons-bar'}>
        <button type="button" onClick={() => addValueToInput(author)}>Edit</button>
        <button
        type="button"
        className="remove-author"
        title="Remove author"
        onClick={() => removeAuthor(index)}
        >&times;
        </button>
      </div>
    </div>
  );
}
