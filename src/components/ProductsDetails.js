import React from 'react'
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const params = useParams();

    console.log(params);
  return (
    <div>
        <h1>Product details page</h1>
        <p>{params.id}</p>
    </div>
  )
}

export default ProductsDetails