import React, {useState} from "react";
import ShoppingItem from "./shopping_item";
import "./styles/preview.scss";

const Preview = ({title, items, routeName}) => {
  const [index, setIndex] = useState([0, 4]);
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.slice(index[0], index[1]).map(item => (
          <ShoppingItem key={item.id} item={item} routeName={routeName} />
        ))}
      </div>
      <div className="buttons-container">
        {index[1] < items.length && (
          <button
            className="button"
            onClick={() => setIndex([index[0] + 4, index[1] + 4])}
          >
            Show More &rarr;
          </button>
        )}
        {index[1] > 4 && (
          <button
            className="go-back-button"
            onClick={() => setIndex([index[0] - 4, index[1] - 4])}
          >
            Go Back &larr;
          </button>
        )}
      </div>
    </div>
  );
};

export default Preview;
