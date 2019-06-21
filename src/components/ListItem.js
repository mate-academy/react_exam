import React from 'react';
import { connect } from 'react-redux';
import { addOrder, removeOrder, removeAuthor } from '../redux/actions';

const mapStateToProps = state => {
    return { ...state };
};

function mapDispatchToProps(dispatch) {
    return {
        addOrder: (payload) => dispatch(addOrder(payload)),
        removeOrder: (payload) => dispatch(removeOrder(payload)),
        removeAuthor: (payload) => dispatch(removeAuthor(payload))
    };
}


function ListItem({ value, addOrder, removeOrder, removeAuthor }) {
    return (<tr>
        <td className="name__field">{value.name}</td>
        <td class="updown__field">
            <a onClick={() => { removeOrder({ id: value.id }) }}>
                ⬆️
            </a>
            <a onClick={() => { addOrder({ id: value.id }) }}>
                ⬇️
            </a>
        </td>
        <td className="delete__field" onClick={() => { removeAuthor({ id: value.id }) }}>✖️</td>
    </tr>);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);