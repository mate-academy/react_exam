import React, { Component } from 'react';
import updateAuthor from '../actions/UpdateAuthor';
import { connect } from 'react-redux';


class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changing: false,
      id: this.props.author.id,
      name: this.props.author.name
    }

    this.onUpdateAuthor = this.onUpdateAuthor.bind(this);
    this.onChangeName   = this.onChangeName.bind(this);
    this.onEditName     = this.onEditName.bind(this);
  }

  onUpdateAuthor(){
    this.state.changing = false;

    this.props.onUpdateAuthor({
      id: this.state.id,
      name: this.state.name
    });

    this.state.name = this.props.author.name;
    this.changing = false;
    this.setState(this.state);
  }

  onChangeName(e){
    this.state.name = e.target.value;
    this.setState(this.state);
  }

  onEditName(){
    this.state.changing = true;
    this.setState(this.state);
    console.log(this.state);
  }

  render(){
    return (
      <div className={"author " + (this.state.changing ? 'changing' : '')}>
        <div className="author__name">
          <span>{ this.props.author.name }</span> 
          <input value={this.state.name} onChange={ this.onChangeName } />
        </div>
        <div className="author__edit">
          <button className="author__edit-edit" onClick={this.onEditName}>Edit</button>
          <button className="author__edit-change" onClick={this.onUpdateAuthor}>Change</button>
        </div>
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
  onUpdateAuthor: updateAuthor
}

export default connect(MapStateToProps, MapActionsToProps)(Author);