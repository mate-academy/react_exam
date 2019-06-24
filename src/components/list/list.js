import React from 'react';

import AuthorListItem from '../list-item/list-item';

import './list.css';

const AuthorList = ({ items, onDelete, onItemAdded }) => {
  
  const elements = items.map((item) => {
   
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <AuthorListItem
          item = {item}
          id={id}
          { ...itemProps }
          onDelete={ () => onDelete(id) }
         />
          </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default AuthorList;
