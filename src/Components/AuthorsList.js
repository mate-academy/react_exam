import React from 'react';
import AuthorHandler from './AuthorHandler';

function AuthorsList(props) {
  const { dataRequested,
          authors,
          buttonClicked,
          exitFromEditing } = props;

  if (!dataRequested){
    return <button onClick={buttonClicked} className="load">Load authors</button>;
  } else {
    if (authors === null) {
      return <span className="loading">Loading...</span>;
    } else {
      return (
        <section onClick={(event) => {if (!event.target.closest('a')) exitFromEditing()}}>
          <h2>Authors:</h2>
          <ol className="list">
            {authors.map((author, index) => {
              return <AuthorHandler author={author} index={index} key={author} />
            })}
          </ol>
        </section>
      );
    }
  }
}

export default AuthorsList;
