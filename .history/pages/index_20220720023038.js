import React from 'react'

const Home = () => {
  return (
    <>
        MainBanner

        <div>
          <h2 className='products-heading'>
            Best Selling Products
          </h2>
          <p>
            Variety of speakers
          </p>
        </div>

        <div>
          {['Product 1' , 'Product 2'].map((product)=>{product})}
        </div>


        Footer
    </>
  )
}

export default Home;