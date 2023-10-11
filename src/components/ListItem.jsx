import React from 'react';

const ListItem = ({ item, onItemClick }) => {
  return (
    <div>
      <button onClick={() => onItemClick(item.id)}>{item.name}</button>
    </div>
  );
};

export default ListItem;