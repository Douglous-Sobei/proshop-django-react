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
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} style={{ display: 'inline-block' }}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2"
        style={{ display: 'inline-block' }}
      />
      <Button type="submit" variant="outline-success" className="p-2" style={{ display: 'inline-block' }}>
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
