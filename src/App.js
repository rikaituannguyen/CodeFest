import { Layout, Form, Matrix } from './components';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({ matrix: '12-9', start: '1-C', end: '12-B' });

  return (
    <Layout>
      <Matrix form={form} />

      <Form form={form} setForm={setForm} />
    </Layout>
  );
}

export default App;
