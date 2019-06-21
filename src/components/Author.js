import React from 'react'

class Author extends React.Component {
  constructor(props) {
    super(props);
    this.removeClicked = this.removeClicked.bind(this);
    this.selectedIndex = this.selectedIndex.bind(this);
    this.changedName = this.changedName.bind(this);
  }

  removeClicked(event) {
    this.props.authorRemoved(this.props.author);
    event.preventDefault();
  }

  selectedIndex() {
    this.props.getIndex(this.props.index);
  }

  changedName(event) {
    this.props.getInput(this.props.input);
  }

  render() {
       return (
      <li onClick={this.selectedIndex}>
        {this.props.author}
        <input type='text' onInput={this.changedName} onChange={this.props.value}></input>
        <a href='#' onClick={this.removeClicked} > &times; </a>
      </li>
    );
  }
}

export default Author;