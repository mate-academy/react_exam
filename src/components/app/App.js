import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spiner/Spiner';
import { dataLoading } from '../../actions/action-creaters';

import AuthorList from '../author-list/AuthorList';
import Controllers from '../controllers/Controllers';


class App extends Component {
  componentDidMount() {
    const {
      dataLoading
    } = this.props;

    dataLoading();
  }

  render() {
    const { authors, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <AuthorList authors={authors}/>
        <Controllers/>
      </>
    );
  }
}

const mapStateToProps = ({ authors, loading }) => {
  return { authors, loading };
};

const mapDispatchToProps = {
  dataLoading
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
