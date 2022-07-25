import React from 'react'

const Home = () => {
  return (
    <>
        MainBanner

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


        Footer
    </>
  )
}

export default Home;