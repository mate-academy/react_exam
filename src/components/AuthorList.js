import React from 'react';
import Author from './Author'

function AuthorList(props) {
  if(props.requested) {
    if(props.items) {
      const list = props.items.map((item, index) => {
        return <Author key={index}
          items={props.items}
          authorName={item.item}
          index={index}
          displayButtons={props.displayButtons}
          removeItem={props.removeItem}
          moveUp={props.moveUp}
          moveDown={props.moveDown}
          edit={props.edit}
          updateInput={props.updateInput}
          inputValue={item.input}
          save={props.save}
          displayClass={item.displayClass}
          changeClass={props.changeClass}
          />
      });
      return (
        <ol>
          {list}
        </ol>
      );
    } else {
      return <div>Loading...</div>
    }
  } else {
    return <button onClick={props.loadData}>Load</button>
  }
}

export default AuthorList;
