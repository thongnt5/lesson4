import React from "react";

export default function Product(props) {
  const { img, name, price, discount, chip, sizeScreen, ram, rom } =
    props;
  return (
    
    <div className="product__Item">
      <img className="" src={img} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Discount: {discount}</p>
        <p>Chip: {chip}</p>
        <p>Size: {sizeScreen}</p>
        <p>Ram: {ram}</p>
        <p>Rom: {rom}</p>
      </div>
    </div>
    
  );
}
