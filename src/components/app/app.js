import React, { Component } from 'react';
import Spinner from "../spinner/spinner";
import AuthorList from '../list';
import SwapiService from "../../services/swapi-service"; 
import './app.css';

export default class App extends Component {
  
  swapiService = new SwapiService();

  state = {
    newItems: null
  };

  componentDidMount() {
    this.swapiService
      .getAllAuthor()
      .then((peopleList) => {
        let newItems = peopleList.map(function(item, index){
          return { 'id':index, 'label':item, }});
        this.setState({
          newItems
        });
      });
  } 
  
  maxId = 100;

  onDelete = (id) => {
    
    this.setState((state) => {
      const idx = state.newItems.findIndex((item) => item.id === id);
      const newItems = [
        ...state.newItems.slice(0, idx),
        ...state.newItems.slice(idx + 1)
      ];
      return { newItems };
    });
  };

  render() {
    const { newItems} = this.state;
    if (!newItems) {
      return <Spinner />;
    }
     
    return (
      <div className="todo-app"><h2>List of authors</h2>        
        <AuthorList
          items={ this.state.newItems }
          onDelete={this.onDelete}
          onItemAdded={this.onItemAdded} />

      </div>
    );
  };
}
