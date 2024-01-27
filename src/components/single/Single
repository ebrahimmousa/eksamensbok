
import React from "react";
import { useParams } from "react-router-dom";
import { useGetproductByNameQuery } from "../Redux/product";

const SingleProduct = () => {
  const { productName } = useParams();
  const { data, error, isLoading } = useGetproductByNameQuery(productName);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    const product = data.data[0]; 

    return (
      <div>
        <h1>{product.attributes.productName}</h1>
        <p>{product.attributes.description}</p>
        {/* Render other product details as needed */}
      </div>
    );
  }

  return null;
};

export default SingleProduct;
