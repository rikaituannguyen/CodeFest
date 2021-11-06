import React from 'react';
import { Button, FormControl, TextField } from '@mui/material';

import './index.scss';

const index = (props) => {
  const { form, setForm, onStart } = props;

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='form'>
      <FormControl className='form-control'>
        <TextField
          id='outlined-basic'
          label='Matrix'
          variant='outlined'
          value={form.matrix}
          name='matrix'
          onChange={onChange}
        />
        {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl className='form-control double'>
        <TextField
          id='outlined-basic'
          label='Start'
          variant='outlined'
          value={form.start}
          name='start'
          onChange={onChange}
        />
        {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
        <TextField
          id='outlined-basic'
          label='End'
          variant='outlined'
          value={form.end}
          name='end'
          onChange={onChange}
        />
        {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl className='form-control'>
        <TextField
          id='outlined-basic'
          label='Locked'
          variant='outlined'
          value={form.locked}
          name='locked'
          onChange={onChange}
        />
        {/* <FormHelperText id='my-helper-text'>We'll never share your email.</FormHelperText> */}
      </FormControl>

      <Button variant='contained' onClick={onStart}>
        Start
      </Button>
    </div>
  );
};

export default index;
