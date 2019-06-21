import React from 'react';
import Button from '../button/Button';
import { connect } from "react-redux";
import { changeInputValue, changeItem, deleteItem } from "../../actions/action-creaters";

function Changer(props) {
  const {
    inputValue,
    changeInputValue,
    changeItem,
    deleteItem
  } = props;
  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => changeInputValue(event.target.value)}/>
      <Button text={'Change Author'} clickAction={() => changeItem(inputValue)}/>
      <Button text={'Delete Author'} clickAction={() => deleteItem()}/>
    </>
  );
}

const mapStateToProps = ({ inputValue }) => {
  return { inputValue };
};

const mapDispatchToProps = {
  changeInputValue,
  changeItem,
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Changer);
