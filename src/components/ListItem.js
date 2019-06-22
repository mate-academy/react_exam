import React from 'react';
import { connect } from 'react-redux';
import { addOrder, removeOrder, removeAuthor, editAuthor, startEditingAuthor, stopEditingAuthor } from '../redux/actions';

const mapStateToProps = state => {
    return { ...state };
};

function mapDispatchToProps(dispatch) {
    return {
        addOrder: (payload) => dispatch(addOrder(payload)),
        removeOrder: (payload) => dispatch(removeOrder(payload)),
        removeAuthor: (payload) => dispatch(removeAuthor(payload)),
        editAuthor: (payload) => dispatch(editAuthor(payload)),
        startEditingAuthor: (payload) => dispatch(startEditingAuthor(payload)),
        stopEditingAuthor: (payload) => dispatch(stopEditingAuthor(payload))
    };
}


function ListItem({ value, addOrder, removeOrder, removeAuthor, startEditingAuthor, stopEditingAuthor, editAuthor }) {

    let nameField;
    if (value.selected) {
        nameField =
            <td className="name__field">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let input = document.getElementById('inputName');
                    editAuthor({ id: value.id, name: input.value });
                    input.blur();
                }}>
                    <input id="inputName" defaultValue={value.name} onBlur={() => stopEditingAuthor({ id: value.id })} autoFocus />
                </form>
            </td>
    }
    else {
        nameField = <td className="name__field" onClick={() => startEditingAuthor({ id: value.id })}>{value.name}</td>
    }

    return (<tr>
        {nameField}
        <td class="updown__field">
            <a onClick={() => { removeOrder({ id: value.id }) }}>
                ⬆️
            </a>
            <a onClick={() => { addOrder({ id: value.id }) }}>
                ⬇️
            </a>
        </td>
        <td className="delete__field"> <a onClick={() => { removeAuthor({ id: value.id }) }}>✖️</a></td>
    </tr >);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);