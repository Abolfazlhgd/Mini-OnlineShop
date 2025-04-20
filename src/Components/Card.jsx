import React from "react";

function Card(props) {
  const { cardItems, removeProducts } = props;
  const itemPrice = cardItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemPrice;
  return (
    <>
      {cardItems.length === 0 ? (
        <div className="empty-price bg-blue-300 text-center rounded-sm p-1 text-blue-800 font-semibold">
          Basket is empty!
        </div>
      ) : (
        <div className="total-item bg-blue-300 text-center rounded-sm p-1 text-blue-800 font-semibold">
          You Have {cardItems.length} in your Basket
        </div>
      )}
      <div className="cart-item flex flex-col space-y-2">
        {cardItems.map((item) => (
          <div
            className="product-item flex justify-around py-2 mt-3 bg-sky-300"
            key={item.id}
          >
            <div className="product-detail w-40">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
            </div>
            <div className="product-price flex flex-col justify-between">
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
      <div className="total-price bg-teal-300 rounded-sm mt-5 flex justify-center gap-3">
        <div className="total-text">total price</div>
        <div className="total font-semibold">{totalPrice}$</div>
      </div>
    </>
  );
}

export default Card;
