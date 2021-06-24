import React from "react";
import MenuItem from "./menu_item";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../redux/directory/directory_selector";
import "./styles/directory.scss";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({id, ...otherProps}) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
