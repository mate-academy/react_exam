import React from 'react';

function Titles(props) {
  let body = document.getElementsByTagName('body');
  // body[0].addEventListener('click', () => {
  //   props.clearSelection();
  // });

  if (props.articleRequested === false) {
    return <button onClick={props.buttonClicked}>Load</button>
  } else {
    if(props.title === null) {
      return <span>Loading...</span>;
    } else {
      const list = [];
      for (let i = 0; i < props.title.length; i++) {
        //console.log(props.title[i]);
        //console.log(props.selectedIndex);
        if (props.selectedIndex === i) {
          list.push(<li onClick={() => {props.selectItem(i)}}
                        key={props.title[i]}
                        className="listElement">
                      <input defaultValue={props.title[i]}
                             placeholder={props.title[i]}
                             onBlur={(e) => props.inputNewContent(e)}/>
                    </li>);
        } else {
          list.push(<li onClick={() => {props.selectItem(i)}}
                        key={props.title[i]}
                        className="listElement">{props.title[i]}</li>);
        }
      }
      return <div className="boxForList">
                <ul className="list">{list}</ul>
                <div>
                  <button onClick={props.moveSelectionUp}>Move up</button>
                  <button onClick={props.moveSelectionDown}>Move down</button>
                </div>
                <button onClick={() => props.deleteSelection(props.selectedIndex)}>Delete item</button>
             </div>;
    }
  }
}

export default Titles;
