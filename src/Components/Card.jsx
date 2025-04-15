import React from "react";

function Card() {
  return (
    <>
      <div className="empty-price">سبد خرید خالی است.</div>
      <div className="card-item flex flex-col">
        <div className="product-item flex justify-between w-full">
          <div className="product-detail flex">
            <img className="w-28 rounded-md" src="images/iphone4.jpg" alt="" />
            <h2>first product</h2>
          </div>
          <div className="product-price">
            <div className="price">
              <span>1000000</span>
              <span className="qty">Buy 1</span>
            </div>
            <div className="remove-item">
              <button className="bg-red-400/85 p-1 rounded-md text-white hover:bg-red-600 transition-all">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="total-price flex">
        <div className="total-text">مجموع قیمت :</div>
        <div className="total">1500000 تومان</div>
      </div>
    </>
  );
}

export default Card;
