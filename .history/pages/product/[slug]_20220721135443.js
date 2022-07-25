import React from 'react';

import { client,urlFor } from '../../lib/client';

const ProductDetails = () => {
  return (
    <div>
        <div className="product-detail-container">
            <div className="image-container">
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async ( {params: {slug}} ) =>{
    // it is a function which is used when the data required to render the page is available  at bui;d time ahead of a users request

    //data comes from a headless cms
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type=="product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
  
    return {
      props: {products,product}
    }
  }

export default ProductDetails