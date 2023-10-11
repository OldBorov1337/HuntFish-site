import React from 'react';
import ListItem from './ListItem';

const List = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

export default List;
