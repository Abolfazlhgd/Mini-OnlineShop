import React from "react";

function Products(props) {
  return (
    <div>
      <ul className="products flex flex-wrap">
        {props.item.map((item) => (
          <li key={item.id}>
            <div className="product flex flex-col p-2 m-2 bg-white rounded-md space-y-2">
              <img className="w-52" src={item.image} alt="" />
              <p className="border-b-2">{item.title}</p>
              <div className="product-price flex justify-between text-center items-center my-1">
                <div className="price">{item.price}</div>
                <button
                  onClick={() => props.addProducts(item)}
                  className="bg-red-400 rounded-md text-white px-2 py-1 hover:shadow-md hover:bg-red-500 transition-all"
                >
                  add product
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
