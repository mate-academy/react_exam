import React, { Component, Fragment } from 'react'

export default class AuthorList extends Component {
  constructor(props) {
    super(props);
    this.liClick = this.liClick.bind(this);
  }

  liClick() {
    return this.props.liClicked
  }

  render() {
    if (!this.props.request) {
      return (
        <button onClick={this.props.loadItems}>Load</button>
      )
    } else {
        return (
          <Fragment>
            <ul>
              {this.props.list.map((li, index) => {
                if (!li.edit) { 
                  return <li key={index} id={li.id} onClick={() => this.props.liClicked(index)}>
                            {li.title}
                            <button onClick={() => this.props.edit(li.title)}> edit</button>
                            <button onClick={() => this.props.remove(li.title)}> remove</button>
                         </li>
                } else {
                    return <li key={index} onClick={() => this.props.liClicked(index)}>
                              <input type="text"  
                                defaultValue={li.title} id={li.id}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && e.target.value !== '') {
                                    this.props.changeTitle(e.target.value);
                                };
                              }}/>
                              <button 
                                onClick={() => this.props.remove(li.title)}
                              > remove</button>
                            </li>
                };
              })} 
            </ul>
            <button disabled={this.props.index === 0} onClick={this.props.upAuthor}>Author Up</button>
            <button disabled={this.props.index === this.props.list.length - 1} onClick={this.props.downAuthor}>Author Down</button>
          </Fragment>          
        )
    };
  };
};


