import React, { Component } from 'react';

// import Author from './Author';

class AuthorsList extends Component {
  constructor(props) {
    super(props);
    this.moveAuthorDown = this.moveAuthorDown.bind(this);
    this.moveAuthorUp = this.moveAuthorUp.bind(this);
    this.editAuthor = this.editAuthor.bind(this);
    this.removeAuthor = this.removeAuthor.bind(this);
    this.selectAuthor = this.selectAuthor.bind(this);
    this.loadList = this.loadList.bind(this);
    this.removeSelection = this.removeSelection.bind(this);
  }

  loadList() {
    this.props.load();
  }

  moveAuthorDown() {
    this.props.moveDown();
  }

  moveAuthorUp() {
    this.props.moveUp();
  }

  removeAuthor(index) {
    this.props.deleteItem(index);
  }

  selectAuthor(index) {
    this.props.selectItem(index);
  }

  removeSelection() {
    this.props.clearSelection()
  }

  editAuthor(event) {
    this.props.editing(this.refs.input.value, this.props.selected);
    console.log(this.refs.input.value)
  }

  render() {
    if (!this.props.requested) {
      return <button onClick={this.loadList}>Load</button>;
    }
    if (this.props.authors === null) {
      return <span>Loading ...</span>;
    }
    return (
      <div>
        <button onClick={this.moveAuthorUp} className="moveUp">
          Move up
        </button>
        <ul className="list">
          {this.props.authors.map((item, index) => {
            if (index !== this.props.selected) {
                return (
                  <li onClick={() => this.selectAuthor(index)} className="item" key={item}>
                  <span >
                    {item}
                  </span>
                    <a href="#" className="remove" onClick={() => this.removeAuthor(index)}>&times;</a>
                  </li>
                );
              }
              return (
                <li onClick={() => this.selectAuthor(index)} className="item" key={item}>
                  {/* eslint-disable-next-line react/no-string-refs */}
                  <input ref="input" onChange={() => this.editAuthor()} defaultValue={item} />
                  <a href="#" className="remove" onClick={() => this.removeAuthor(index)}>&times;</a>
                </li>
              );
            })}
        </ul>
        <button onClick={this.moveAuthorDown} className="moveDown">
          Move down
        </button>
        <button onClick={this.removeSelection}>
          Clear selection
        </button>
      </div>
    );
  }
}

export default AuthorsList;
