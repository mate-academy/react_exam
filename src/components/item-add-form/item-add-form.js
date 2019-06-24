import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label:  ''
  };
  
  createItem(label) {
    return {
      id: ++this.maxId,
      label
    };
  } 
  
  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.item.label = this.state.label;
    console.log('vvv2',this.props.item);
  };

  render() {
    const {label1} = this.props;
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control new-todo-label"
               onChange={this.onLabelChange}
               placeholder={label1}
               value={this.state.label} />
               <button type="submit"
              className="btn btn-outline-danger btn-sm float-right"
              >Save</button>


               
      </form>
    );
  }
}
