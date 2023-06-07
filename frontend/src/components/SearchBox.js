import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate(pathname);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <Form onSubmit={submitHandler}>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          className='mr-sm-2 ml-sm-5'
        />
        <Button type='submit' variant='outline-success' className='p-2'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SearchBox;
