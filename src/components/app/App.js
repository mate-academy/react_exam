import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../spiner/Spiner';
import { authorRequested, authorLoaded } from '../../actions/action-creaters';
import AuthorsService from '../../services/authors-service';
import AuthorList from '../author-list/AuthorList';
import Controllers from '../controllers/Controllers'
const authorsService = new AuthorsService();

class App extends Component {
  componentDidMount() {
    const {
      authorRequested,
      authorLoaded
    } = this.props;

    authorRequested();
    authorsService.getAuthors()
      .then(data => authorLoaded(data));
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
  authorRequested,
  authorLoaded
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
