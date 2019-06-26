import React from 'react'
import './AuthorList.css';
import { AuthorHandler } from './AuthorHandler';

export  function AuthorList(props) {
  const {
    authorList,
    authorsRequested,
    buttonClicked,
    input,
    changeInputValue,
    index,
    moveUp,
    moveDown
   } = props;

  if (!authorsRequested) {
    return <button onClick={buttonClicked}>Load</button>;
  } else {
    if (authorList === null) {
      return <span>Loading...</span>;
    } else {
      return (
        <div>
          {authorList.map((author, index) => {
            return (
              <div key={index}>
                <AuthorHandler
                  author={author}
                  index={index}
                />
              </div>
            );
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
          <div className="editor">
            <label>
              Editor
              <input type="text" name="edit" defaultValue={input} onChange={(event) => changeInputValue(event.target.value)} />
            </label>
            <button type="button">Save</button>
          </div>
        </div>        
      );
    }
  }
}
