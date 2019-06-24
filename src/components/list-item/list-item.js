import React from 'react';
import ItemAddForm from '../item-add-form';
import './list-item.css';

const TodoListItem = ({ label, onDelete, item, id }) => {

  let classNames = 'todo-list-item';
  
  return (
    <span className={classNames} >
    <ItemAddForm label1 = {label}
          item ={item}
          id={id}
           />
      <span
        className="todo-list-item-label"
     ></span>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
