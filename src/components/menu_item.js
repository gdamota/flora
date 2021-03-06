import React from "react";
import {withRouter} from "react-router-dom";
import "./styles/menu_item.scss";

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + imageUrl})`}}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Explore</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
