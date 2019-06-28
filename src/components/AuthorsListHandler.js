import { connect } from 'react-redux';
import AuthorsList from './AuthorsList';
import {
  displayAuthors,
  loadingAuthorsList,
} from '../redux/actions';

function mapStateToProps(state) {
  const {
    authorsRenderList,
    loading,
    focusedItemState,
    focusedAuthorId,
  } = state;

  return {
    authorsRenderList,
    loading,
    focusedItemState,
    focusedAuthorId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingAuthorsList: () => {
      dispatch(loadingAuthorsList());

      const xhr = new XMLHttpRequest();

      xhr.open(
        'GET',
        'https://my-json-server.typicode.com/mate-academy/'
          + 'literary-blog/authors',
      );
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.readyState === 4) {
          dispatch(displayAuthors(xhr.response));
        }
      });
      xhr.send();
    },
  };
}

const AuthorsListHandler = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsList);

export default AuthorsListHandler;
