import React, { useState } from "react";
import data from "../Data/data.json";
import Card from "./Card";
import Filter from "./Filter";
import Products from "./Products";

function Home() {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [cardItems, setCardItems] = useState([]);

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };
  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(data.products);
    } else {
      setBrand(event.target.value);
      setItem(
        data.products.filter(
          (product) => product.availableBrand.indexOf(event.target.value) >= 0
        )
      );
    }
  };
  const addProducts = (product) => {
    const exist = cardItems.find((element) => element.id === product.id);
    if (exist) {
      setCardItems(
        cardItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, qty: 1 }]);
    }
  };
  const removeProducts = (product) => {
    const exist = cardItems.find((element) => element.id === product.id);
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((element) => element.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };

  return (
    <>
      <div>
        <header className="border flex justify-center align-middle p-4">
          <a
            className="p-2 shadow-sm bg-red-400/90 hover:bg-red-500 hover:shadow-lg hover:rounded-md transition-all text-white"
            href=""
          >
            Mini OnlineShop
          </a>
        </header>
        <main>
          <div className="content md:flex justify-between bg-sky-200/80">
            <div className="main flex flex-col space-y-2 space-x-3 p-2 md:w-3/4">
              <Filter
                count={item.length}
                sortProducts={sortProducts}
                brand={brand}
                filterProducts={filterProducts}
              ></Filter>
              <Products
                item={item}
                sortProducts={sortProducts}
                addProducts={addProducts}
              ></Products>
            </div>
            <div className="sidebar p-2 mx-2 md:w-1/4">
              <Card cardItems={cardItems} removeProducts={removeProducts} />
            </div>
          </div>
        </main>
        <footer className="ml-2 text-center mt-2">
          <span className="font-mono">Mini App Project 1.1</span>
        </footer>
      </div>
    </>
  );
}

export default Home;
