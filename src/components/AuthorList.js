import React, { Component } from 'react';
import Author from './Author';
import { connect } from 'react-redux';
import updateAuthors from '../actions/UpdateAuthors';

class AuthorList extends Component {
  constructor(props) {
    super(props);

    this.onUpdateAuthors = this.onUpdateAuthors.bind(this);
  }

  onUpdateAuthors(){
    fetch('http://my-json-server.typicode.com/mate-academy/literary-blog/authors')
    .then((response) => response.json())
    .then((authors) => {
      this.props.onUpdateAuthors(authors);
    });
  }

  render(){
    return (
      <div className="authors">
        <div className="authors__head">
          <button className="authors__update" onClick={ this.onUpdateAuthors }>Обновить</button>
        </div>
        { this.props.authors.map((author => <Author key={ author.id } author={ author } />)) }
      </div>  
    );
  }
}


const MapStateToProps = (state, ownProps) => {
  return {
    authors: state.authors || ownProps.authors
  }
};

const MapActionsToProps = {
  onUpdateAuthors: updateAuthors
}

export default connect(MapStateToProps, MapActionsToProps)(AuthorList);
