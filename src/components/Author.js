import React from 'react';
import '../css/Author.css'

function Author(props) {
  return (
    <li>
      <span className={`author_name ${props.displayClass === 'active' ? 'none_active': 'active'}`} onClick={() => props.changeClass(props.index)}>{props.authorName}</span>
      <span className={`edit ${props.displayClass}`}>
        <input type='text' value={props.inputValue} onChange={(e) => props.updateInput(e.target.value, props.index)}></input>
        <button onClick={() => props.save(props.index)}>save</button> 
      </span>
      <span className={props.class}>
        <button onClick = {() => props.moveUp(props.index)} disabled={props.index === 0 ? true: false}>&#8743;</button>
        <button onClick = {() => props.moveDown(props.index)} disabled={props.index === props.items.length - 1 ? true: false}>&#8744;</button>
      <span className='remove' onClick = {() => props.removeItem(props.index)}>x</span>
      </span>
    </li>
  );
}

export default Author;
