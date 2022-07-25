import Link from 'next/link'
import React from 'react'

const MainBanner = ({ mainBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">
          {mainBanner.smallText}
          </p>
          <h3>
            MID TEXT
          </h3>
          <img src="" alt="headphones" className='hero-banner-image'/> 
          <div> 
            <Link href = "/product/ID">
              <button type="button">Button text</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>
                Description
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MainBanner