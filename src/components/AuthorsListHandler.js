import React from 'react';
import { connect } from 'react-redux';
import AuthorsList from './AuthorsList';
import {
  AUTHOR_ITEM_STATES,
  AUTHOR_DISPLACE_MARKERS,
  displayAuthors,
  loadingAuthorsList,
} from '../redux/actions';
import AuthorItemHandler from './AuthorItemHandler';

function mapStateToProps(state) {
  const {
    authorsRenderList,
    loading,
    focusedItemState,
    focusedAuthorId,
  } = state;
  let focusedOccurred = false;
  let marker;
  const children = authorsRenderList
    ? authorsRenderList.map(
      (authorId) => {
        if (authorId === focusedAuthorId) { focusedOccurred = true; }
        marker = '';
        if (
          focusedItemState === AUTHOR_ITEM_STATES.MOVING
          && focusedAuthorId !== authorId
        ) {
          if (focusedOccurred === true) {
            marker = AUTHOR_DISPLACE_MARKERS.BELOW;
          } else {
            marker = AUTHOR_DISPLACE_MARKERS.ABOVE;
          }
        }

        return (
          <AuthorItemHandler
            key={authorId}
            id={authorId}
            marker={marker}
          />
        );
      }
    ) : null;

  return {
    children,
    loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadingAuthorsList: () => {
      dispatch(loadingAuthorsList());

      const xhr = new XMLHttpRequest();

      xhr.open(
        'GET',
        'http://my-json-server.typicode.com/mate-academy/literary-blog/authors',
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
