import Main from "./Main";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
  inputValue: state.search.inputValue,
  language: state.languages.data,
});

const MainContainer = connect(mapStateToProps, null)(Main);

export default MainContainer;
