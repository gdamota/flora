import React from "react";
import Directory from "../components/directory";
import "./styles/homepage.scss";
import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = ({directoryActions}) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
