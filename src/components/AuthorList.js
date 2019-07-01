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
    moveDown,
    saveChangedValue
   } = props;

   const isInputEmpty = input !== null;
   const isEditorDisabled = isInputEmpty ? false : true;

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
          <div className="editor">
            <label>
              Editor: 
              <input 
                type="text" 
                name="edit"
                className="editor__field" 
                disabled={isEditorDisabled}
                value={isInputEmpty ? input : ''}
                onChange={(event) => changeInputValue(event.target.value)}
              />
            </label>
            <button type="button"
              onClick={() => saveChangedValue()}
              disabled={isEditorDisabled}
            >Save
            </button>
          </div>
        </div>        
      );
    }
  }
}
