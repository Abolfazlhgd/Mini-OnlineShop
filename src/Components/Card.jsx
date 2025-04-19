import React from "react";

function Card(props) {
  const { cardItems, removeProducts } = props;
  return (
    <>
      <div className="empty-price">Basket is empty!</div>
      <div className="cart-item">
        {cardItems.map((item) => (
          <div className="product-item flex justify-around" key={item.id}>
            <div className="product-detail w-40">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
            </div>
            <div className="product-price">
              <div className="price flex flex-col">
                <span>{item.price}</span>
                <span className="qty">{item.qty} buy</span>
              </div>
              <div className="remove-item">
                <button
                  className="border bg-red-500 p-1 rounded-md text-white"
                  onClick={() => removeProducts(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <div className="total-text">total price:</div>
        <div className="total">1500000 $</div>
      </div>
    </>
  );
}

export default Card;
