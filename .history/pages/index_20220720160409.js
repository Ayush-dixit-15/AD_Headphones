import React from 'react'

import { client } from '../lib/client';

import { Product, FooterBanner ,  MainBanner, Footer } from '../components';

const Home = () => {
  return (
    <>
        <MainBanner />

        <div  className='products-heading'>
          <h2>
            Best Selling Products
          </h2>
          <p>
            Variety of speakers
          </p>
        </div>

        <div className='products-container'>
          {['Product 1' , 'Product 2'].map((product)=>product)}
        </div>

       <FooterBanner/>
       <Footer/>
    </>
  );
}
export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]'
}
export default Home;