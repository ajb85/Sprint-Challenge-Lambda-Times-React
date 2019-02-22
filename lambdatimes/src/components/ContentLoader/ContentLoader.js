import React, { Component } from "react";
import TopBar from "../TopBar";
import Header from "../Header";
import Content from "../Content/Content";

const ContentLoader = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Content />
    </div>
  );
};

export default ContentLoader;
