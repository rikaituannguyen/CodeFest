import React from 'react';

const Item = (props) => {
  const { item, start, end, locked } = props;

  return (
    <div
      className={`item ${item === start ? 'start' : ''} ${item === end ? 'end' : ''} ${
        locked.includes(item) ? 'locked' : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Item;
