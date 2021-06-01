import React from "react";
import ShoppingItem from "./shopping_item";
import "./styles/preview.scss";

const Preview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <ShoppingItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
