import React from 'react';

const ItemPage = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.Foto}</p>
      
    </div>
  );
};

export default ItemPage;
