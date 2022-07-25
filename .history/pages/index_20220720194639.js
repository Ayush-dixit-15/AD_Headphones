import React from 'react'

import { client } from '../lib/client';

import { Product, FooterBanner ,  MainBanner, Footer } from '../components';

const Home = ( { products, bannerData }) => {
  return (
    <>
        <MainBanner mainBanner={bannerData.length && bannerData[0]} />
           {console.log(bannerData)}
        <div  className='products-heading'>
          <h2>
            Best Selling Products
          </h2>
          <p>
            Variety of speakers
          </p>
        </div>

        <div className='products-container'>
          {products?.map((product)=><Product key={products._id} product={product}/>)}
        </div>

       <FooterBanner/>
       <Footer/>
    </>
  );
}
export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}
export default Home;