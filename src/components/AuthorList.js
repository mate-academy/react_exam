import React from 'react'
import { Author } from './Author';
import './AuthorList.css';

export  function AuthorList(props) {
  const {
    authorList,
    authorsRequested,
    buttonClicked,
    removeAuthor,
    itemClicked,
    addValueToInput,
    input,
    changeInputValue
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
                <Author
                  itemClicked={itemClicked}
                  author={author}
                  index={index}
                  removeAuthor={removeAuthor}
                  addValueToInput={addValueToInput}
                />
              </div>
            );
          })}
          <div>
            <button
              onClick={() => props.moveUp(props.index)}
              disabled={props.index === 0 || props.index === null}
            >Move Up
            </button>
            <button
              onClick={() => props.moveDown(props.index)}
              disabled={props.index === props.authorList.length - 1 || props.index === null}
            >Move Down
            </button>
          </div>
          <label>
            Editor
            <input type="text" name="edit" defaultValue={input} onChange={(event) => changeInputValue(event.target.value)} />
          </label>
          <button type="button">Save</button>
        </div>        
      );
    }
  }
}
