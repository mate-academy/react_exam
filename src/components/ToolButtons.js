import React from 'react';
import './ToolButtons.css';

const ToolButtons = (props) => {
  return (
    <div className="panel">
      <button
        onClick={() => props.load()}
        disabled={props.loadDisabled}
      >{props.loadLabel}
      </button>
      <button
        onClick={() => props.up(props.index)}
        disabled={props.index === 0
          || props.index === null
          || props.authorsLength === 0}
      >Move Up
      </button>
      <button
        onClick={() => props.down(props.index)}
        disabled={props.index === props.authorsLength - 1
          || props.index === null
          || props.authorsLength === 0}
      >Move Down
      </button>
      <button
        onClick={() => props.edit(props.index)}
        disabled={props.editDisabled}
      >Edit
      </button>
      <button
        onClick={() => props.delete(props.index)}
        disabled={props.editDisabled}
      >Delete
      </button>
    </div>
  );
};

export default ToolButtons;
