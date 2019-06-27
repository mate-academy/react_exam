import React from 'react';
import './Author.css';

export default function Author(props) {
  return (
    <article className={props.isSelected ? 'selected' : null}>
      {
        props.editable
          ? <input type="text"
          autoFocus
            value={props.editedName}
            onChange={(event) => props.updateEditedName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                props.updateAuthor();
              } else if (event.key === 'Escape') {
                props.cancelEditing();
              }
            }}
          />
          : <div className="author" onClick={props.selectAuthor}>
              <p>{props.author}</p>
              <button className="btn-remove" onClick={props.deletedAuthor}>&times;</button>
            </div>
      }
      <div className="author-btn">
        <button className='show-when-selected btn' onClick={props.editAuthor}>Edit</button>
        <button disabled={props.selectedIndex === 0 || props.selectedIndex === null}
          className='show-when-selected btn'
          onClick={props.moveAuthorUp}>Up</button>
        <button disabled={props.selectedIndex === props.disabled.length - 1 || props.selectedIndex === null}
          className='show-when-selected btn'
          onClick={props.moveAuthorDown}>Down</button>
      </div>
    </article>
  )
}
