import React from 'react';
import Author from "./Author";

export default class AuthorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      index: null,
      input: ''
    };
    this.authorRemoved = this.authorRemoved.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.getInput = this.getInput.bind(this);
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/authors');
    xhr.addEventListener('load', () => {
      this.setState({
        authors: JSON.parse(xhr.response),
      });
    });
    xhr.send();
  }

  authorRemoved(authorName) {
    this.setState(state => {
      return {
        authors: state.authors.filter(author => author !== authorName)
      };
    });
  }

  getIndex(index) {
    this.setState({
      index: index
    });
  }


  moveUp() {
    const listAuthors = [...this.state.authors]
    const selectedAuthor = listAuthors.splice(this.state.index, 1);
    listAuthors.splice(this.state.index - 1, 0, selectedAuthor[0]);
    console.log(listAuthors)
    this.setState((state) => {
      return {
        authors: [...listAuthors],
        index: this.state.index - 1
      };
    });
  }

  moveDown() {
    const listAuthors = [...this.state.authors]
    const selectedAuthor = listAuthors.splice(this.state.index, 1);
    listAuthors.splice(this.state.index + 1, 0, selectedAuthor[0]);

    this.setState((state) => {
      return {
        authors: [...listAuthors],
        index: this.state.index + 1
      };
    });
  }

  getInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    const authorComponents = [];
    let usersCounter = 0;
    for (const author of this.state.authors) {

      authorComponents.push(
        < Author author={author} key={author} index={usersCounter++}
          authorRemoved={this.authorRemoved} getIndex={this.getIndex}
          getInput={this.getInput} value={this.state.input} />
      );
    }


    return (
      <div>
        <ul>
          {authorComponents}
        </ul>
        <button disabled={(this.state.index === 0 || this.state.index === null) ? true : false} id="up" onClick={this.moveUp}> Move Up </button>
        <button disabled={(this.state.index > this.state.authors.length - 2 || this.state.index === null) ? true : false} id="down" onClick={this.moveDown} > Move Down </button>
      </div>
    );
  }
}
