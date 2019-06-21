import React from 'react'

export function Author(props) {
  const { author, removeAuthor, index, itemClicked, addValueToInput } = props;

  return (
    <div className="author-item">
      <span className="author" onClick={() => itemClicked(index)}>{author}</span>
      <button type="button" onClick={() => addValueToInput(author)}>Edit</button>
      <span className="remove-author" onClick={() => removeAuthor(index)}>&times;</span>
    </div>
  );
}
