import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import { useLocation } from 'react-router-dom';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let keyword = location.search

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  const { error, loading, products } = useSelector(state => state.productList);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading
        ? (
          <Loader />
          )
        : error
          ? (
            <Message variant='danger'>
              {error}
            </Message>
            )
          : (
            <Row>
              {products.map(product => (
                <Col
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            )}
    </div>
  );
};

export default HomeScreen;
