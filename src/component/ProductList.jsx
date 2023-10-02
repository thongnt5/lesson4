import React from "react";
import { hotTrend } from "../data/data.jsX";
import Product from "./Product";
export default function ProductList() {
  return (
    <div className="products_container">
      <h3 >TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h3>
      <div className="ListProduct">
        {hotTrend.map((product, i) => (
          <Product
            img={product.img}
            name={product.name}
            price={product.price}
            discount={product.discount}
            chip={product.chip}
            sizeScreen={product.sizeScreen}
            ram={product.ram}
            rom={product.rom}
          />
        ))}
      </div>
    </div>
  );
}
