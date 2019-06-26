import React, {Component} from 'react';
import AuthorItemHandler from "./AuthorItemHandler";

class AuthorList extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }
  componentDidMount() {
    this.clickEvent = (event) => {
      if(this.props.selectedItemIndex !== null && !this.container.current.contains(event.target)) {
        this.props.deselectItem();
      }
    };
    document.addEventListener('click', this.clickEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('click',this.clickEvent);
  }

  render() {
    if (!this.props.requested) {
      return <button onClick={this.props.load}>Load</button>
    } else if (this.props.authors === null) {
      return <span>Loading...</span>
    } else {
      return <div ref={this.container}>{this.props.authors.map((author,index) => <AuthorItemHandler
        key={index}
        author={author}
        authorIndex={index}/>)}
      </div>
    }
  }
}

export default AuthorList;