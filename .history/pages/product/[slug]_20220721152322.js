// import React, { useState } from 'react';
// import { client, urlFor } from '../../lib/client';
// import { Product } from '../../components';


// const ProductDetails = ({ product, products }) => {
//   const { image, name, details, price } = product;
//   const [index, setIndex] = useState(0);
//   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

//   return (
//     <div>
//       <div className="product-detail-container">
//         <div>
//           <div className="image-container">
//             <img src={urlFor(image && image[index])} className="product-detail-image" />
//           </div>
        
//         </div>
//       </div>
//       </div>
      
//   )
// }

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: { 
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps = async ({ params: { slug }}) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'
  
//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }

// export default ProductDetails