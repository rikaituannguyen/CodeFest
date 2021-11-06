import { Layout, Form, Matrix } from './components';
import { useState } from 'react';
import { bfs } from './components/Matrix/bfs';

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

function App() {
  const [form, setForm] = useState({
    matrix: '12-9',
    start: '1-C',
    end: '12-B',
    locked: '2-D,2-B,3-D,3-E,4-D',
  });

  const [arrBFS, setArrBFS] = useState([]);

  const convertMatrix = () => {
    if (!form.matrix) {
      return [];
    }
    return form.matrix.trim().split('-');
  };
  const convertLocked = () => {
    if (!form.locked) {
      return [];
    }
    return form.locked.trim().toUpperCase().split(',');
  };

  const convertPoint = (point) => {
    const matrixRel = convertMatrix();

    const width = parseInt(matrixRel[0]);
    const height = parseInt(matrixRel[1]);

    const arr = point.split('-');
    const index2 = chars.findIndex((o) => o === arr[1]);

    return [parseInt(arr[width - 1]) - 1, height - index2];
  };

  const onStart = () => {
    const matrixRel = convertMatrix();
    const lockedRel = convertLocked();

    const width = parseInt(matrixRel[0]);
    const height = parseInt(matrixRel[1]);

    const arrClone = [];

    for (let i = width; i > 0; i -= 1) {
      const arrTemp = [];
      for (let j = 0; j < height; j += 1) {
        arrTemp.push(lockedRel.includes(`${i}-${chars[j]}`) ? 1 : 0);
      }
      arrClone.push(arrTemp);
    }

    setArrBFS(arrClone);

    const result = bfs(convertPoint(form.start), convertPoint(form.end), arrBFS);
    if (!result) {
      alert('Chướng ngại vật trùng điểm đi hoặc điểm đến');
    }
    console.log(result);
  };

  return (
    <Layout>
      <Matrix form={form} setArrBFS={setArrBFS} />

      <Form form={form} setForm={setForm} onStart={onStart} />
    </Layout>
  );
}

export default App;
