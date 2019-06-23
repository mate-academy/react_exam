import React from 'react'
import './NameList.css'

export default function NameList({ nameList, deleting, startEdit, endEdit, selectedItem, up, down }) {
  if (nameList) {
    return (
      <ul>
        {nameList.map((author, index) => {
          const isSelected = selectedItem === index
          if (isSelected) {
            return (
              <li key={author}>
                <input type="text" defaultValue={author} onKeyPress={event => { if (event.charCode === 13) endEdit(event.target.value) }} />
                <button className="edit" onClick={event => endEdit(event.target.previousSibling.value)}>&#10003;</button>
                <button className="delete" onClick={() => deleting(index)}>&times;</button>
                <button className='position' disabled={index === 0} onClick={() => up(index)}>up</button>
                <button className='position' disabled={index === nameList.length - 1} onClick={() => down(index)}>down</button>
              </li>
            )
          } else {
            return (
              <li key={author}>
                <span>{author}</span>
                <button className="edit" onClick={() => startEdit(index)}>&#9998;</button>
                <button className="delete" onClick={() => deleting(index)}>&times;</button>
              </li>
            )
          }
        }
        )}
      </ul>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}
