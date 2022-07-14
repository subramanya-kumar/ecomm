import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { productDetailsActions } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

export default function ProductScreen() {
  const params = useParams();
  const { id: productId } = params;
  const productDetails = useSelector((state) => state.productListDetails);
  const { error, loading, products } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetailsActions(productId));
  }, [dispatch, productId]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to Home</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={products.image} alt={products.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{products.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={products.rating}
                    numReviews={products.numReviews}
                  />
                </li>
                <li>Price: {products.price} INR</li>
                <li>Description: {products.description}</li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price </div>
                      <div>{products.price} INR</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {products.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Out of Stock</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
