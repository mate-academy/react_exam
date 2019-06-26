import React from 'react';
import '../AuthorItem.css'
function AuthorItem(props) {
  return (
    <article className={props.selected ? 'selected' : ''}>
      {
        props.editable
          ?<input type='text' value={props.editedName}
                   onChange={(event) => props.updateEditedItem(event.target.value)}
                   onKeyDown={(event) => {
                      if(event.key === 'Enter'){
                        props.updateItem();
                      } else if (event.key === 'Escape') {
                        props.cancelEditing();
                      }
                    }}
          />
          :<span onClick={props.selectItem}>{props.author}</span>
      }
      <button className="show-selected-item" onClick={props.editItem}>&#9997;</button>
      <button className="show-selected-item" onClick={props.moveUp}>&#8679;</button>
      <button className="show-selected-item" onClick={props.moveDown}>&#8681;</button>

        <button onClick={props.deleteItem}>&times;</button>
     </article>
  );
}

export default AuthorItem;
