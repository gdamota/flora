import React, {useEffect} from "react";
import Directory from "../components/directory";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as directoryActions from "../redux/directory/directory_actions";
import "./styles/homepage.scss";

const HomePage = ({directoryActions}) => {
  useEffect(
    () => {
      directoryActions.getCategorys();
    },
    [directoryActions]
  );
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    directoryActions: bindActionCreators(directoryActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
