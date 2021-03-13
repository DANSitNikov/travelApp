import React from "react";
import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
  data: [
    {id: 1, country: 'Germany', capital: 'Berlin'},
    {id: 2, country: 'China', capital: 'Peking'},
    {id: 3, country: 'Italy', capital: 'Rome'},
    {id: 4, country: 'Japan', capital: 'Tokyo'},
    {id: 5, country: 'USA', capital: 'Washington'},
    {id: 6, country: 'Canada', capital: 'Ottawa'},
    {id: 7, country: 'Brazil', capital: 'Brasilia'},
    {id: 8, country: 'Norway', capital: 'Oslo'},
  ],
});

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;