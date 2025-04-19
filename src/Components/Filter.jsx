import React from "react";

function Filter(props) {
  console.log(props);
  return (
    <div className="filter flex w-5/6 justify-around space-x-5 ">
      <div className="result">Number Of Product: {props.count}</div>
      <div className="sort">
        <div className="sort-title text-center">Sort by</div>
        <div className="form-checkbox flex space-x-2">
          <div className="form-group">
            <input
              type="radio"
              value="asc"
              name="radioValues"
              onChange={props.sortProducts}
            />
            <label htmlFor="">Newest Product</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              value="desc"
              name="radioValues"
              onChange={props.sortProducts}
            />
            <label htmlFor="">Oldest Product</label>
          </div>
        </div>
      </div>
      <div className="brand flex flex-col">
        <span>Brand</span>
        <select value={props.brand} onChange={props.filterProducts}>
          <option value="">all</option>
          <option value="samsung">samsung</option>
          <option value="iphone">iphone</option>
          <option value="xiaomi">xiaomi</option>
          <option value="google">google</option>
          <option value="sony">sony</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
