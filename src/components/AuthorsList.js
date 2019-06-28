import React from 'react';
import PropTypes from 'prop-types';
import './AuthorsList.css';
import { AUTHOR_DISPLACE_MARKERS, AUTHOR_ITEM_STATES } from '../redux/actions';
import AuthorItemHandler from './AuthorItemHandler';

function AuthorsList(props) {
  const {
    loading,
    loadingAuthorsList,
    authorsRenderList,
    focusedAuthorId,
    focusedItemState,
  } = props;
  let focusedOccurred = false;
  let marker;

  const list = authorsRenderList
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

  return (
    <div className="list-wrapper">
      {list}
      {!loading && (
        <button
          type="button"
          disabled={loading}
          className="load-button"
          onClick={loadingAuthorsList}
        >
          {loading ? 'Loading data...' : 'Load authors data'}
        </button>
      )}
    </div>
  );
}

AuthorsList.defaultProps = {
  loading: null,
  authorsRenderList: null,
  focusedAuthorId: null,
  focusedItemState: null,
};

AuthorsList.propTypes = {
  authorsRenderList: PropTypes.arrayOf(PropTypes.string),
  focusedAuthorId: PropTypes.string,
  focusedItemState: PropTypes.string,
  loading: PropTypes.bool,
  loadingAuthorsList: PropTypes.func.isRequired,
};

export default AuthorsList;
