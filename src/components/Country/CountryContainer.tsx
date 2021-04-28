import {connect} from "react-redux";
import Country from "./Country";
import {GlobalState} from "../../reducers/rootReducer";

const mapStateToProps = (state: GlobalState) => ({
  language: state.languages.data,
});

const CountryContainer = connect(mapStateToProps, null)(Country);

export default CountryContainer;
