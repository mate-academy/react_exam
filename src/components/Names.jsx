import React, { Fragment } from 'react';

export default function Names(props) {
  if (!props.namesRequested) {
    return <button onClick={props.buttonLoad}>Load</button>
  } else {
    if (!props.names) {
      return <span>loading...</span>
    } else {
      return (
        <Fragment>
          <ul>{props.names.map((name, index) =>
            <li key={name + index} onClick={() => props.selectedLi(index)}>
              {name}
              <button onClick={() => {
                const names = [...props.names];
                names.splice(props.indexLi, 1);
                return props.remove(names)
              }}>x</button>
            </li>)}
          </ul>
          <button
            disabled={!props.indexLi}
            onClick={() => {
              const names = [...props.names];
              const items = names.splice(props.indexLi, 1);
              names.splice(props.indexLi - 1, 0, items[0]);
              return props.moveUp(names, props.indexLi - 1);
            }}>Up</button>
          <button
            disabled={
              props.indexLi === null || props.indexLi === props.names.length - 1}
            onClick={() => {
              const names = [...props.names];
              const items = names.splice(props.indexLi, 1);
              names.splice(props.indexLi + 1, 0, items[0]);
              return props.moveUp(names, props.indexLi + 1);
            }}>Down</button>
          {props.indexLi !== null
            && <input
              type="text"
              defaultValue={props.names[props.indexLi]}
              onKeyDown={(event) => {
                const names = [...props.names];
                names.splice(props.indexLi, 1);
                names.splice(props.indexLi, 0, event.target.value.trim());
                props.renamed(names);
                if (event.key === 'Enter' && event.target.value.trim() === '') {
                  const names = [...props.names];
                  names.splice(props.indexLi, 1);
                  return props.remove(names);
                }
              }
              } />}
        </Fragment>
      );
    }
  }
}
