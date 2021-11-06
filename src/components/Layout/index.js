import React from 'react';
import Header from '../Header';
import './index.scss';

const index = (props) => {
  return (
    <>
      <Header />

      <div className='layout'>{props.children}</div>
    </>
  );
};

export default index;
