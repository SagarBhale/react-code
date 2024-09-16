import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncgetproducts } from '../store/actions/ProductActions';

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [dispatch]);

  const DeleteHandler = (index) => {
    // You need to dispatch a delete action for the product here
    // Example: dispatch(deleteProduct(index));
    console.log('Product deleted at index:', index);
  };

  return (
    <>
      <div className="main-content">
        <h1 className="heading-main-content">Products List</h1>
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div key={product.id}>
              <h1>
                {product.title}{' '}
                <span
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={() => DeleteHandler(index)}
                >
                  X
                </span>
              </h1>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Products;
