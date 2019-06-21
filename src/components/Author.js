import React from 'react';
import './Author.css';

function Author(props) {
  if (props.authorsList === null) {
    return null;
  }
  const ul = props.authorsList.map((author, i) => {
    if (i === props.selectedIndex) {
      if (props.inEdit) {
        return (<li key={i}><input defaultValue={author} onKeyDown={(event) => props.inputHandler(event)}/></li>);
      } else {
        return (<li className='selected' key={i} onClick={() => props.authorClick(i)}>{author}</li>);
      }
    } else {
      return (<li key={i} onClick={() => props.authorClick(i)}>{author}</li>);
    }
  });
  return <ul className="container">{ul}</ul>;
}

export default Author;
