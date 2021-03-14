import React from "react";
import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
});

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;