import React from 'react';
import './App.scss';
import ListItem from './components/ListItem';
import ItemsList from './components/ItemsList';
import { connect } from 'react-redux';
import { loadAuthors } from './redux/actions';

const mapStateToProps = state => {
  return {
    renderItems: state.renderItems,
    requestedData: state.requestedData,
    loadedData: state.loadedData
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadAuthors: () => dispatch(loadAuthors())
  };
}

class ConnectedApp extends React.Component {
  render() {
    if (this.props.requestedData) {
      if (this.props.renderItems != null)
        return <ItemsList items={this.props.renderItems} />
      else
        return <p> Loading... </p>
    }
    return <button onClick={this.props.loadAuthors}>Load</button>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
