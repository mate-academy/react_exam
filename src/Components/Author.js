import React from 'react';
import './Author.css';

function Author(props) {
  const { edition,
          moving,
          index,
          author,
          id,
          removeAuthor,
          clickEdit,
          editAuthor,
          clickReplace,
          replaceAuthor } = props;

  if(index === id) {
    if (edition || moving) {
      return (
        <li className="author">
          <span>{id + 1}. {author}</span>
          <input
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                return edition
                ? editAuthor(event.target.value)
                : replaceAuthor(event.target.value);
            }}}
            autoFocus placeholder={edition ? "New name" : "New position"}
          />
          <a href="#" onClick={() => removeAuthor(id)}>X</a>
        </li>
      )
    }
  }

  return (
    <li className="author">
      <span>{id + 1}. {author}</span>
      <a href="#" onClick={() => clickEdit(id)}>Edit</a>
      <a href="#" onClick={() => clickReplace(id)}>Replace</a>
      <a href="#" onClick={() => removeAuthor(id)}>X</a>
    </li>
  )
}

export default Author;
