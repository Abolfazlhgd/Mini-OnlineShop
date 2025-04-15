import React, { useState } from "react";
import data from "../Data/data.json";
import Card from "./Card";
import Filter from "./Filter";
import Products from "./Products";

function Home() {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.ia < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.ia > b.id ? 1 : -1)));
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
          <div className="content flex justify-between bg-sky-200/80">
            <div className="main flex flex-col space-y-2 space-x-3 p-3">
              <Filter count={item.length} sortProducts={sortProducts}></Filter>
              <Products item={item} sortProducts={sortProducts}></Products>
            </div>
            <div className="sidebar p-2 mx-2">
              <Card />
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
