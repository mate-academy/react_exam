import React from 'react';
import './ListAuthors.css';

function ListAuthors(props) {
  if (!props.listRequested) {
    return <button className="load" type="button" onClick={props.buttonClicked}>Load</button>;
  } else {
    if (props.data === null) {
      return <span>Loading...</span>
    } else {
      return (
        <React.Fragment>
          <ul>
            {props.data.map((item, index) => {
              if (item !== props.editItem) {
                return (
                  <li onClick={() => props.selected(index)}>
                    <p className={index === props.index ? 'selected' : ''}>{item}</p>
                    <button type="button" onClick={() => props.chooseItem(item)}>Edit</button>
                    {console.log(props.index)}
                  </li>
                )
              } else {
                return (
                  <li>
                    <input defaultValue={props.editItem} onKeyPress={(event) => props.changeItem(props.data, event.target.value, props.editItem)}/>
                  </li>
                )
              }
            })}
          </ul>
          <button disabled={props.index === 0 || props.index === null ? true : false}
            className="move" onClick={() => props.moveUp(props.data, props.index)}>Up</button>
          <button disabled={props.index === props.data.length-1 || props.index === null ? true : false}
            className="move" onClick={() => props.moveDown(props.data, props.index)}>Down</button>
        </React.Fragment>
      );
  }
  }
}

export default ListAuthors;
