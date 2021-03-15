import React from "react";
import Main from "./Main";
import {connect} from "react-redux";
import {changeVisibilityToTrue} from "../../reducers/searchReducer";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
});

const MainContainer = connect(mapStateToProps, {
  changeVisibilityToTrue,
})(Main);

export default MainContainer;