import React from 'react';
import './index.scss';
import Item from './Item';

const index = (props) => {
  const {
    form: { matrix, start, end, locked },
  } = props;

  const convertMatrix = () => {
    if (!matrix) {
      return [];
    }
    return matrix.trim().split('-');
  };
  const convertLocked = () => {
    if (!locked) {
      return [];
    }
    return locked.trim().toUpperCase().split(',');
  };

  const matrixRel = convertMatrix();
  const lockedRel = convertLocked();

  const renderItems = () => {
    const width = parseInt(matrixRel[0]);
    const height = parseInt(matrixRel[1]);

    const chars = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];

    const arr = [];

    for (let i = width; i > 0; i -= 1) {
      for (let j = 0; j < height; j += 1) {
        arr.push(`${i}-${chars[j]}`);
      }
    }

    return arr.map((item, index) => {
      return (
        <Item key={index} item={item} start={start} end={end} locked={lockedRel}>
          {item}
        </Item>
      );
    });
  };

  //   const renderLefts = () => {
  //     const len = parseInt(matrixRel[0]);

  //     return range(0, len).map((_, index) => {
  //       return <Item key={index}>{index + 1}</Item>;
  //     });
  //   };

  return (
    <div className='container'>
      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: `1fr`,
          gridTemplateRows: `repeat(${parseInt(matrixRel[0])}, 1fr)`,
        }}
        className='left'
      >
        {renderLefts()}
      </div> */}

      <div
        className='matrix'
        style={{
          gridTemplateColumns: `repeat(${parseInt(matrixRel[1])}, 1fr)`,
          gridTemplateRows: `repeat(${parseInt(matrixRel[0])}, 1fr)`,
        }}
      >
        {renderItems()}
      </div>
      {/* <div>Bottom</div> */}
    </div>
  );
};

export default index;
