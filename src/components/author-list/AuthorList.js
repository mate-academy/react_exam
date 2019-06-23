import React from 'react';
import AuthorItem from '../author-item/AuthorItem';

function AuthorList({ authors }) {

  return (
    <ul>
      {authors.map((author, index) => {
        const key = `#${index}`;
        return (
          <li key={key}>
            <AuthorItem author={author} index={index}/>
          </li>
        );
      })}
    </ul>
  );
}

export default AuthorList;
