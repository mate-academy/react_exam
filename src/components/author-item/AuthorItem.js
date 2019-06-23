import React from 'react';
import { connect } from 'react-redux';
import { selectItem, changeItem, changeInputValue } from '../../actions/action-creaters';
import Changer from '../changer/Changer'

const AuthorItem = (props) => {
  const {
    author,
    index,
    selectedIndex,
    selectItem,
  } = props;
  const item = (index === selectedIndex)
    ? <Changer />
    : <div className="author-item" onClick={() => selectItem(index, author)}>{author}</div>;
  return (
    item
  );
};

const mapStateToProps = ({ selectedIndex, inputValue }) => {
  return { selectedIndex, inputValue };
};

const mapDispatchToProps = {
  selectItem,
  changeItem,
  changeInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorItem);
