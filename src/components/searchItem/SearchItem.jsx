import React from 'react';
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square200/301279844.webp?k=8ea7f961c3239aa3bba48c655b73214fe4ca333bb1990e606e753722ff01611c&o=&s=1" alt="" className="siItem" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures"> Entire studio - 1 bathroom - 21mt2 1 full bed</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">
                    $123
                </span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem