import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="dublin" className="featuredImg" />
          <div className="featuredTitles">
              <h1>Dublin</h1>
              <h2>123 properties</h2>
          </div>
      </div>
      <div className="featuredItem">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Bosphorus_Bridge_%28235499411%29.jpeg" alt="istanbul" className="featuredImg" />
          <div className="featuredTitles">
              <h1>İstanbul</h1>
              <h2>123 properties</h2>
          </div>
      </div>
      <div className="featuredItem">
          <img src="https://i4.hurimg.com/i/hurriyet/75/1110x740/5931128ac03c0e3efce6f353.jpg" alt="londra" className="featuredImg" />
          <div className="featuredTitles">
              <h1>Londra</h1>
              <h2>123 properties</h2>
          </div>
      </div>
    </div>
  )
}

export default Featured
