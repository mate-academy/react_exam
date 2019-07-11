import React from 'react';

export function Editor(props) {
  const {
    input,
    changeInputValue,
    saveChangedValue
  } = props;

  const isInputEmpty = input !== null;
  const isEditorDisabled = isInputEmpty ? false : true;

  return (
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
  )
}
