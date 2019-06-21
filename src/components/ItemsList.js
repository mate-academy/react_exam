import React from 'react';
import ListItem from './ListItem';

export default ({ items }) => {
    let listItems = items.map(value => {
        return <ListItem value={value}></ListItem>
    });

    return <table>
        <tr>
            <th>Name</th>
            <th>Sort</th>
            <th>Delete</th>
        </tr>
        
        {listItems}
    </table>
}