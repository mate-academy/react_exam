import React from 'react';
import Button from '../button/Button'
import {clearSelection, moveSelectionUp, moveSelectionDown} from "../../actions/action-creaters";
import {connect} from "react-redux";

function Controllers(props) {
  const {
    selectedIndex,
    authors,
    clearSelection,
    moveSelectionUp,
    moveSelectionDown,
  } = props;
  const isUpDisabled = selectedIndex === null || selectedIndex === 0;
  const isDownDisabled = selectedIndex === null || selectedIndex === (authors.length - 1);
  const isClearDisabled = selectedIndex === null;
  return (
    <div>
      <Button text={'Up'} clickAction={() => moveSelectionUp()} disabled={isUpDisabled}/>
      <Button text={'Down'} clickAction={() => moveSelectionDown()} disabled={isDownDisabled}/>
      <Button text={'Clear selection'} clickAction={() => clearSelection()} disabled={isClearDisabled}/>
    </div>
  );
}

const mapStateToProps = ({ selectedIndex, authors}) => {
  return { selectedIndex, authors };
};

const mapDispatchToProps = {
  clearSelection,
  moveSelectionUp,
  moveSelectionDown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);

