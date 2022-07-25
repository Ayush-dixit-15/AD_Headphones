import React, { useState } from 'react';

import { client, urlFor } from '../../lib/client';
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" /> 
          </div>
          </div>
          </div>
          </div>
      
  )
}



export const getStaticProps = async () => {
  const query = '*[_type == "product" ]';

  
  const products = await client.fetch(query);


 const bannerQuery= '*[_type == "banner"]';
 const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}

export default ProductDetails