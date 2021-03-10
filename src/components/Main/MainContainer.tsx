import React from "react";
import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
  data: [
    {id: 1, country: 'Germany'},
    {id: 2, country: 'China'},
    {id: 3, country: 'Italy'},
    {id: 4, country: 'Japan'},
    {id: 5, country: 'USA'},
    {id: 6, country: 'Canada'},
    {id: 7, country: 'Brazil'},
    {id: 8, country: 'Norway'},
  ],
});

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;