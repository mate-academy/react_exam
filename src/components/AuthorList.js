import React, { Component } from 'react';
import AuthorHandler from './AuthorHandler';
import './AuthorList.css'

export default class AuthorList extends Component {
  render() {
    return (
      !this.props.requested
        ? <div className="btn-preLoad" onClick={this.props.load}>Load</div>
        : (this.props.authors === null)
        ? <div className="🤚">
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="👉"></div>
            <div className="🌴"></div>
            <div className="👍"></div>
          </div>
        : this.props.authors.map((author, index) =>
          <AuthorHandler
            key={index}
            author={author}
            authorIndex={index}
            allAuthor={this.props.authors}
          />
      )
    )
  }
}
