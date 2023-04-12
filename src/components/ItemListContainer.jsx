import React from 'react';

const ItemListContainer = ({ title }) => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default ItemListContainer;
