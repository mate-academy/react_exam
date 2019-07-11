import React from 'react'
import './AuthorList.css';
import { AuthorHandler } from './AuthorHandler';
import { EditorHandler } from './EditorHandler';

export  function AuthorList(props) {
  const {
    authorList,
    authorsRequested,
    buttonClicked,
    index,
    moveUp,
    moveDown
   } = props;

   

  if (!authorsRequested) {
    return <button className="loading-btn"onClick={buttonClicked}>Load data</button>;
  } else {
    if (authorList === null) {
      return <button className="loading-btn">Loading...</button>;
    } else {
      return (
        <div className="container">
          {authorList.map((author, index) => {
            return <AuthorHandler key={index} author={author} index={index}/>;
          })}
          <div>
            <button
              onClick={() => moveUp(index)}
              disabled={index === 0 || index === null}
            >Move Up
            </button>
            <button
              onClick={() => moveDown(index)}
              disabled={index === authorList.length - 1 || index === null}
            >Move Down
            </button>
          </div>
          <EditorHandler />
        </div>        
      );
    }
  }
}
