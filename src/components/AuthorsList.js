import React from 'react';
import PropTypes from 'prop-types';

function AuthorsList(props) {
  const { children, loading, loadingAuthorsList } = props;

  return (
    <div className="list-wrapper">
      {children}
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
  children: null,
  loading: null,
};

AuthorsList.propTypes = {
  children: PropTypes.oneOf([
    null,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  loading: PropTypes.bool,
  loadingAuthorsList: PropTypes.func.isRequired,
};

export default AuthorsList;
