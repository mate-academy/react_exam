import { connect } from 'react-redux';
import { Editor } from './Editor';
import { 
  changeInputValue,
  saveChangedValue
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    input: state.input
  }
}

function mapdDispatcToProps(dispatch) {
  return {
    changeInputValue: (input) => dispatch(changeInputValue(input)),
    saveChangedValue: () => dispatch(saveChangedValue())
  }
}

export const EditorHandler = connect(mapStateToProps, mapdDispatcToProps)(Editor);